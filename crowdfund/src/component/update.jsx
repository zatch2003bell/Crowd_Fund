
import { useState } from 'react';
import { updateProject } from '../services/createCampaign';

import { setGlobalState, useGlobalState } from '../store'
import {FaTimes} from 'react-icons/fa'
// import { CreateCampaign } from '../services/createCampaign';
// import { updateProject } from '../services/createCampaign';


function Update({project}){
    const [updateModal] = useGlobalState('updateModal');

    const [description,setDescription]=useState('');

  
    const [cost,setcost]=useState('');
    const [deadline,setDeadline]=useState('');

   

  
    

    const handleSubmit=async (e)=>{
        e.preventDefault();

        

        console.log(deadline);
      
        // await update(params);
        // onClose();

        
       
    }



    const onClose= ()=>{
        setGlobalState('updateModal','scale-0');
        reset();
    }

    const reset=()=>{
        setDeadline('');
        setDescription('');

        setcost('');
      
    }

    return(
       // https://images.pexels.com/photos/4498792/pexels-photo-4498792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

       <div className={`fixed outline-none top-10  w-screen min-h-screen flex
        items-center justify-center bg-slate-700 bg-opacity-50 backdrop-blur-xl
        transform transition-transform duration-300 ${updateModal} border-black `} 
            // style={{backgroundImage: `url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
            >
                <div className="  flex flex-wrap justify-center items-center outline-none  w-full  
                  bg-no-repeat text-slate-800 mt-3 border-black">
                <div className=" w-full  flex flex-wrap px-1 py-2 justify-between">
                       
                        <button
                            onClick={onClose}
                            type="button"
                            className=" outline-dashed mr-none border-0 bg-transparent"
                    >
                  <FaTimes />
                </button>
                <h1 className='font-mono hover:font-serif mb-10  text-3xl w-full  text-center' >UPDATE YOUR CAMPAIGN</h1>
    
                </div>
                
                    <form onSubmit={handleSubmit}>
                        <div className= 'outline-none px-20  flex'>
                            <div className='outline-none  overflow-hidden w-full h-80 mr-10'
                            >
                                <img 
                                className='w-full h-full object-cover rounded-2xl'
                                src={project?.img || "https://i.pinimg.com/564x/95/8c/20/958c20c7d82325ea5ae05ec1b5ae4160.jpg"}/>
                            </div>
                            <div className='w-full   outline-none'>
                            
                                
                            
                                <div className='  mb-5 relative'>
                                    <label className='absolute'>Description* </label><br/>
                                    <textarea 
                                    className='w-full py-1.5 mt-1 bg-transparent border-b-2
                                    appearance-none border-black' onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                                </div>
                                <div className='bg-transparent outline-none flex mb-5'>
                                <div className='  mb-5 relative'>
                                    <label className='absolute'>cost * </label><br/>
                                    <input type="number" placeholder='ETH'
                                    className='w-full py-1.5 mt-1 bg-transparent border-b-2
                                    appearance-none border-black' onChange={(e)=>{setcost(e.target.value)}} value={cost}/>
                                </div>
                                
                                <div className='ml-20 w-1/2 flex flex-wrap justify-end outline-none'>
                                    <label className='w-full '>Deadline * </label><br/>
                                    <input type="date"
                                    className='w-full py-1 mt-1 bg-transparent border-b-2
                                    appearance-none border-black' onChange={(e)=>{setDeadline(e.target.value)}} value={deadline}/>
                                </div>
                            </div>
                        
                                
                    
                        
                            </div>
                            </div>
                            
                        <button type="submit"
                        className='w-44 mb-4 text-[18px] justify-center items-center ml-96  flex mt-6 rounded-xl shadow-slate-900 shadow-2xl py-3 bg-slate-400 font-semibold text-white  hover:bg-slate-500 transition-colors  duration-300'>Update</button>
                        
                        
                    </form>
                </div>
            </div>
        )
    }

    export default Update