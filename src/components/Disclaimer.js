import maintenance2 from '../img/maintenance2.png';
import { HashLink as Link } from 'react-router-hash-link';
// import {Link} from 'react-router-dom';


//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, discAnimation } from "../animation"

function Disclaimer({disclaimer, setDisclaimer}) {
  return (
    <motion.div
      key="disclaim"
      variants={discAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    > 
    <DisclaimerStyle>
      <img src={maintenance2} alt="maintenance disclaimer"/>
      <motion.p variants={fade}>
        <h3>Disclaimer: </h3>
        <br/>
        I'm currently revamping my website. While I'm finishing up the final touches of transitioning to React feel free to follow me <a href="https://twitter.com/GaryDevelops" target="_blank" rel="noreferrer">
          <span>@GaryDevelops</span></a> as I progress through the 
          <a href="https://www.100daysofcode.com/" target="_blank" rel="noreferrer"> #100DaysOfCode</a> challenge.
        <br/>
        <br/>
        Full website will be launchd on July 7th, 2021. 
      </motion.p>
        <Link to="/#main">
        <motion.button 
          variants={fade}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick = {(evt) => {
              evt.preventDefault();
              setDisclaimer(true);
            }}
        >
          Go to Page
        </motion.button>
        </Link>
    </DisclaimerStyle>
    </motion.div>
  )
}

const DisclaimerStyle = styled.div`
  // appearance: 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #353535;
  border-radius: 5px;
  width: 40vw;
  height: 50%;
  padding: 2rem;
  margin: auto;
  margin-top: 2rem;

  //text
  color: #ffffff;
  text-align: center;
  font-weight: bold;

  img {
    max-width:15rem;
    align-self: center;
  }

  p {
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    color: #ffffff;
    align-self: center;
    padding: 1.25rem 0rem;
    
    span {
      font-weight: normal;
    }

    a {
      font-weight: normal;
      font-style: italic;
    }
  }

  /* button {
    margin-top: 5rem;
    display: inline-block;
    margin: 0;
  } */
`;


export default Disclaimer;