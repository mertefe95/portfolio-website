import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import { faSmile, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

function Home() {
return (
<main className="main flex flex-col justify-center items-center h-screen pb-64 text-white text-center md:mx-20">
    <h2 className="text-5xl pb-4 md:text-3xl md:pb-6">Hello, I'm Mert Efe Isikgor. <FontAwesomeIcon icon={faSmile}/> </h2>
    <h2 className="text-5xl pb-4 md:text-3xl md:pb-12">I'm a Jr. Web Developer <FontAwesomeIcon icon={faThumbsUp}/> </h2>
    <button className="px-4 py-2 border-white border-2 text-3xl md:text-lg">View my work </button>
</main>
);
}


export default Home;
