import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser, faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar =()=> {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoS} alt="logo"  />
            {/* <img className='sub-logo' src={LogoSubtitle} alt="Sachin" /> */}
        </Link>

        <nav>
            <NavLink exact ="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact ="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact ="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bgxqo%2BoBGQDialEEt7gJq%2Fg%3D%3D'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='anchor-icon'/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/SachiNk16'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-icon'/>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar