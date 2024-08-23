import { useGlobalState,setGlobalState  } from "../store";
import { FaRegCalendarTimes } from "react-icons/fa";
import { deleteProject } from "../services/createCampaign";
function Delete({ids}){
    const [deleteModal]=useGlobalState('deleteModal');
    console.log(deleteModal);

    const onClose= ()=>{
        setGlobalState('deleteModal','scale-0');
        
    }

    const handle = () =>{

        deleteProject(ids);
    }
    return (
        <>  
         <div className={`fixed outline-none top-10  w-screen min-h-screen flex
        items-center justify-center bg-slate-700 bg-opacity-50 backdrop-blur-xl
        transform transition-transform duration-300 ${deleteModal} border-black`}>
            <div className=" w-full  flex flex-wrap px-1 py-2 justify-between">
                <form onSubmit={handle}>
                    
                    <div className="px-5 py-5 outline-dashed width-full">
                    <p>u sure u want to delete</p>
                        <div className="px-5 py-5 outline-dashed width=full">
                        <button
                    className='w-44 mb-4 text-[18px] justify-center items-center ml-96 flex mt-6 rounded-xl
                     shadow-slate-900 shadow-2xl py-3 bg-green-700 text-white  hover:bg-slate-500 transition-colors  duration-300'>
                            Confirm
                    </button>
                        </div>
                        <div className="px-5 py-5 outline-dashed width-full">
                        <button
                    className='w-44 mb-4 text-[18px] justify-center items-center ml-96 flex mt-6 rounded-xl
                     shadow-slate-900 shadow-2xl py-3 bg-red-800 text-white  hover:bg-slate-500 transition-colors  duration-300'
                     onClick={onClose}>
                            Cancel
                    </button>
                        </div>
                    </div>
                </form>
            </div>
         </div>
            
        </>
    )
}

export default Delete