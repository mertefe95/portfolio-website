import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faFacebookF, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import TailwindCSS from  "../assets/tailwind.css";

library.add(fab)

function Nav() {

return(
<header className="header h-40 bg-white flex items-center">
    <div className="logo-div">
        <h2></h2>
    </div>

    <nav className="nav flex absolute right-0 pr-10 font-black md:px-10 sm:mx-24">
        <ul className="links flex pr-5 tracking-widest sm:flex-col sm:text-sm sm:tracking-wide sm:list-disc">
            <li className="px-4"><Link to="/">HOME</Link></li>
            <li className="px-4"><Link to="./about">ABOUT ME</Link></li>
            <li className="px-4"><Link to="/myworks">MY WORKS</Link></li>
        </ul>

        <ul className="icons flex sm:flex-col">
            
            <li className="px-4"><a href="https://www.instagram.com/mertefeisikgor/"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className="px-4"><a href="https://www.facebook.com/efeisikgor/"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li className="px-4"><a href="https://github.com/mertefe95"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li className="px-4"><a href="https://www.linkedin.com/in/mert-efe-i%C5%9F%C4%B1kg%C3%B6r-997712164/"><FontAwesomeIcon icon={faLinkedin}/></a></li>  
        </ul>
    </nav>


</header>
);
}


export default Nav;
