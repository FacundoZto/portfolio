import './mobile.css';

const Mobile = ({isOpen, setIsOpen}) => {

    return(
        <div className="mobile">
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <span class="material-symbols-outlined">menu_open</span>
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#About' onClick={() => setIsOpen(!isOpen)}>
                        <span class="material-symbols-outlined">account_circle_full</span>Sobre Mí
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#Projects' onClick={() => setIsOpen(!isOpen)}>
                        <span class="material-symbols-outlined">laptop_windows</span>Proyectos
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#Contact' onClick={() => setIsOpen(!isOpen)}>
                        <span class="material-symbols-outlined">contact_mail</span>Contacto
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;