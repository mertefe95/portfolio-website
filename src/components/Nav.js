import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faFacebookF, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <li className="px-4"><a href="/">HOME</a></li>
            <li className="px-4"><a href="./about">ABOUT ME</a></li>
            <li className="px-4"><a href="#">CONTACT ME</a></li>
            <li className="px-4"><a href="/myworks">MY WORKS</a></li>
        </ul>

        <ul className="icons flex sm:flex-col">
            
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></li>  
        </ul>
    </nav>


</header>
);
}


export default Nav;
