import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function MyWorks() {
return (
    <main className="myworks-body">
        <div className="myworks-container flex flex-col text-black mx-6 my-4">
            <div className="hug-a-mug-div">              
                <div className="grid-item-content mb-4">
                    <h2 className="uppercase text-2xl mb-4">Hug A Mug Coffee Shop Project</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">Click for Github Repo Link</a>
                </div>
                <a href="https://cafe-shop-react-tailwindcss.vercel.app"> CLICK ON IMAGE FOR WEBSITE
                <img src="/images/image1.jpg" className="mt-4"/>
                </a>
            </div>

            <div className="nyx-bar-div mt-4">
                <div className="grid-item-content mb-4">
                    <h2 className="uppercase text-2xl mb-4">Nyx Cocktail & Bar Project</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/nyx-bar-project">Click for Github Repo Link</a>
                    </div>
                    <a href="https://nyx-bar-project.vercel.app"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/image2.jpg" className="mt-4"/>
                    </a>
            </div>


            <div className="fanbird-div  mt-4">
                <div className="grid-item-content  mb-4">
                    <h2 className="uppercase text-2xl mb-4">Fanbird Project (Participated as a Contributor)</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/fanbird-web-1">Click for Github Repo Link</a>
                    </div>
                    <a href="https://fanbird-web-1.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/fanbird-img.png" className="mt-4" />
                    </a>
            </div>

            <div className="assginment-div mt-4">
                <div className="grid-item-content mb-4">
                    <h2 className="uppercase text-2xl mb-4">Simple Swell Email Verification Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assignment-project-react-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/assignment-project-img.png" className="mt-4" />
                    </a>
            </div>

            <div className="assginment-two-div mt-4">
                <div className="grid-item-content mb-4">
                    <h2 className="uppercase text-2xl mb-4">Simple Coolhaus Ice Cream Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src="/images/assignmentproject2.png" className="mt-4"/>
                    </a>
            </div>


        </div>
    </main>
);
}

export default MyWorks;