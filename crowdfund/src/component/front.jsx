import {setGlobalState, useGlobalState } from "../store"
const Front = ()=>{
    const [stats]=useGlobalState('stats')

    return(
        <>
                <div className="text-center bg-white text-gray-800 py-20 px-6">
        <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold
        tracking-tight mb-10"
        >
            <span className="capitalize mb-4">Price is what you pay, value is what you get</span>
            <br />
            <span className="text-3xl text-orange-700 mb-4 capitalize">what you are waiting for,  come and explore our site !</span>
            <br/>
            <span className=" text-green-600 mb-4 font-serif text-6xl">metaFund</span>
        </h1>
        <div className="flex justify-center items-center space-x-2">
            <button
            type="button"
            className="inline-block px-9 py-5 mt-4  bg-green-600
            text-white font-medium text-lg leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
            onClick={()=>{setGlobalState('createModal','scale:100')}}
            >
            Create your Campaign here
            </button>

           
        </div>

        <div className="flex justify-center items-center mt-10">
            <div
            className="flex flex-col justify-center items-center
            h-20 border shadow-md w-full"
            >
            <span
                className="text-lg font-bold text-green-900
                leading-5"
            >
                {stats?.totalProjects || 0}
            </span>
            <span>Projects</span>
            </div>
            <div
            className="flex flex-col justify-center items-center
            h-20 border shadow-md w-full"
            >
            <span
                className="text-lg font-bold text-green-900
                leading-5"
            >
                {stats?.totalBacking || 0}
            </span>
            <span>Backs</span>
            </div>
    
            <div
            className="flex flex-col justify-center items-center
            h-20 border shadow-md w-full"
            >
            <span
                className="text-lg font-bold text-green-900
                leading-5"
            >
                {stats?.Donations || 0}ETH
            </span>
            <span>Donated</span>
            </div>
        </div>
        </div>
        </>
    )
}

export default Front