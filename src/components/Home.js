import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";


function Home() {
return (
<main className="main flex flex-col justify-center font-bold items-center h-screen pb-64 text-black text-center md:mx-20 tracking-widest">
    <h2 className="text-5xl pb-4 md:text-3xl md:pb-6">Dear Visitor, I'm Mert Efe Isikgor. </h2>
    <h2 className="text-5xl pb-4 md:text-3xl md:pb-12">I'm a Jr. Web Developer  </h2>
    <a href="/myworks" className="px-4 py-2 border-black border-2 text-3xl md:text-lg">View my work </a>
</main>
);
}


export default Home;
