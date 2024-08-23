
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { truncate } from '../store'

// import { FaEthereum } from 'react-icons/fa'


// import { Link } from "react-router-dom"

const Projects = ({ projects }) => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])
  const [date,deadline] = useState('');


  const getCollection = () => projects.slice(0, end)

  useEffect(() => {
    deadline(new Date(projects?.deadline * 1000).toLocaleDateString('en-GB').replace(/\//g, '-'));
    setCollection(getCollection())
  }, [projects, end])


{/* {collection.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {projects.length > collection.length ? (
        <div className="flex justify-center items-center my-5">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
          text-white font-medium text-xs leading-tight uppercase
          rounded-full shadow-md hover:bg-green-700"
            onClick={() => setEnd(end + count)}
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  ) */}
  return (
    <div className="flex flex-col px-6 py-6 mb-7 ">
      <div className="flex justify-center items-center flex-wrap">
        {collection.map((card,i)=>(
            // <div key={i}> Card</div>
            <ProjectCard key={i}  card={card} />
        ))}
      </div>
      
      <div className="flex justify-center items-center space-x-2">
            <button
            type="button"
            className="inline-block px-9 py-5 mt-4  bg-blue-400
            text-white font-medium text-lg leading-tight uppercase
            rounded-full shadow-md hover:bg-blue-600"
            onClick={()=>{setEnd(count+end)}}
            >
            Load more
            </button>

           
        </div>
    </div>
        
        )
}

const ProjectCard = ({card})=>(
  
  <>
    <div id="cards" className="text-lg rounded-lg px-4 py-5 w-64 shadow-2xl bg-transparent m-4 ">
      <Link to={`/projects/`+ card.id}>
        <img 
        src= { card.img || "https://th.bing.com/th/id/OIP.sn_jz8pKbOR8oWLhc8gfLwHaFj?rs=1&pid=ImgDetMain"}
        className="rounded-xl h-64 w-full object-cover"/>

        <div className="p-4">
          <h3 className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">{card.title}</h3>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Owner:</span><span className="text-base" >{truncate(card.owner, 4, 4, 11)}</span>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">DeadLine:</span>
          <span className="text-base">{new Date(card?.deadline * 1000).toLocaleDateString('en-GB').replace(/\//g, '-')}</span>
        </div>

        <div>
          <span className="ml-4 mr-4 font-mono shadow-lg px-2 rounded-lg">Target:</span><span className="text-base "><small>{card.cost}</small></span>
        </div>

        <div className="ml-4 mr-4 mt-4 font-mono shadow-lg px-2 rounded-lg ">
          {card.description}
        </div>

      </Link>
    </div>
  </>
)

// const ProjectCard = ({ project }) => {
//   const expired = new Date().getTime() > Number(project?.expiresAt + '000')

//   return (
//     <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
//       <Link to={'/projects/' + project.id}>
//         <img
//           src={project.imageURL}
//           alt={project.title}
//           className="rounded-xl h-64 w-full object-cover"
//         />

//         <div className="p-4">
    

//           <div className="flex flex-col">


//             <small className="text-gray-500">
//               {expired ? 'Expired' : daysRemaining(project.expiresAt) + ' left'}
//             </small>
//           </div>

//           <div className="w-full bg-gray-300 overflow-hidden">
//             <div
//               className="bg-green-600 text-xs font-medium
//             text-green-100 text-center p-0.5 leading-none
//             rounded-l-full"
//               style={{ width: `${(project.raised / project.cost) * 100}%` }}
//             ></div>
//           </div>

//           <div
//             className="flex justify-between items-center 
//         font-bold mt-1 mb-2 text-gray-700"
//           >
//             <small>{project.raised} ETH Raised</small>
//             <small className="flex justify-start items-center">
//               <FaEthereum />
//               <span>{project.cost} ETH</span>
//             </small>
//           </div>

//           <div
//             className="flex justify-between items-center flex-wrap
//             mt-4 mb-2 text-gray-500 font-bold"
//           >
//             <small>
//               {project.backers} Backer{project.backers == 1 ? '' : 's'}
//             </small>
//             <div>
//               {expired ? (
//                 <small className="text-red-500">Expired</small>
//               ) : project?.status == 0 ? (
//                 <small className="text-gray-500">Open</small>
//               ) : project?.status == 1 ? (
//                 <small className="text-green-500">Accepted</small>
//               ) : project?.status == 2 ? (
//                 <small className="text-gray-500">Reverted</small>
//               ) : project?.status == 3 ? (
//                 <small className="text-red-500">Deleted</small>
//               ) : (
//                 <small className="text-orange-500">Paid</small>
//               )}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

export default Projects