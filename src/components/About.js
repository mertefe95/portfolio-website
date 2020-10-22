import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImage from "../assets/images/my-image.jpg";
import TailwindCSS from "../assets/tailwind.css";


function About() {
    return (
        <div className="about h-screen text-white flex justify-center mt-20">
            <div className="about-img-div pt-10 ml-8">
                <img className="about-img h-48 rounded-full" src={myImage} />
            </div>

            <div className="about-content pl-12 mt-20 font-semibold tracking-widest leading-8 relative">
                <h2>Welcome to my Portfolio Website.</h2>
                <p>I'm new to the Tech and Developer, Coding Industry. I've been gaining skills in the areas of HTML, CSS, TailwindCSS, JavaScript, React JS, Next JS.</p>
                <p>I've been practicing them with some projects and honing my skills. And now I'm open and ready to practice my skills further and develop real world projects.</p>
                <p>Please see view my work section to inspect my work and my previous projects more closely.</p>
            
                <br/>
                <br/>
            
                <span>Development, Coding Languages and Frameworks that I've learned on my journey are shown at below:</span>
                    <ul className="list-disc">
                        <li>HTML: From the day I started my journey on Coding I've been designing Website Projects with HTML.</li>
                        <li>CSS: With its <strong>TailwindCSS</strong> Framework I've almost used on all my side and main projects and created many creative and inspiring layouts and designs.</li>
                        <li>JS: My experience with JavaScript is unfortunately not that much. I couldn't find a proper place to use that in my Projects yet, trying to find more ways and places to improve.</li>
                        <li>REACT: With React, lately I've been creating my all projects, sometimes I incorprate its framework of Next.Js, I've been enjoying the component model system and trying to master this language.</li>
                    </ul>
            </div>

            <div className="about-icons h-54 text-white mb-40 absolute bottom-0 text-6xl">
                <ul className="flex justify-around items-center">
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