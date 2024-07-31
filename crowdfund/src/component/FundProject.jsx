
import { useState } from 'react';
import { setGlobalState, useGlobalState } from '../store'
import {FaTimes} from 'react-icons/fa'
import { backProject } from '../services/createCampaign';



function FundProject({project}){
    const [backModal] = useGlobalState('backModal');
    const[amount,setAmount]= useState('')

  
    

    const handleSubmit=async (e)=>{
        e.preventDefault();

        await backProject(project?.id,amount);
        onClose();

        
       
    }



    const onClose= ()=>{
        setGlobalState('backModal','scale-0');
        reset();
    }

    const reset=()=>{
        setAmount(0);
    }

    return(
       // https://images.pexels.com/photos/4498792/pexels-photo-4498792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

        <div className={`fixed outline-none top-10  w-screen min-h-screen flex
    items-center justify-center bg-black bg-opacity-50 
    transform transition-transform duration-300 ${backModal} border-black `} 
        // style={{backgroundImage: `url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
        >
            <div className="flex flex-wrap justify-center items-center outline-none  w-full  
             backdrop-blur-md bg-no-repeat text-white mt-3 border-black">
            <div className=" w-full  flex flex-wrap px-1 py-2 justify-between">
                   
                    <button
                        onClick={onClose}
                        type="button"
                        className=" outline-dashed mr-none border-0 bg-transparent"
                >
              <FaTimes />
            </button>
            <h1 className='font-mono hover:font-serif mb-10 font-semibold text-3xl w-full text-white text-center' >CREATE YOUR CAMPAIGN</h1>

            </div>
            
                <form onSubmit={handleSubmit}>
                    <div className= 'outline-none px-20  flex'>
                        <div className='outline-none  overflow-hidden w-full h-80 mr-10'
                        >
                            <img 
                            className='w-full h-full object-cover'
                            src={ "https://images.pexels.com/photos/11158851/pexels-photo-11158851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                        </div>
                        <div className='w-full   outline-none'>
                        <div className='bg-transparent outline-none flex mb-5'>
                        
                            
                         
                    
                            
                      
                            <div className='  mb-5 relative'>
                                <label className='absolute'>cost * </label><br/>
                                <input type="number" placeholder='ETH'
                                className='w-full py-1.5 mt-1 bg-transparent border-b-2
                                appearance-none border-black' onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>
                            </div>
                
                       
                        </div>
                        </div>
                        </div>
                        
                    <button type="submit"
                    className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black  hover:bg-white/60 transition-colors duration-300'>LOG IN!</button>
                    
                    
                </form>
            </div>
        </div>
        )
    }

    export default FundProject