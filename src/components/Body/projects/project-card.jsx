import './project-card.css';
import { motion } from "framer-motion"

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
                                Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className='project-link' href={project.github} target='_blank' rel="noreferrer" >
                        <div className='link-button'>
                            GitHub
                        </div>
                        </a>
                    )}
                </div>
            </motion.div>
            <motion.img src={project.image} className='project-photo' alt='demo' variants={cardVariants}/>
        </motion.div>
    )
}

export default ProjectCard;