//import {useEffect,useState} from 'react'
import {ethers} from 'ethers'
//import abi from '../artifacts/contracts/crowdfund.sol/crowdfund.json'
import crowdfund from  '../artifacts/contracts/crowdfund.sol/crowdfund.json'

const MetaConnect = async ()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider= async ()=>{
        if(provider){
            await provider.send("eth_requestAccounts",[]);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
                    
            let contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
            const contractAbi=crowdfund.abi;
            const contract = new ethers.Contract(
                    contractAddress,
                    contractAbi,
                    signer
                )
            console.log(contract);
            console.log(address);
        } else console.error("Not Connect");
    }
    window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
    })
    
    provider && loadProvider();

        // const [account,setAccount]= useState("");
        // const [contract,setContract]= useState(null);
        // const [provider,setProvider]= useState(null);

        // useEffect(()=>{
        //     const provider = new ethers.providers.Web3Provider(window.ethereum);
        //     const loadProvider= async ()=>{
        //         if(provider){
        //             await provider.send("eth_requestAccounts",[]);
        //             const signer = provider.getSigner();
        //             const address = await signer.getAddress();
        //             setAccount(address);
        //             let contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
        //             const contractAbi=crowdfund.abi;
        //             const contract = new ethers.Contract(
        //                 contractAddress,
        //                 contractAbi,
        //                 signer
        //             )
        //             console.log(contract);
        //             setContract(contract);
        //             setProvider(provider);

        //         }
        //         else console.error("META MASK NOT INSTALL");
        //     }
        //     provider && loadProvider()
        //  },[]);
        // const [state,setState] = useState({
        //     provider:null,
        //     signer:null,
        //     contract:null
        // })
        
        // const [account,setAccount]=useState('NOT CONNECTED');
        

        //     const template = async ()=>{
        //     const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
        //     const contractAbi=crowdfund.abi;
        
        //     const {ethereum}=window;
        
        //     const account = await ethereum.request({
        //         method:"eth_requestAccounts"
        //     })
        
        //     // setAccount(account);
        
        //     window.ethereum.on("accountsChanged",()=>{
        //         window.location.reload();
        //     })
        
        //     const provider = new ethers.providers.Web3Provider(ethereum);
        //     const signer = provider.getSigner();
        
        //     const contract = new ethers.Contract(
        //         contractAddress,
        //         contractAbi,
        //         signer
        //     )
        //     // setState({provider,signer,contract});
        //     }
        //  template();
        
}
export default MetaConnect