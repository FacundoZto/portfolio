import './mobile.css';
import {Link} from 'react-scroll';

const Mobile = ({isOpen, setIsOpen}) => {

    return(
        <div className="mobile">
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <span class="material-symbols-outlined">menu_open</span>
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <span class="material-symbols-outlined btn">account_circle</span>
                    <Link
                    to="About" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={100}
                    className={'link'}
                    onClick={() => setIsOpen(!isOpen)}
                    >About</Link>
                </div>
                <div className='mobile-option'>
                    <span class="material-symbols-outlined btn">laptop_windows</span>
                    <Link
                    to="Projects" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={100}
                    className={'link'}
                    onClick={() => setIsOpen(!isOpen)}
                    >Projects</Link>
                </div>
                <div className='mobile-option'>
                    <span class="material-symbols-outlined btn">contact_mail</span>
                    <Link
                    to="Contact" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={100}
                    className={'link'}
                    onClick={() => setIsOpen(!isOpen)}
                    >Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Mobile;