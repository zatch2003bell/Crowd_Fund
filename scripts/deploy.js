const hre=require("hardhat")

async function main(){

  const Fund= await hre.ethers.getContractFactory("crowdfund");
  const  fund= await Fund.deploy();

  await fund.deployed()

  console.log("deployed address:",`${fund.address}`);
}

main();

