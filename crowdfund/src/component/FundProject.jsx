
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
    items-center justify-center bg-slate-700 bg-opacity-50  backdrop-blur-xl
    transform transition-transform duration-300 ${backModal} border-black `} 
        // style={{backgroundImage: `url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
        >
            <div className="flex flex-wrap justify-center items-center outline-none  w-full  
             bg-no-repeat text-white mt-3 border-black">
            <div className=" w-full  flex flex-wrap px-1 py-2 justify-between">
                   
                    <button
                        onClick={onClose}
                        type="button"
                        className=" outline-dashed mr-none border-0 bg-transparent"
                >
              <FaTimes />
            </button>
            <h1 className='font-mono hover:font-serif mb-10 font-semibold text-3xl w-full text-white text-center' >Fund Campaign</h1>

            </div>
            
                <form onSubmit={handleSubmit}>
                    <div className= 'outline-none px-20  flex '>
                        <div className=' bg-slate-500 text-lg rounded-lg px-4 py-5 w-96 h-80 shadow-2xl bg-transparent m-4'
                        >
                            <img 
                            className='w-full h-full object-cover '
                            src={ project?.img}/>
                        </div>
                        <div className='w-full   outline-none'>
                        <div className='bg-transparent outline-none flex mb-5'>
                        
                            
                         
                    
                            
                      
                            <div className=' ml-20 mb-5 mt-12 relative'>
                                <label className='absolute'>AMOUNT</label><br/>
                                <input type="number" placeholder='ETH'
                                className='w-full py-1.5 mt-1 bg-transparent border-b-2
                                appearance-none border-black' onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>
                            </div>
                
                       
                        </div>
                        </div>
                        </div>
                        
                    <button type="submit"
                    className='w-98 px-12 py-3  ml-60
                     mb-4  mt-6 rounded-full bg-slate-400 shadow-slate-800
                     shadow-2xl text-black font-semibold  hover:bg-slate-500  hover:text-white transition-all duration-300'>Fund</button>
                    
                    
                </form>
            </div>
        </div>
        )
    }

    export default FundProject