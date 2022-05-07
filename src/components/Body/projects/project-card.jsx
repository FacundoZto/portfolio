import './project-card.css';
// import { motion } from "framer-motion"

// const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 2 },
//   }

const ProjectCard = ({project}) => {
    return(
        <div className='project-card'
        // dragConstraints={{ left: -100, right: 100 }}
        // whileHover={{ scale: 1.05 }}
        >
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <p>{project.about}</p>
                <div className='project-links'>
                    {project.demo && (
                        <a className='project-link' href={project.demo} target='_blank' rel="noreferrer" >
                            <div className='link-button'>
                                {/* <span class="material-symbols-outlined">language</span> */}
                                Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className='project-link' href={project.github} target='_blank' rel="noreferrer" >
                        <div className='link-button'>
                            GitHub
                            {/* <i class="devicon-github-original"></i>GitHub */}
                        </div>
                        </a>
                    )}
                </div>
                {/* <div className='project-tags'>
                        {project.tags.map((tag) => {
                            return(
                                <label className='tag'>{tag}</label>
                            )
                        })}
                </div> */}
            </div>
            <img src={project.image} className='project-photo' alt='demo' />
        </div>
    )
}

export default ProjectCard;