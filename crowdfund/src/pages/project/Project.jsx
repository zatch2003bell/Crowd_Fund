import { useParams } from "react-router-dom"
import ProjectDetail from "../../component/ProjectDetail"
import Update from "../../component/update"
import { loadProject } from "../../services/createCampaign"
import {useEffect} from 'react'
import { useGlobalState } from "../../store"
import FundProject from "../../component/FundProject"
const Project = ()=>{
    const {id}= useParams()
    console.log(id)
    const [project] = useGlobalState('project')
    console.log(project)

    useEffect(()=>{
        const fetchProject = async ()=>{
            await loadProject(id);

        }
        fetchProject();
    },[id])

    return(
        <>
            <ProjectDetail project={project}/>
            <Update project={project}/>
            <FundProject project={project}/>
        </>
    )
}

export default Project