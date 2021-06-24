import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { Grid, Paper, Box } from '@material-ui/core';
import TailwindCSS from '../assets/tailwind.css';
import Collapsible from "./Collapsible";

function MyWorks() {
  const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      display: 'flex',
      margin: '0px',
      maxHeight: '600px',
    },
    paper: {
      width: '430px',
      height: '650px',
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <main className="myworks-body">
      <Grid container className="grid-container" spacing={12}>

      <Grid item xs={12} sm={6} md={6} lg={4} style={{ paddingTop: "50px" }} className="grid-left custom-grid-item">
          <Paper className="paper leftside-paper" style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
        
            <h2 className="my-works-h2">JS.SOCIAL PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/jssocial-nextjs-remake">View on Github</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 mx-1 rounded-list-item">
                  <a href="https://js.social">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/js-social.png">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Project Info: A membership-based Javascript Community,</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Worked as Front End Developer,</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Client Project to Upwork. </p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( Next.JS ) + TypeScript" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + Material UI" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Stripe" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"></li>
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Switched the project from Static HTML to Next.js</p></li>
              <li><p className="tracking-wider text-left inline">Implementing TailwindCSS and TailwindUI components for better looking page designs and renewed them.</p></li>
              <li><p className="tracking-wider text-left inline">Created a contact form and created success/error modals, then saved that form into Airtable.</p></li>
              <li><p className="tracking-wider text-left inline">Created Stripe Checkout for User Programmes.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

      <Grid item xs={12} sm={6} lg={4} md={6} style={{ paddingTop: "50px"}} className="grid-piece grid-right custom-grid-item"> 
          <Paper className="paper rightside-paper" style={{ boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">VASTGOEDVIJVER PROJECT</h2>
            <ul className="buttons text-white flex justify-around py-6 sm:justify-center sm:items-center sm:flex-col">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/lucswart/Vastgoedvijver">
                    View Client Code (Private Repo)
                  </a>
              </li>
              <li className="p-4 lg:p-3 mx-2 sm:my-2 lg:my-0 bg-indigo-700 rounded-list-item">
                  <a  href="https://vastgoedvijver.com/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a  href="/images/vastgoedvijver.png">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Project Info: Netherlands based Real Estate Project,</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Worked under Byte24 as Front End Developer.</p></li>
            </ul>
              <ul className="flex flex-row sm:flex-col framework-ul justify-around items-center">
              <li className="py-1 px-1">
                <Chip className="chip" label="React JS ( Next JS ) + Axios + Firebase" color="primary" />
              </li>
              <li className="py-1 px-1">
                <Chip className="chip" label="CSS + SCSS + Bootstrap" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row framework-ul justify-around">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>
      
      <Grid item xs={12} sm={6} lg={4} md={6} style={{ paddingTop: "50px" }} className="grid-piece custom-grid-item">
          <Paper className="paper leftside-paper" style={{ boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">BLOG APP PROJECT</h2>
            <ul className="my-4 buttons flex justify-around  sm:justify-center sm:items-center sm:flex-col text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a className="rounded-full" href="https://github.com/mertefe95/revised-blogapp-client">
                    View Client Code
                  </a>
              </li>
              <li className="p-4 lg:p-3 mx-2 sm:my-2 lg:my-0 bg-indigo-700 rounded-list-item">
                  <a className="rounded-full text-center" href="https://revised-blogapp-client.vercel.app/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a className="rounded-full" href="/images/revised-blog-app.png">View As Image</a>
              </li>
            </ul>
            <ul className="text-center mt-1">
              <li className="list-none pb-1 grid-inner-text"><p className="tracking-wider">Self Made Project.</p></li>
              <li className="list-none pb-1 grid-inner-text"><p className="tracking-wider">MERN Stack Practicing.</p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center mt-2">
              <li className="py-1">
                <Chip label="React JS ( CRA ) + ReactRouterDom + Axios" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Node JS + Express JS + MongoDB (Atlas)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="CSS + SCSS + Material UI" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside mt-2">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Material UI Blog Template is used for getting used to Material UI and its templates.</p></li>
              <li><p className="tracking-wider text-left inline">Backend JWT Login, Bcrypt password hashing on registering, Email verification, User Profile Details. Various Mongoose Models. Express Server, Middleware, Routes setup have been done.</p></li>
              <li><p className="tracking-wider text-left inline">Filtering the blogs by its categories have been done.</p></li>
              <li><p className="tracking-wider text-left inline">Succesful REST Api connection with Front End Axios requests and fetching the response into state and then rendering that data when necessary.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} md={6} className="grid-piece custom-grid-item grid-right">
          <Paper className="paper rightside-paper" style={{ boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">TODO APP PROJECT</h2>
            <ul className="text-white buttons flex justify-around py-6 sm:justify-center sm:items-center sm:flex-col">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/fullstack-todo-app-client">
                    View Client Code
                  </a>
              </li>
              <li className="p-4 lg:p-3 sm:my-2 lg:my-0 bg-indigo-700 mx-1 rounded-list-item">
                  <a href="https://github.com/mertefe95/fullstack-todo-app-server">
                    View Backend Code
                  </a>
              </li>
              <li className="p-4 lg:p-3 lg:mb-0 sm:mb-2 bg-indigo-700 mr-1 rounded-list-item">
                  <a href="https://fullstack-todo-app-client.vercel.app/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/todoapp.png">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Self Todo Project, Both setup for Front End and Back End. All code has been Linted and Prettified.</p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( CRA ) + ReactRouterDom + Axios" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Node JS + Fastify + TypeScript + PostgreSQL + Swagger" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="CSS + Material UI + React Bootstrap" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around pt-4">
              <li className="py-1 px-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1 px-1">
                <Chip label="Heroku + Postgres DB Addon" color="primary" />
              </li>
              <li className="py-1 px-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1 px-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li className="tracking-wider text-left"><p className="tracking-wider inline">Heroku Postgres Live Database connection setup.</p></li>
              <li className="tracking-wider text-left"><p className="tracking-wider inline">Creating tables, routes, and storing the data in database.</p></li>
              <li className="tracking-wider text-left"><p className="tracking-wider inline">Responsive Web Design with usage of React Hooks. (mainly useContext, useEffect, useState)</p></li>
              <li className="tracking-wider text-left"><p className="tracking-wider inline">JavaScript map, filter, forEach functions have been used in React side to distribute data that is fetched from database into Front End rendering.</p></li>
              <li className="tracking-wider text-left"><p className="tracking-wider inline">Full Backend CRUD setup with Raw SQL coding without an ORM. Just using PG library for connection to DB.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} className="grid-piece custom-grid-item">
          <Paper className="paper leftside-paper" style={{ boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">SOCIALIZE CHAT APP</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/socialize-chat-app">
                    View on Github
                  </a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://socialize-live-chat.herokuapp.com/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/socialize-chat-app.png">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Real Time Chat Application to learn & improve on Socket IO Library. </p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="Node JS + Express JS + Vanilla JS + Static Folder Structure" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Socket IO" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="CSS" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around pt-4">
              <li className="py-1">
                <Chip label="Heroku" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">By Socket IO setup live chat is made possible between users.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-left custom-grid-item grid-right">
          <Paper className="paper rightside-paper" style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }} >
            <h2 className="my-works-h2">HUG A MUG COFFEE SHOP PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">
                    View on Github
                  </a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://cafe-shop-react-tailwindcss.vercel.app">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/image1.jpg">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Worked as Front End Developer.</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Client Project to Netherlands Real Estate Company. </p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( CRA + ReactRouterDom)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + Material UI" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">A trial project for a local coffee shop.</p></li>
              <li><p className="tracking-wider text-left inline">Automatic slider for images and React Zoom library for animations.</p></li>
              <li><p className="tracking-wider text-left inline">Full Responsive Design and Flexbox implementation.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="custom-grid-item">
          <Paper className="paper leftside-paper" style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">NYX BAR PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white" text-white>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/nyx-bar-project">View on Github</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://nyx-bar-project.vercel.app">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/image2.jpg">View As Image</a>
              </li>
            </ul>
            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Worked as Front End Developer.</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Client Project to Netherlands Real Estate Company. </p></li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-kj1">
                <Chip label="React JS ( CRA + ReactRouterDom )" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + Material UI" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-right custom-grid-item">
          <Paper className="paper rightside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">TIP CALCULATOR PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/tip-calculator">View on Github</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://tip-calculator-xi.vercel.app/">View on Vercel</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/tip-calculator.png">View As Image</a>
              </li>
            </ul>

            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Worked as Front End Developer.</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Client Project to Netherlands Real Estate Company. </p></li>
            </ul>

            <ul className="flex flex-row flex align-center justify-around">
              <li className="py-1">
                <Chip label="HTML" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="CSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="JavaScript" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-row align-center justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-left custom-grid-item">
          <Paper className="paper leftside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">FANBIRD PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/fanbird-web-1">View on Github</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://fanbird-web-1.vercel.app/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/fanbird-img.png">View As Image</a>
              </li>
            </ul>

            <ul className="list-disc text-center">
              <li className="list-none pb-3"><p className="tracking-wider">Worked as Front End Developer.</p></li>
              <li className="list-none pb-3"><p className="tracking-wider">Client Project to Netherlands Real Estate Company. </p></li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (Next.JS) + TypeScript" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + TailwindUI Components" color="primary" />
              </li>

            </ul>

            <ul className="flex flex-row justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-right custom-grid-item">
          <Paper className="paper rightside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">COOLHAUS ICE CREAM PAGE DESIGN PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">
                    View on Github
                  </a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item mx-1">
                  <a href="https://assignment-project-react-tailwind.vercel.app/">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/assignmentproject2.png">View As Image</a>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (Next.JS) + TypeScript" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + TailwindUI Components" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-left custom-grid-item">
          <Paper className="paper leftside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">SWELL VERIFICATION PAGE DESING PROJECT</h2>
            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">
                    View on Github
                  </a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 mx-1 rounded-list-item">
                  <a href="https://assignment-project-react-tailwind.vercel.app">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                <a href="/images/assignment-project-img.png">View As Image</a>
              </li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( Next.JS ) + TypeScript" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + TailwindUI Components" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-row justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-piece custom-grid-item grid-right">
          <Paper className="paper rightside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">FOLLOWUPS.CO PAGE DESIGN PROJECT</h2>

            <ul className="buttons flex justify-around py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/Followups.co-project/">View on Github</a>
              </li>
              <li className="p-4 lg:p-3 mx-1 bg-indigo-700 rounded-list-item">
                  <a href="https://followups-co-project.vercel.app">View on Website</a>
              </li>
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="/images/followups-co.png">View As Image</a>
              </li>
            </ul>

            <ul className="flex lg:flex-col sm:flex-row  justify-around items-center">
              <li className="py-1 pr-1">
                <Chip label="React JS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + TailwindUI Components & Templates" color="primary" />
              </li>
            </ul>
            <ul className="flex flex-row justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} className="grid-piece custom-grid-item">
          <Paper className="paper leftside-paper"  style={{ borderRadius: "10px", boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)" }}>
            <h2 className="my-works-h2">PORTFOLIO WEBSITE PROJECT (CURRENTLY BEING VIEWED)</h2>
            <ul className="buttons flex justify-center py-6 text-white">
              <li className="p-4 lg:p-3 bg-indigo-700 rounded-list-item">
                  <a href="https://github.com/mertefe95/portfolio-website">View on Github</a>
              </li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (CRA + ReactRouterDom)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS + Material UI" color="primary" />
              </li>
            </ul> 
            <ul className="flex flex-row justify-around">
              <li className="py-1">
                <Chip label="Netlify" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="GoDaddy" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="primary" />
              </li>
            </ul>
            <Collapsible>
            <ul className="list-disc list-inside mt-2">
              <li className="list-none mt-5 mb-2"><h3 className="tracking-wider underline font-bold text-black">What did I do in this Project ?: </h3></li>
              <li><p className="tracking-wider text-left inline">Sending Form Data to Firebase and Storing it.</p></li>
              <li><p className="tracking-wider text-left inline">Implementing Drag & Drop React Library and Uploading Multiple Images to Firebase Storage.</p></li>
              <li><p className="tracking-wider text-left inline">I've managed to create Front End Fetching for All User documents to show them.</p></li>
              <li><p className="tracking-wider text-left inline">I've created dynamic route with Next.js and by getting the query I've created specific dynamic post rendering.</p></li>
            </ul>
            </Collapsible>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default MyWorks;
