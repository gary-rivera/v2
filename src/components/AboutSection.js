import SectionTitle from "../utils/SectionTitle";
import profilePic from '../img/profile-picture1.jpeg';
import UnderMaintenance from '../utils/UnderMaintenance';

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { /*fade, photoAnim,*/ scrollReveal } from '../animation'
import { useScroll } from "../utils/useScroll";


function AboutSection() {
  const [element, controls] = useScroll();

  return (
    <AboutStyle 
      id="about"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <HideStyle>
             <SectionTitle title="About" index="1"/>
        </HideStyle>
        <AboutContainerStyle id="hereIAm">
          <TextStyle>
          <motion.p>
            I'm an aspiring software developer that just graduated from <span>Rithm School</span>, a full-stack web development bootcamp in San Francisco, CA. Since then I've interned with <span>Numbers API</span> and now I'm focusing on finding a full-time role that I can continue to develop all of my skills!
            <br/>
            <br/>
            When I'm not applying to jobs I mostly like to tinker with past projects and contributing to open-source online projects. I'm also currently doing the <span>#100DaysOfCode</span> so if you have any suggestions on what projects to work on let me know! 
            <br/>
          </motion.p>
          <br/>
          <div className="top-skills"> 
            <p>As of now, some of my favorite technologies to work with are: </p>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>React.js (v17.0.2)</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Flask</li>
              <li>PostgresSQL</li>
            </ul>
          </div>
          </TextStyle>
          <ProfileImageStyle>
            <img className="headshot" src={profilePic} alt="profile portrait"/>
          </ProfileImageStyle>
        </AboutContainerStyle>
      </DescriptionStyle>
    </AboutStyle>
  )
}

const AboutContainerStyle = styled.div`
  display:flex;
  justify-content: center;
  
  margin: 0;
  margin-right: 0 !important;
  padding: 1.5rem 3rem 3rem 3rem;
`;

const TextStyle = styled.div`
  display: inline-block;
  padding-right: 1rem;

  /* appearance  */
  border-radius: 5px;
  height: 45%;
  width: 30vw;
  
  p {
    /* text */
    padding: 0;
    font-size: 0.9rem;
    font-weight: light;
    color: rgba(244, 244, 244, 0.75);
  }

  .top-skills {
    padding-top: 0.75rem 0 0 0;

    ul {
      list-style: none;
      -webkit-columns: 2;
      -moz-columns: 2;
      columns: 2;
      list-style-position: inside;
      color: rgba(244, 244, 244, 0.75);
      padding-top: 0.75rem;
      width:20vw;

      li {
        position: relative;
        padding: .25rem 0 0.25rem 1rem;
        font-size: 0.9rem;
        width: 15rem;

        &:before {
          content: '⨠';
          position: absolute;
          left: 0;
          color: #52b788;
        }
        /* max-width: 5rem; */
      }
    }
  }
`;

const ProfileImageStyle = styled.div`
  max-height: 45%; 
  width: 15vw;
  padding-left: 1rem;


  img{ 
    box-shadow:rgba(82,183,136, 0.5) 12.5px 12.5px /*, rgba(82,183,136, 0.2) 10px 10px, rgba(82,183,136, 0.1) 15px 15px, rgba(82,183,136, 0.05) 20px 20px*/;
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


export default AboutSection;