import warblerImg from '../img/projectScreenshots/warblerImg.png'
import warblerGif from '../img/projectScreenshots/warblerGif.gif'
import joblyImg from '../img/projectScreenshots/joblyImg.png'
import joblyGif from '../img/projectScreenshots/joblyGif.gif'
import flappy from '../img/projectScreenshots/flappy.png'
import flappyGif from '../img/projectScreenshots/flappyGif.gif'

/**
 * project format: 
 *    title: null,
      repoLink: null,
      deployedLink: null,
      technologies: null,
      projectScreenshot: null
 */


const projects = [
    {
      title: "Warbler",
      repoLink: 'https://github.com/DataDeveloper7865/warbler',
      deployedLink: 'http://warblology.herokuapp.com/',
      technologies: ['Python', 'Flask', 'PostgreSQL'],
      img: warblerImg,
      gif: warblerGif,
      description: 'A Twitter clone deployed on Heroku built using Python, Flask, PostgreSQL, and SQLAlchemy'
    }, 
    {
      title: "Jobly",
      repoLink: 'https://github.com/jacobson-ben/jobly-total',
      deployedLink: 'https://jobly-solutions.surge.sh/',
      technologies: ['Javascript', 'React', 'Node.js', 'Express', 'PostgresSQL'],
      img: joblyImg,
      gif: joblyGif,
      description: 'An application replicating the job listings, company an user profiles, built with a React front-end hosted on Surge and Express/Node.js back-end hosted on Heroku'
    }, 
    {
      title: "FlappyJS",
      repoLink: 'https://github.com/gary-rivera/flappy-bird-vanilla-js',
      deployedLink: 'https://gary-rivera.github.io/flappy-bird-vanilla-js/',
      technologies: ['Javascript'],
      img: flappy,
      gif: flappyGif,
      description: 'A vanilla JS clone of the classic mobile game Flappy Bird! Left click the canvas to have Flappy fly between the pipes and try to beat your high score!'
    }, 
  ]

export default projects;