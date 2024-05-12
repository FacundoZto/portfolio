import './project-card.css';
import { motion } from "framer-motion"

// const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 2 },
//   }
const cardVariants = {
    offscreen: {
      x: '-50vh',
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

const ProjectCard = ({project}) => {
    
    return(
        <motion.div className='project-card'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className='project-info' variants={cardVariants}>
                <label className='project-title'>{project.title}</label>
                <p className='project-about'>{project.about}</p>
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
            </motion.div>
            <motion.img src={project.image} className='project-photo' alt='demo' variants={cardVariants}/>
        </motion.div>
    )
}

export default ProjectCard;