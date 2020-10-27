import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/fanbird-img.png";
import image4 from "../assets/images/assignment-project-img.png";
import image5 from "../assets/images/assignmentproject2.png";

function MyWorks() {
return (
    <main className="myworks-body">
        <div className="myworks-container flex flex-col">
            <div className="hug-a-mug-div">              
                <div className="grid-item-content">
                    <h2 className="uppercase text-2xl">Hug A Mug Coffee Shop Project</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">Click for Github Repo Link</a>
                </div>
                <a href="https://cafe-shop-react-tailwindcss.vercel.app"> CLICK ON IMAGE FOR WEBSITE
                <img src={image1} />
                </a>
            </div>

            <div className="nyx-bar-div">
                <div className="grid-item-content">
                    <h2 className="uppercase text-2xl">Nyx Cocktail & Bar Project</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/nyx-bar-project">Click for Github Repo Link</a>
                    </div>
                    <a href="https://nyx-bar-project.vercel.app"> CLICK ON IMAGE FOR WEBSITE
                    <img src={image2} />
                    </a>
            </div>


            <div className="fanbird-div">
                <div className="grid-item-content">
                    <h2 className="uppercase text-2xl">Fanbird Project (Participated as a Contributor)</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/fanbird-web-1">Click for Github Repo Link</a>
                    </div>
                    <a href="https://fanbird-web-1.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src={image3} />
                    </a>
            </div>

            <div className="assginment-div">
                <div className="grid-item-content">
                    <h2 className="uppercase text-2xl">Simple Verification Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assignment-project-react-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src={image4} />
                    </a>
            </div>

            <div className="assginment-two-div">
                <div className="grid-item-content">
                    <h2 className="uppercase text-2xl">Simple Verification Page Design</h2>
                    <a className="uppercase text-x1" href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">Click for Github Repo Link</a>
                    </div>
                    <a href="https://assignment-project-react-tailwind.vercel.app/"> CLICK ON IMAGE FOR WEBSITE
                    <img src={image5} />
                    </a>
            </div>


        </div>
    </main>
);
}

export default MyWorks;