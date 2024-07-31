import {ethers} from 'ethers'
import { useState } from 'react'
import crowdfund from  '../artifacts/contracts/crowdfund.sol/crowdfund.json'
import {NavLink} from 'react-router-dom'
import { setGlobalState, useGlobalState } from '../store'

const Header = ()=>{
        const [address,setAddress] = useState(null);
        const [connectedAccount]=useGlobalState('connectedAccount');
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
                setAddress(address);
                setGlobalState('connectedAccount',address);
                console.log(connectedAccount);
            } else console.error("Not Connect");
        }
        window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
        })
        
        provider && loadProvider();
        }
    return(
        <>
             <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-7 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                       
                        <img
                            src="https://i.pinimg.com/564x/04/42/9b/04429b136b9d3ee537b103bab5aaab0e.jpg"
                            className="mr-3 h-16 shadow-2xl"
                            alt="Logo"
                        /> 
                    <div className="flex items-center lg:order-2 space-x-2">
                        {address ? <button
                        className=' text-white bg-orange-700 hover:bg-orange-800 focus:ring-4
                         focus:ring-orange-300 font-medium rounded-lg text-sm px-4
                          lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>{address}</button>:
                          <button className=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4
                         focus:ring-orange-300 font-medium rounded-lg text-sm px-4
                          lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                          onClick={MetaConnect}> Connect Wallet</button>}
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                             */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            {/* {address ?  <button >{address}</button>: <button onClick={MetaConnect}>connect</button> } */}
        </>
    )
}

export default Header