import { motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";
import Project from './Project';
import UnderMaintenance from "../utils/UnderMaintenance";
import projects from '../utils/projects'

//Styles
import { AboutStyle, DescriptionStyle, HideStyle } from '../styles.js';
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
        <ProjectsContainer className="hello">
          {
            projects && 
            projects.map(project => <Project project={project}/>)
          }
        </ProjectsContainer>
      </DescriptionStyle>
    </PortfolioStyle>
  )
}

const PortfolioStyle = styled(AboutStyle)`
  h2 {
    text-align: center;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;


const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  /* flex-wrap: wrap; */
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export default PortfolioSection;