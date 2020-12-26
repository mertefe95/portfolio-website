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
    <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 4
        </Typography>
        <Typography variant="h5" component="h2">
            TIP CALCULATOR PROJECT
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/tip-calculator">View on Github</a></Button>
        <Button variant="contained"><a href="https://tip-calculator-xi.vercel.app/">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/tip-calculator.png">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="HTML" color="primary"/></li>
        <li><Chip label="CSS" color="primary"/></li>
        <li><Chip label="JavaScript" color="primary"/></li>
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

            <div className="fanbird-div  mt-40">
            <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 5
        </Typography>
        <Typography variant="h5" component="h2">
            FANBIRD PROJECT 
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/fanbird-web-1">View on Github</a></Button>
        <Button variant="contained"><a href="https://fanbird-web-1.vercel.app/">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/fanbird-img.png">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
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

            <div className="assginment-two-div mt-40">
            <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 6
        </Typography>
        <Typography variant="h5" component="h2">
            COOLHAUS ICE CREAM PAGE DESIGN PROJECT
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">View on Github</a></Button>
        <Button variant="contained"><a href="https://assignment-project-react-tailwind.vercel.app/">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/assignmentproject2.png">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
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

            <div className="assginment-one-div mt-40">
            <Card className={classes.root}>
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project 6
        </Typography>
        <Typography variant="h5" component="h2">
            SWELL VERIFICATION PAGE DESING PROJECT
        </Typography>
        <Button variant="contained"><a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">View on Github</a></Button>
        <Button variant="contained"><a href="https://assignment-project-react-tailwind.vercel.app">View on Vercel</a></Button>
        <Button variant="contained"><a href="/images/assignment-project-img.png">View As Image</a></Button>

        <ul className="flex">
        <li><Chip label="React JS (Next.JS + TypeScript)" color="primary"/></li>
        <li><Chip label="TailwindCSS" color="primary"/></li>
        <li><Chip label="TailwindUI Components & Templates" color="primary"/></li>
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


        
    </main>
);
}

export default MyWorks;