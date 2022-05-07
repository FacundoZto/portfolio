import './social-contact.css';
import {SocialData} from '../data/social.js';

const SocialContact = () => {
    const data = SocialData;
    return(
        <div className='social-contact'>
            {data.map(item =>(
                <a href={item.link} target='_blank' rel="noreferrer">
                    <div className='social-icon-div'>
                        <img src={item.icon} className='social-icon' alt='social-icon' />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default SocialContact;