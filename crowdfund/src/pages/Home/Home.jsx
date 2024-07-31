import Projects from '../../component/Card'
import Front from '../../component/front'
import Campaign from '../Campaign'
import { useGlobalState } from '../../store'
import { useEffect } from 'react'

import { loadProjects } from '../../services/createCampaign'

const Home = ()=>{
    const [projects] = useGlobalState('projects')

    useEffect(  () => {
        async ()=>{
           await  loadProjects();
           console.log()
        }
       
    }, [])

    return(
        <>
            <Front/>
            <Projects projects={projects}/>
            <Campaign/>
           
        </>
    )
}
export default Home