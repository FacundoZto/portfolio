import './projects.css';
import {ProjectData} from '../../data/projects.js';
import ProjectCard from './project-card.jsx';
// import Separator from '../../common/separator/separator.jsx';

const Projects = () => {
    const data = ProjectData;
    return(
        <div className='projects'>
            {/* <Separator/> */}
            {/* <label className='section-title'>Proyectos</label> */}
            <div>
                {data.map(project => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;