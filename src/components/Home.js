import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import { Link } from 'react-router-dom';


function Home() {
return (
<main className="main flex flex-col justify-center font-bold items-center h-screen pb-64 text-black text-center md:mx-20 tracking-widest">
    <h2 className="text-5xl pb-8 md:text-3xl md:pb-4 md:pt-4  tracking-wide">Dear Visitor, I'm Mert Efe,</h2>
    <h2 className="text-3xl pb-8 md:text-xl md:pb-4 tracking-wide">Welcome to my page.</h2>
    <h2 className="text-3xl pb-8 md:text-xl md:pb-4 tracking-widest">I'm a JavaScript Developer and I enjoy/love coding great web applications and websites.</h2>
    <Link to="/myworks" className="px-4 py-2 border-black border-2 text-3xl md:py-0 md:text-lg">View my work </Link>
</main>
);
}


export default Home;
