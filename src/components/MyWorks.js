import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function MyWorks() {
return (
    <main className="myworks-body">
        <div className="myworks-container flex flex-col text-black mx-6 my-4">
            <div className="hug-a-mug-div">              
                <div className="grid-item-content mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Hug A Mug Coffee Shop Project <span >( Front End )</span></h2> 
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">Click for Github Repo Link</a>
                </div>
                <a href="https://cafe-shop-react-tailwindcss.vercel.app"> CLICK ON IMAGE FOR WEBSITE ( This project is created via React.js and TailwindCSS mainly.)
                <img src="/images/image1.jpg" className="mt-4 pt-6"/>
                </a>
            </div>

            <div className="nyx-bar-div mt-40">
                <div className="grid-item-content mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Nyx Cocktail & Bar Project <span >( Front End )</span></h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/nyx-bar-project">Click for Github Repo Link</a>
                    </div>
                    <a href="https://nyx-bar-project.vercel.app"> CLICK ON IMAGE FOR WEBSITE ( This project is created via React.js and TailwindCSS mainly. )
                    <img src="/images/image2.jpg" className="mt-4 pt-6"/>
                    </a>
            </div>

            <div className="js-social-div  mt-40">
                <div className="grid-item-content  mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">JS.Social Project <span >( Front End )</span></h2> 
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/js-social-project">Click for Github Repo Link</a>
                    </div>
                    <a href="https://js-social-project.vercel.app/"> CLICK ON IMAGE FOR WEBSITE ( This project is created via Next.js and TypeScript mainly. )
                    <img src="/images/js-social.png" className="mt-4 pt-6" />
                    </a>
            </div>

            <div className="tip-calculator-div  mt-40">
                <div className="grid-item-content  mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Tip Calculator Project  </h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/tip-calculator">Click for Github Repo Link</a>
                    </div>
                    <a href="https://js-social-project.vercel.app/"> CLICK ON IMAGE FOR WEBSITE (This project is created via HTML, CSS, JS mainly.)
                    <img src="/images/tip-calculator.png" className="mt-4 pt-6" />
                    </a>
            </div>


            <div className="fanbird-div  mt-40">
                <div className="grid-item-content  mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Fanbird Project <span > ( Front End, Participated as a Contributor ) </span> </h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/fanbird-web-1">Click for Github Repo Link</a>
                    </div>
                    <a href="https://fanbird-web-1.vercel.app/"> CLICK ON IMAGE FOR WEBSITE ( This project is created via Next.js and TypeScript mainly. )
                    <img src="/images/fanbird-img.png" className="mt-4 pt-6" />
                    </a>
            </div>

            <div className="assginment-div mt-40">
                <div className="grid-item-content mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Simple Swell Email Verification Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assignment-project-react-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/assignment-project-img.png" className="mt-4 pt-6" />
                    </a>
            </div>

            <div className="assginment-two-div mt-40">
                <div className="grid-item-content mb-4 pt-6">
                    <h2 className="uppercase text-2xl mb-4">Simple Coolhaus Ice Cream Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/assignmentproject2.png" className="mt-4 pt-6"/>
                    </a>
            </div>


        </div>
    </main>
);
}

export default MyWorks;