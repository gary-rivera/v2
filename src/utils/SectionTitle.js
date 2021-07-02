import { motion } from "framer-motion";
import styled from "styled-components";

//TODO: destructure props
function SectionTitle(props) {

  return (     
    <TitleStyle>
      <LineStyle />
        <span>0{props.index}. </span><h2>{props.title}</h2>
        <LineStyle />
    </TitleStyle>
  )
}

const TitleStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  h2 {
    padding: 0;
  }
  span{
    font-size: 2rem;
    padding-right: 0.5rem;
    font-family: 'Chakra Petch', sans-serif;

  }
`;

const LineStyle = styled.div`
  width: 40%;
  border-top: 1px solid rgba(255, 255, 255, 1); 
  margin: 0rem 1rem;
`;

export default SectionTitle;