import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { Grid, Paper, Box } from '@material-ui/core';
import TailwindCSS from '../assets/tailwind.css';

function MyWorks() {
  const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100%',
      margin: '0px',
    },
    paper: {
      padding: theme.spacing(12),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <main className="myworks-body">
      <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} md={7}>
          <Paper className={classes.paper}>
            <h2>BLOG APP PROJECT ( FULLSTACK )</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/revised-blogapp-client">
                    View Client Code on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/revised-blogapp-server">
                    View Backend Code on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                {/** not good */}
                <Button variant="contained">
                  <a href="https://revised-blogapp-client.vercel.app/">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/revised-blog-app.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( CRA + ReactRouterDom + Axios)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Node JS + Express JS + MongoDB (Atlas)" color="primary" />
              </li>
    
              <li className="py-1">
                <Chip label="SCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Material UI" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

      <Grid item xs={12} md={7}>
          <Paper className={classes.paper}>
            <h2>SOCIALIZE CHAT APP</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/socialize-chat-app">
                    View on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                {/** not good */}
                <Button variant="contained">
                  <a href="https://socialize-live-chat-app.herokuapp.com">View on Heroku</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/socialize-chat-app.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="Node JS + Express JS + Static Folder Structure" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Socket IO" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Vanilla JavaScript" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="CSS" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Heroku" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>


        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>HUG A MUG COFFEE SHOP PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/cafe-shop-react-tailwindcss">
                    View on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                {/** not good */}
                <Button variant="contained">
                  <a href="https://cafe-shop-react-tailwindcss.vercel.app">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/image1.jpg">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( CRA + ReactRouterDom)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Material UI" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>NYX BAR PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/nyx-bar-project">View on Github</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://nyx-bar-project.vercel.app">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/image2.jpg">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( CRA + ReactRouterDom)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Material UI" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>JS.SOCIAL PROJECT </h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/js-social-project">View on Github</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://js-social-project.vercel.app/">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/js-social.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS ( Next.JS + TypeScript)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Material UI" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>TIP CALCULATOR PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/tip-calculator">View on Github</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://tip-calculator-xi.vercel.app/">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/tip-calculator.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col">
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

            <ul className="flex flex-col pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2 className="paper-heading">FANBIRD PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/fanbird-web-1">View on Github</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://fanbird-web-1.vercel.app/">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/fanbird-img.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (Next.JS + TypeScript)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindUI Components & Templates" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2 className="paper-heading">COOLHAUS ICE CREAM PAGE DESIGN PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">
                    View on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://assignment-project-react-tailwind.vercel.app/">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/assignmentproject2.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (Next.JS + TypeScript)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindUI Components & Templates" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>SWELL VERIFICATION PAGE DESING PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/assingment-project-two-nextjs-tailwind">
                    View on Github
                  </a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://assignment-project-react-tailwind.vercel.app">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/assignment-project-img.png">View As Image</a>
                </Button>
              </li>
            </ul>
            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (Next.JS + TypeScript)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindUI Components & Templates" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>FOLLOWUPS.CO PAGE DESIGN PROJECT</h2>

            <ul className="buttons flex justify-around py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/Followups.co-project/">View on Github</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://followups-co-project.vercel.app">View on Vercel</a>
                </Button>
              </li>
              <li className="p-4">
                <Button variant="contained">
                  <a href="/images/followups-co.png">View As Image</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindUI Components & Templates" color="primary" />
              </li>
            </ul>

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Vercel" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>PORTFOLIO WEBSITE PROJECT (CURRENTLY BEING VIEWED)</h2>

            <ul className="buttons flex justify-center py-6">
              <li className="p-4">
                <Button variant="contained">
                  <a href="https://github.com/mertefe95/portfolio-website">View on Github</a>
                </Button>
              </li>
            </ul>

            <ul className="flex flex-col justify-around items-center">
              <li className="py-1">
                <Chip label="React JS (CRA + ReactRouterDom)" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="TailwindCSS" color="primary" />
              </li>
              <li className="py-1">
                <Chip label="Material UI" color="primary" />
              </li>
            </ul> 

            <ul className="flex flex-col justify-around pt-4">
              <li className="py-1">
                <Chip label="Netlify" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="GoDaddy" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Git" color="secondary" />
              </li>
              <li className="py-1">
                <Chip label="Github" color="secondary" />
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default MyWorks;
