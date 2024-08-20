import { ethers } from 'ethers'
import { getGlobalState,setGlobalState } from '../store';
import abi from  '../artifacts/contracts/crowdfund.sol/crowdfund.json'
let tx

const Contractabi = abi.abi
const getEtheriumContract = async ()=>{
    const connect=getGlobalState('connectedAccount');
    if(connect){
        const provider= new ethers.providers.Web3Provider(window.ethereum);
        const signer= provider.getSigner();
        const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
        
        const contract = new ethers.Contract(contractAddress,Contractabi,signer);

        return contract;
        

    }
    else return getGlobalState('connectedAccount');
}

// if(getGlobalState('connectedAccount')){
//   await loadProjects()
// }

const CreateCampaign = async(
    title,
    description,
    img,

    date,
    cost
    
    
    
    
    // imageURL,
) =>{
    try{
        if (!window.ethereum) return alert('Please install Metamask');
        const contract = await getEtheriumContract();
        console.log(contract);
        console.log("cost",typeof cost);
        console.log("title",typeof title);
        console.log("date",typeof date);
        console.log("description",typeof description);
        cost= ethers.utils.parseEther(cost);
        console.log(cost);


        // target= ethers.utils.parseEther(target);
        // console.log(target);
        // expiresAt = ethers.BigNumber.from(expiresAt);
        const id= await contract.createProject(
            title,
            description,
            img,
            date,
            cost
            
            // cost,
            // expiresAt,
           
        )
        console.log("campaign working");
        await id.wait();
        await loadProjects();

    console.log(`Campaign created`,id);
    }
    catch(error){
        console.log("something is off here")
        reportError(error);
        
    }
    
}
const updateProject = async (
    id,
    cost,
    description,
    expiresAt,
  
  ) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
  
      const contract = await getEtheriumContract()
      tx = await contract.updateProject(id, cost, description, expiresAt)
      await tx.wait()
      await loadProject(id)
    } catch (error) {
      reportError(error)
    }
  }
  
  const deleteProject = async (id) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
      const contract = await getEtheriumContract()
      await contract.deleteProject(id)
    } catch (error) {
      reportError(error)
    }
  }
  
  const loadProjects = async () => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
  
      const contract = await getEtheriumContract()
      const projects = await contract.getProjects()
      const stats = await contract.stats()
      console.log(projects);
      console.log(stats);
  
      setGlobalState('stats', structureStats(stats))
      setGlobalState('projects', structuredProjects(projects))
    } catch (error) {
      reportError(error)
    }
  }
  
  const loadProject = async (id) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
      const contract = await getEtheriumContract()
      const project = await contract.getProject(id)
  
      setGlobalState('project', structuredProjects([project])[0])
    } catch (error) {
      alert(JSON.stringify(error.message))
      reportError(error)
    }
  }
  
  const backProject = async (id, amount) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
      const connectedAccount = getGlobalState('connectedAccount')
      const contract = await getEtheriumContract()
      amount = ethers.utils.parseEther(amount)
  
      tx = await contract.backProject(id, {
        from: connectedAccount,
        value: amount._hex,
      })
  
      await tx.wait()
      await getBackers(id)
    } catch (error) {
      reportError(error)
    }
  }
  
  const getBackers = async (id) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
      const contract = await getEtheriumContract()
      let backers = await contract.getBackers(id)
  
      setGlobalState('backers', structuredBackers(backers))
    } catch (error) {
      reportError(error)
    }
  }
  
  const payoutProject = async (id) => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')
      const connectedAccount = getGlobalState('connectedAccount')
      const contract = await getEtheriumContract()
  
      tx = await contract.payOutProject(id, {
        from: connectedAccount,
      })
  
      await tx.wait()
      await getBackers(id)
    } catch (error) {
      reportError(error)
    }
  }
  
  const structuredBackers = (backers) =>
    backers
      .map((backer) => ({
        owner: backer.owner.toLowerCase(),
        refunded: backer.refunded,
        timestamp: new Date(backer.timestamp.toNumber() * 1000).toJSON(),
        contribution: parseInt(backer.contribution._hex) / 10 ** 18,
      }))
      .reverse()
  
  const structuredProjects = (projects) =>
    projects
      .map((project) => ({
        id: project.id.toNumber(),
        owner: project.owner.toLowerCase(),
        title: project.title,
        description: project.description,
        timestamp: new Date(project.timestamp.toNumber()).getTime(),
        deadline: project.deadline,

        img:project.img,

        
        raised: parseInt(project.raised._hex) / 10 ** 18,
        cost: parseInt(project.cost._hex) / 10 ** 18,
        backers: project.backers.toNumber(),
        status: project.status,
      }))
      .reverse()
  

  
  const structureStats = (stats) => ({
    totalProjects: stats.totalProjects.toNumber(),
    totalBacking: stats.totalBacking.toNumber(),
    totalDonations: parseInt(stats.totalDonations._hex) / 10 ** 18,
  })

//  const getCampaign = async ()=>{

//         const contract = await GetContract();
//         const campaign= await contract.getCampaigns();
        
//         const projects = campaign.map((campaign,i)=>({
//             owner: campaign.owner,
//             title: campaign.title,
//             description: campaign.description,
//             cost: campaign.cost,
//             deadline:campaign.deadline,
//             amount_collect:campaign.amountCollected,
//             pid:i
//         }));
//         setGlobalState('project',projects);
//         return projects;
// }

//  const Donate = async (pid,amount)=>{
//     const contract = await GetContract();
//     const donates=await contract. donateToCampaign(pid,{
//         value:ethers.utils.parseEther(amount)
//     })

//     await donates.wait();
//     location.reload();
//     // const donation=getGlobalState('donations');
//     setGlobalState('donations',ethers.utils.parseEther(amount));
    
//     return donates;
// }

// const getDonator = async (pid)=>{
//     const contract = await GetContract();
//     const donations = await contract.getDonators(pid);

//     const numberOfDonations=donations[0].length;

//     const parseDonation=[];

//     for(let i=0;i<numberOfDonations;i++){
//         parseDonation.push({
//             donator:donations[0][i],
//             donations:ethers.utils.formatEther(donations[1][i].toString)

//         })
//     }
//     return parseDonation;


// }

const reportError = (error) =>{
    console.log(error.message);
    throw new Error ("no ethereum object")
}

export {
    CreateCampaign,
    updateProject,
    deleteProject,
    loadProjects,
    loadProject,
    backProject,
    getBackers,
    payoutProject,
}

