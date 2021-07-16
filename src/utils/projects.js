import flappyJS from '../img/projectScreenshots/flappyJS.png'
import warblerImg from '../img/projectScreenshots/warbler.png'
import testImg from '../img/projectScreenshots/testImg.png'
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
      description: 'A Twitter clone deployed on Heroku built using Python, Flask, PostgreSQL, and SQLAlchemy'
    }, 
    {
      title: "Jobly",
      repoLink: 'https://github.com/jacobson-ben/jobly-total',
      deployedLink: 'https://jobly-solutions.surge.sh/',
      technologies: ['Javascript', 'React', 'Node.js', 'Express', 'PostgresSQL'],
      img: testImg,
      description: 'An application replicating the job listings, company an user profiles, built with a React front-end hosted on Surge and Express/Node.js back-end hosted on Heroku'
    }, 
    {
      title: "FlappyJS",
      repoLink: 'https://github.com/gary-rivera/flappy-bird-vanilla-js',
      deployedLink: 'https://gary-rivera.github.io/flappy-bird-vanilla-js/',
      technologies: ['Javascript', 'py'],
      img: flappyJS,
      description: 'A vanilla JS clone of the classic mobile game Flappy Bird! Left click the canvas to have Flappy fly between the pipes and try to beat your high score!'
    }, 
  ]

export default projects;