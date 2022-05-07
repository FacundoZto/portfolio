import './about.css';
import coding from '../../../assets/coding.png';
import SocialContact from '../../common/social-contact.jsx';
import TechSkills from '../../common/skills.jsx';

const About = () => {
    return(
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    {/* <span className='first-letter'>Hi there 👋</span> */}
                    <p><span className='first-letter'>C</span>omencé en el mundo de la programación a través de Henry Bootcamp, el cual me permitió 
                        desarrollarme como Full Stack Web Developer. Actualmente me oriento al Front End desarrollando
                        proyectos para afianzar conceptos adquiridos y aprender nuevas tecnologías.<br/>
                        Motivado para trabajar en equipo y en búsqueda de nuevos desafíos donde pueda aportar 
                        valor y crecer profesionalmente. 
                    </p>
                    <SocialContact/>
                    {/* <h4>Skills</h4>
                    <TechSkills/> */}
                </div>
                <div className='about-photo'>
                    <img src={coding} className='picture' alt='Coding' />
                </div>
            </div>
            <div className='about-bottom'>
            <h4>Skills</h4>
            <TechSkills/>
            </div>
        </div>
    )
}

export default About;