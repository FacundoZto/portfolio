import './web.css';
import {motion} from 'framer-motion';

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
                <a href='#About'>
                    {/* <span class="material-symbols-outlined">account_circle_full</span> */}
                    Sobre Mí
                </a>
            </div>
            <div className='web-option'>
                <a href='#Projects'>
                    {/* <span class="material-symbols-outlined">laptop_windows</span> */}
                    Proyectos
                </a>
            </div>
            <div className='web-option'>
                <a href='#Contact'>
                    {/* <span class="material-symbols-outlined">contact_mail</span> */}
                    Contacto
                </a>
            </div>
        </motion.div>
    )
}

export default Web;