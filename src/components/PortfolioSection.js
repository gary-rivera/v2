import Project from "./Project";
import { motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";
import UnderMaintenance from "../utils/UnderMaintenance";

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
        <UnderMaintenance />
        {/* <CardsStyle>
          <Project />
        </CardsStyle> */}
      </DescriptionStyle>
    </PortfolioStyle>
  )
}

const PortfolioStyle = styled(AboutStyle)`
  display: flex;
  justify-content: center;
  h2 {
    /* padding-bottom: 5rem; */
    text-align: center;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ProjectBoardStyle = styled(DescriptionStyle)`
  display: flex;
  justify-content: center;
`;

const CardsStyle = styled.div`
  display: flex;
  justify-content: center;

  /* flex-wrap: wrap; */
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export default PortfolioSection;