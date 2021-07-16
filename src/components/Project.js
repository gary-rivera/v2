import projects from '../utils/projects'
import githubIcon from '../img/githubIcon.svg'
import linkIcon from '../img/linkIcon.svg' 

//Styling
import styled from "styled-components";

/**
 * ProjectCard takes
 * @returns 
 */

function Project({ project }) {
  const { title, deployedLink, technologies, img, repoLink, description } = project;

  return (
    <ProjectContainer className="project-container" >
      <div >
         <div className="image-container">
          <a className="repo" href={deployedLink}>
            <img className="project-image"src={img} alt={title}/>
          </a>
        </div>
        {/*
        <div className="details-container">
          <a href={deployedLink}><h4> {title}</h4></a>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="footer">
            <div className="technologies">
              {technologies.map((technology) => {
                  return <span>{technology}</span>
                })
              }
            </div>
            <div className="link-icons">
              <a href={repoLink} >
                <img src={githubIcon} alt="github link to repo"/>
              </a>
              <a href={deployedLink}>
                <img src={linkIcon} alt="direct link to website" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  /* background: #282828; */
  border: 3px solid red;
  
  img {
    max-width: 200px; 
  }

  h4{
    font-size: 2rem;
    font-weight: 400;
  }

  span {
    margin: 0rem 0.25rem;
    padding: 0rem 1rem;
    color: #ffffff;
    border: 2px solid #52b788;
    border-radius: 5px;
    font-family: 'Chakra Petch', sans-serif;
  }

  .project-image {
    display:block;
    z-index: -1;
  }
  
  .details-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .description {
    /* appearance  */
    background: rgba(168, 219, 168, 0.35);
    /* background: rgba(82,183,136, 0.35); */

    border-radius: 5px;
    padding: 0;
    height: 45%;
    padding: 1rem;
  }

  .description p{
    /* override global styling */
    width: 100%;

    padding: 0;
    font-size: 1rem;
  }

  .technologies {
    padding: 0.5rem;
    display:inline-block;
  }

  .link-icons {
    padding: 0.5rem;
    display:inline-block;
  }
  .link-icons a{
    padding: 0rem 0.25rem;
  }
`;



export default Project;