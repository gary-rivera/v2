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
  const { title, deployedLink, technologies, img, repoLink, description, gif } = project;

  function handleHover(evt) {
    if (evt._reactName === 'onMouseEnter'){
      evt.target.src = gif;
    }
    else if (evt._reactName === 'onMouseLeave'){
      evt.target.src = img;
    }
  }

  return (
    <ProjectContainer className="project-container">
      <div>
         <div className="image-container">
          <a className="repo" href={deployedLink}>
            <img 
              className="project-image"
              src={img} 
              alt={title}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
            <img className="active-project-image"src={gif} alt={title}/>
            
          </a>
        </div>
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
            <div className="links">
              <a href={repoLink} >
                <img src={githubIcon} alt="github link to repo"/>
              </a>
              <a href={deployedLink}>
                <img src={linkIcon} alt="direct link to website" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  /* background: #282828; */
  width: 70%;
  height: 18rem;
  z-index: 1;
  margin: 5rem 0rem;
  
  .image-container {
    /* border: 2px solid green; */
    border-radius: 5px;
    position: absolute;
    z-index: 0;
    width: 25%;
    height: 18rem;
    max-height: 20rem;
    overflow: hidden;
    background-color: rgba(82,183,136, 1);

    
    .project-image {
      border-radius: 5px;
      opacity: 70%;
      width: 100%;
      height: 18rem;
      max-height: 20rem;
      filter: grayscale(100%);
      transition: ease-out .3s;

    }
    .active-project-image{
      width: 100%;
      height: 18rem;
      position:absolute;
      background: white;
      opacity:0;
    }
  }
  
  .image-container:hover{
    background-color: rgba(82,183,136, 0);
    opacity: 1;
    .project-image {
      filter: none;
      transition: ease-in-out .3s;
    }
  }
  
  h4{
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Chakra Petch', sans-serif;

  }
  
  span {
    margin: 0rem 0.25rem;
    padding: 0rem 1rem;
    color: #ffffff;
    border: 2px solid #52b788;
    border-radius: 5px;
    background: rgba(30, 33, 35, 0.85);
    font-family: 'Chakra Petch', sans-serif;
  }
  
  .details-container {
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
  }
  
  .description {
    /* appearance  */
    background: rgba(30, 33, 35, 0.85);
    border: 1px solid rgba(244, 244, 244, 0.5);
    /* box-shadow:rgba(82,183,136, 0.5) -5px 5px; */
    max-width: 50%;
    border-radius: 5px;
    padding: 0;
    height: 45%;
    padding: 1rem;
    z-index: 1;
  }

  .description p {
    /* override global styling */
    width: 100%;
    padding: 0;
    font-size: 1rem;
  }

  .technologies {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.5rem;
    width: 25rem;
    flex-wrap: wrap;
    z-index:1;
    
    span {
      margin-top: 0.3rem;
    }
  }

  .links {
    padding: 0.5rem;
    display:inline-block;
  }
  .links a{
    padding: 0rem 0.25rem;
  }
`;



export default Project;