import warblerImg from '../img/projectScreenshots/warblerImg.png'
import joblyImg from '../img/projectScreenshots/joblyImg.png'
import flappyImg from '../img/projectScreenshots/flappy.png'
import productivImg from '../img/projectScreenshots/productivImg.png';

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
      gif: 'https://media.giphy.com/media/eSsszxm0mGbk4reXnD/giphy.gif',
      description: 'A Twitter clone deployed on Heroku built using Python, Flask, and PostgreSQL. This application handles database relational tables between users, followers, and "liked" posts via SQLAlchemy.'
    }, 
    {
      title: "Jobly",
      repoLink: 'https://github.com/jacobson-ben/jobly-total',
      deployedLink: 'http://joelburton-jobly.surge.sh/',
      technologies: ['Javascript', 'React', 'Node.js', 'Express', 'PostgresSQL'],
      img: joblyImg,
      gif: 'https://media.giphy.com/media/bWieBvTg3rD6bEkCXf/giphy.gif',
      description: 'A mock job-searching application that features job filtering through companies, saves user data, such as jobs applied to, and even features company profiles profiles. Developed using React Hooks on the front-end, which is hosted on Surge and Express/Node.js back-end, hosted on Heroku.'
    }, 
    {
      title: "Prøductïv",
      repoLink: 'https://github.com/gary-rivera/productiv',
      deployedLink: 'https://gary-rivera.github.io/productiv/',
      technologies: ['Javascript', 'React'],
      img: productivImg,
      gif: 'https://media.giphy.com/media/tz2gP43rtCZqyB0tHs/giphy.gif',
      description: 'A react implementation of a Todo App that allows for adding, deleting, and editing tasks as well as assigning each task a priority level.'
    }, 
    {
      title: "FlappyJS",
      repoLink: 'https://github.com/gary-rivera/flappy-bird-vanilla-js',
      deployedLink: 'https://gary-rivera.github.io/flappy-bird-vanilla-js/',
      technologies: ['Javascript'],
      img: flappyImg,
      gif: 'https://media.giphy.com/media/I73muSeVxEMx1OiVCo/giphy.gif',
      description: 'The project that cemented my passion for software engineering! A vanilla JS clone of the classic mobile game Flappy Bird. Left click the canvas to have the bird sprite navigate between the pipes and try to beat your high score!'
    }, 
  ]

export default projects;