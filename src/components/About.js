import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImage from "../assets/images/my-image.jpg";
import TailwindCSS from "../assets/tailwind.css";


function About() {
    return (
        <div className="about text-black flex flex-col justify-center mt-20 mb-40">
            
            
            <div className="about-img-div m-8 rounded-3xl pl-8">
                <img className="about-img h-64" alt="author-photo" src={myImage} />
            </div>

            <div className="about-content px-8 mt-16 font-bold text-2xl tracking-widest leading-8 relative">
                <h2 className="mb-4">Welcome to my Portfolio Website.</h2>
                <p className="py-2">I'm new to the Tech and Development, Coding Industry. I've been gaining skills in the areas of HTML, CSS, TailwindCSS, JavaScript, React JS, Next JS.</p>
                <p className="py-2">I've been practicing them with some projects and honing my skills. And now I'm open and ready to practice my skills further and develop real world projects.</p>
                <p className="py-2">Please see view my work section to inspect my work and my previous projects more closely.</p>
            
                <br/>
                <br/>
            
                <span className="">Development, Coding Languages and Frameworks that I've learned on my journey are shown at below:</span>
                    <ul className="py-2">
                        <li className="py-2">HTML: From the day I started my journey on Coding I've been designing Website Projects with HTML.</li>
                        <li className="py-2">CSS: With its <strong>TailwindCSS</strong> Framework I've almost used on all my side and main projects and created many creative and inspiring layouts and designs.</li>
                        <li className="py-2">JS: My experience with JavaScript is unfortunately not that much. I couldn't find a proper place to use that in my Projects yet, trying to find more ways and places to improve.</li>
                        <li className="py-2">REACT: With React, lately I've been creating my all projects, sometimes I incorprate its framework of Next.Js, I've been enjoying the component model system and trying to master this language.</li>
                    </ul>
            </div>

            <div className="about-icons text-black text-6xl mt-16">
                <ul className="flex justify-around items-center ">
                    <li className="px-4"><FontAwesomeIcon icon={faHtml5}/> </li>
                    <li className="px-4"><FontAwesomeIcon icon={faCss3}/> </li>
                    <li className="px-4"><FontAwesomeIcon icon={faJs}/> </li>
                    <li className="px-4"><FontAwesomeIcon icon={faReact}/> </li>
                </ul>
            </div>

        
        </div>
    )
}

export default About;