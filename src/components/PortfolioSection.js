import { motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";
import Project from './Project';
import UnderMaintenance from "../utils/UnderMaintenance";
import projects from '../utils/projects'

//Styles
import { AboutStyle, DescriptionStyle, HideStyle } from '../styles.js';
import { titleAnim } from "../animation";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "../utils/useScroll";

function PortfolioSection() {
  const [element, controls] = useScroll();

  return (
    <PortfolioStyle
      id="portfolio"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <HideStyle>
          <SectionTitle title="Portfolio" index="2"/>
        </HideStyle>
        {/* <UnderMaintenance /> */}
        <ProjectsStyle className="hello">
          {
            projects && 
            projects.map(project => <Project project={project}/>)
          }
        </ProjectsStyle>
      </DescriptionStyle>
    </PortfolioStyle>
  )
}

const PortfolioStyle = styled(AboutStyle)`
  display: flex;
  justify-content: center;
  h2 {
    text-align: center;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;


const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 10rem;

  /* flex-wrap: wrap; */
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export default PortfolioSection;