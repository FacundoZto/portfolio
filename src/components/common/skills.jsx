import './skills.css';
// import {Skills} from '../data/skills.js';
// import {motion} from 'framer-motion';

const TechSkills = () => {
    // const data = Skills;
    return(
        <div className='tech-skills'>
            {/* {data.map(item =>(
                    <motion.div className='tech-icon-div'
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    >
                        <img src={item.icon} className='tech-icon' alt='skill-icon' />
                    </motion.div>
            ))} */}
            <label className='dev-label'><i class="devicon-html5-plain colored"></i>HTML</label>
            <label className='dev-label'><i class="devicon-css3-plain colored"></i>CSS</label>
            <label className='dev-label'><i class="devicon-javascript-plain colored"></i>Javascript</label>
            <label className='dev-label'><i class="devicon-react-original colored" ></i>React</label>
            <label className='dev-label'><i class="devicon-nextjs-line"></i>Nextjs</label>
            <label className='dev-label'><i class="devicon-redux-original colored" ></i>Redux</label>
            <label className='dev-label'><i class="devicon-nodejs-plain colored"></i>NodeJs</label>
            <label className='dev-label'><i class="devicon-express-original colored"></i>Express</label>
            <label className='dev-label'><i class="devicon-sequelize-plain colored"></i>Sequelize</label>
            <label className='dev-label'><i class="devicon-postgresql-plain colored"></i>PostgreSQL</label>
            
        </div>
    )
}

export default TechSkills;