import { setGlobalState, truncate } from "../store"
import { FaEthereum } from "react-icons/fa"
const ProjectDetail = ({project})=>{
  console.log(project)
    return(
        <>
            <div>
                <div className="px-4 py-5">
                    <div className=" flex flex-wrap justify-start text-lg rounded-lg px-4 py-5  h-screen shadow-2xl bg-transparent m-4">

                        <div id="cards" className=" text-lg rounded-lg px-4 py-5 w-96 h-80 shadow-2xl bg-transparent m-4 ">
                            <img 
                                src={ project?.img || "https://th.bing.com/th/id/OIP.sn_jz8pKbOR8oWLhc8gfLwHaFj?rs=1&pid=ImgDetMain"}
                                className="rounded-xl h-64 w-full object-cover"/>
                        </div>
                        <div className="flex justify-center items-center space-x-2    ml-9">
                            <div >
                            <button
                              type="button"
                              className="inline-block px-9 py-5 mt-4 shadow-2xl bg-gray-600
                              text-white font-medium text-lg leading-tight uppercase 
                              rounded-full  hover:bg-green-700 w-30 mr-10" 
                              onClick={()=>{setGlobalState('updateModal','scale-100')}}
                              >
                              Edit
                            </button>
                            </div>
                            
                            <div>
                            <button
                              type="button"
                              className="inline-block px-9 py-5 mt-4 shadow-2xl bg-red-600
                              text-white font-medium text-lg leading-tight uppercase 
                              rounded-full  hover:bg-green-700 w-30 mr-10" 
                              >
                              delete
                            </button>
                            </div>                           
                            
                            <div>
                            <button
                              type="button"
                              className="inline-block px-9 py-5 mt-4 shadow-2xl bg-green-600
                              text-white font-medium text-lg leading-tight uppercase 
                              rounded-full  hover:bg-green-700 w-30 mr-10" 
                              onClick ={()=>{setGlobalState('backModal','scale-100')}}
                              >
                              Fund
                            </button>
                            </div>
                            
           
                      </div>
                      
                            <div className="font-bold">
                                {/* {expired ? (
                                  <small className="text-red-500">Expired</small>
                                ) : project?.status == 0 ? (
                                  <small className="text-gray-500">Open</small>
                                ) : project?.status == 1 ? (
                                  <small className="text-green-500">Accepted</small>
                                ) : project?.status == 2 ? (
                                  <small className="text-gray-500">Reverted</small>
                                ) : project?.status == 3 ? (
                                  <small className="text-red-500">Deleted</small>
                                ) : (
                                  <small className="text-orange-500">Paid</small>
                                )} */}
                              </div>

                        <div className=" text-lg rounded-lg px-3 py-5 w-full  bg-transparent m-4">
     
                          <div className="mt-4 mb-4">
                            <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Title:</span><span className="font-bold capitalize text-lg" >{project?.title || 'Title of project'}</span>
                          </div>
                          <div className="mt-4 mb-4">
                            <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Owner:</span><span className="text-base" >{truncate(project?.owner || 'owners address', 4, 4, 11)}</span>
                          </div>
                          <div
                              className=" bg-green-600 text-xs font-medium
                                 text-green-100 text-center p-0.5 leading-none
                                rounded-l-full h-1 overflow-hidden max-w-full w-full mt-4 mb-4 mr-4"
                            style={{
                                    width: `${(project?.raised / project?.cost) * 100}%`,
                                          }}
                ></div>
                <div className=" flex justify-between items-center font-bold mt-2 mr-4">
                <small>{project?.raised} ETH Raised</small>
                <small className="flex justify-start items-center">
                  <FaEthereum />
                  <span>{project?.cost} ETH</span>
                </small>
              </div>
                            <div className="mt-4 mb-4">
                            <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">DeadLine:</span>
                            <span className="text-base">11-02-2024</span>
                        </div>
                        <div className="flex mt-4 mb-4">
                            <span className="  ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg"><FaEthereum/></span>
                            <span className="text-base">{8}ETH</span>
                        </div>

                        <div className="mt-4 mb-4">
                            <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Target:</span><span className="text-base ">{45}ETH</span>
                        </div>

                        <div className="ml-4 mr-4 mt-4 font-mono shadow-lg px-2 rounded-lg w-full ">
                            <span>{project?.description||"description"}
                            </span>
                        </div>
    
                        </div>
                </div>                    
                </div>
          </div>

        </>
    )
}

        {/* <div className="p-4">
          <h3 className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">project card</h3>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Owner:</span><span className="text-base" >{truncate("0x191991.....fffd..3434", 4, 4, 11)}</span>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">DeadLine:</span>
          <span className="text-base">11-02-2024</span>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Target:</span><span className="text-base "><small></small></span>
        </div>

        <div className="ml-4 mr-4 mt-4 font-mono shadow-lg px-2 rounded-lg ">
          description shows here
        </div> */}

    


export default ProjectDetail