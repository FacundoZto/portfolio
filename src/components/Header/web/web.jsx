import './web.css';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const Web = () => {
    return(
        <motion.div 
        className='web'
        transition={{
            duration: 0.5,
        }}
        animate={{
            x:-30,
        }}
        >
            <div className='web-option'>
                <Link
                to="About" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={550}
                className={'link'}
                >Sobre Mí</Link>
            </div>
            <div className='web-option'>
                <Link
                to="Projects" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={550}
                className={'link'}
                >Proyectos</Link>
            </div>
            <div className='web-option'>
                <Link
                to="Contact" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={550}
                className={'link'}
                >Contacto</Link>
            </div>
        </motion.div>
    )
}

export default Web;