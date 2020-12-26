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



function MyWorks() {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      const classes = useStyles();
  
return (
    <main className="myworks-body">
    <div className="hug-a-mug-div">
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project 1
        </Typography>
        <Typography variant="h5" component="h2">
            HUG A MUG COFFEE SHOP PROJECT
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">View on Github</a></Button>
        <Button variant="contained"><a href="https://cafe-shop-react-tailwindcss.vercel.app">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/image1.jpg">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS ( CRA + ReactRouterDom)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div className="nyx-bar-div mt-40">
        <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 2
        </Typography>
        <Typography variant="h5" component="h2">
            NYX BAR PROJECT 
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/nyx-bar-project">View on Github</a></Button>
        <Button variant="contained"><a href="https://nyx-bar-project.vercel.app">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/image2.jpg">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS ( CRA + ReactRouterDom)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
    <div className="js-social-div  mt-40">
    <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 3
        </Typography>
        <Typography variant="h5" component="h2">
            JS.SOCIAL PROJECT 
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/js-social-project">View on Github</a></Button>
        <Button variant="contained"><a href="https://js-social-project.vercel.app/">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/js-social.png">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS ( Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="Material UI" color="primary"/></li>
        </ul>

        <ul className="flex">
            <li><Chip label="Vercel" color="secondary"/></li>
            <li><Chip label="Git" color="secondary"/></li>
            <li><Chip label="Github" color="secondary"/></li>
        </ul>

        
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
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


        
    </main>
);
}

export default MyWorks;