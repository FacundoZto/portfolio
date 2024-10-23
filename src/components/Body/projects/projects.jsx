import './projects.css';
import {ProjectData} from '../../data/projects.js';
import ProjectCard from './project-card.jsx';

const Projects = () => {
    const data = ProjectData;
    return(
        <div className='projects'>
            <div>
                {data.map(project => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;