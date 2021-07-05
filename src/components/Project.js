import projects from '../utils/projects'
import githubIcon from '../img/githubIcon.svg'
import linkIcon from '../img/linkIcon.svg' 

//Styling
import styled from "styled-components";

/**
 * ProjectCard takes
 * @returns 
 */


function Project() {
  return (
    <ProjectStyle>
      <div className="image-container">
        <a className="repo" href={projects.deployedLink}>
          <img className="project-image"src={projects.img} alt={projects.title}/>
        </a>
      </div>
      <div className="details-container">
        <a href={projects.deployedLink}><h4> {projects.title}</h4></a>
        <div className="description">
          <p>{projects.description}</p>
        </div>
        <div className="footer">
          <div className="technologies">
            {projects.technologies.map((technology) => {
                return <span>{technology}</span>
              })
            }
          </div>
          <div className="link-icons">
            <a href={projects.repoLink} >
              <img src={githubIcon} alt="github link to repo"/>
            </a>
            <a href={projects.repoLink}>
              <img src={linkIcon} alt="direct link to website" />
            </a>
          </div>
        </div>
      </div>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.div`
  /* background: #282828; */
  border: 1px solid rgba(255, 255, 255, 0.5); 
  border-radius: 5px;
  display:flex;
  width: 50vw;

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
    max-width: 100%;
    border-radius: 5px;
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

/**
 * const ProfileImageStyle = styled.div`
  max-height: 45%; 
  width: 15vw;
  padding-left: 1rem;


  img{ 
    box-shadow:rgba(82,183,136, 0.5) 12.5px 12.5px;
    border-radius: 5px;
    width: inherit;
    height: inherit;
    opacity: 0.5;
    transition: 1s ease-out;
    color: green;
  }
  img:hover { 
    opacity: 1;
  }
`;
 */


export default Project;