import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import { Grid, Paper } from "@material-ui/core";


function MyWorks() {
    const useStyles = makeStyles((theme) => ({
        grid: {
            width: '100%',
            margin: '0px'
        },
        paper: {
            padding: theme.spacing(12),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
      }));

      const classes = useStyles();
  
return (
    <main className="myworks-body">
    <Grid container spacing={2} className={classes.grid}>

    <div className="hug-a-mug-div">
    <Grid item xs={12} md={20}>
    <Paper className={classes.paper}>
    <div className="cafe-shop-paper">
        <h2>HUG A MUG COFFEE SHOP PROJECT</h2>

        <ul className="buttons flex justify-around">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://cafe-shop-react-tailwindcss.vercel.app">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/image1.jpg">View As Image</a></Button></li>
        </ul>

        <ul className="flex justify-around items-center">
        <li><Chip label="React JS ( CRA + ReactRouterDom)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
    </div>

    <div className="nyx-bar-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
        <div className="nyx-bar-paper">

        <h2>NYX BAR PROJECT</h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/nyx-bar-project">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://nyx-bar-project.vercel.app">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/image2.jpg">View As Image</a></Button></li>
        </ul>

        <ul className="flex justify-around items-center">
        <li><Chip label="React JS ( CRA + ReactRouterDom)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
   
    </Paper>
    </Grid>
    </div>
    
    <div className="js-social-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <div className="js-social-paper">
        <h2>JS.SOCIAL PROJECT </h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/js-social-project">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://js-social-project.vercel.app/">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/js-social.png">View As Image</a></Button></li>
        </ul>

        <ul className="flex justify-around items-center">
        <li><Chip label="React JS ( Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
    </div>

    <div className="tip-calculator-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    
    <div className="tip-calculator-paper">
        
        <h2>
            TIP CALCULATOR PROJECT
        </h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/tip-calculator">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://tip-calculator-xi.vercel.app/">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/tip-calculator.png">View As Image</a></Button></li>
        </ul>

        <ul className="flex justify-around items-center">
        <li><Chip label="HTML" color="primary"/></li>
        <li><Chip label="CSS" color="primary"/></li>
        <li><Chip label="JavaScript" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

      </div>
    </Paper>
    </Grid>
    </div>

    <div className="fanbird-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <div className="paper">
        <h2 className="paper-heading">
            FANBIRD PROJECT 
        </h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/fanbird-web-1">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://fanbird-web-1.vercel.app/">View on Vercel</a></Button></li> 
        <li className="p-4"><Button variant="contained"><a href="/images/fanbird-img.png">View As Image</a></Button></li>
        </ul>

        <ul className="flex justify-around items-center">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
    </div>

    <div className="assginment-two-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <div className="paper">
        <h2 className="paper-heading">
            COOLHAUS ICE CREAM PAGE DESIGN PROJECT
        </h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://assignment-project-react-tailwind.vercel.app/">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/assignmentproject2.png">View As Image</a></Button></li>
        </ul>

        <ul className="flex flex justify-around items-center">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
    </div>

    <div className="assginment-one-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <div className="paper">
        <h2>SWELL VERIFICATION PAGE DESING PROJECT</h2>

    <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://assignment-project-react-tailwind.vercel.app">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/assignment-project-img.png">View As Image</a></Button></li>
    </ul>
        <ul className="flex flex justify-around items-center">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
</div>

    <div className="assginment-one-div">
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <div className="paper">

        <h2>FOLLOWUPS.CO PAGE DESIGN PROJECT</h2>

        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/Followups.co-project/">View on Github</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="https://followups-co-project.vercel.app">View on Vercel</a></Button></li>
        <li className="p-4"><Button variant="contained"><a href="/images/followups-co.png">View As Image</a></Button></li>
        </ul>

        <ul className="flex flex justify-around items-center">
        <li><Chip label="React JS" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
        </Paper>
        </Grid>
            </div>

            <div className="portfolio-div">
            <Grid item xs={12}>
            <Paper className={classes.paper}>
            <div className="paper">
        <h2>
            PORTFOLIO WEBSITE PROJECT (CURRENTLY BEING VIEWED)
        </h2>
        
        <ul className="buttons flex">
        <li className="p-4"><Button variant="contained"><a href="https://github.com/mertefe95/portfolio-website">View on Github</a></Button></li>
        </ul>


        <ul className="flex flex justify-around items-center">
        <li><Chip label="React JS (CRA + ReactRouterDom)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex justify-around pt-4">
            <li><Chip label="Netlify" color="secondary"/></li>
            <li><Chip label="GoDaddy" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        </div>
    </Paper>
    </Grid>
</div>

        </Grid>
    </main>
);
}

export default MyWorks;