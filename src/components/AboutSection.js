import SectionTitle from "../utils/SectionTitle";
import profilePic from '../img/profile-picture1.jpeg';
import UnderMaintenance from '../utils/UnderMaintenance';

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { /*titleAnim, fade, photoAnim,*/ scrollReveal } from '../animation'
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
      <MaintenanceStyle id="HERE_I_AM">
        <SectionTitle title="About" index="1"/>
        {/* <UnderMaintenance className="maintenance-icon" /> */}
        <AboutContainerStyle id="hereIAm">
          <TextStyle>
          <motion.p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta deleniti eos unde nobis esse, cupiditate molestias deserunt nemo. Repellat officiis, reprehenderit mollitia voluptatem quasi animi inventore doloremque architecto error aliquid nihil reiciendis. 
          <br/>
          <br/>
          Fugit fuga quae optio magnam commodi laborum nobis est quas, consequatur alias quidem, aliquam modi, eaque laboriosam debitis sequi repudiandae amet. Voluptatem nulla porro animi dicta laudantium ducimus eos atque magni, assumenda recusandae quae maxime vitae temporibus labore alias illo consequatur expedita amet sequi fugiat quaerat ex qui autem quis! 
          <br/>
          <br/>
          Vel officiis laboriosam molestias expedita nihil, recusandae aliquid temporibus nulla, totam quisquam sint in sequi, possimus maiores!
          </motion.p>
          <br/>
          <div className="top-skills"> 
            <p>Here's a list of my strongest technologies to date: </p>
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
      </MaintenanceStyle>
    </AboutStyle>
  )
}

const MaintenanceStyle = styled(DescriptionStyle)`

`;


const AboutContainerStyle = styled.div`
  display:flex;
  justify-content: center;
  
  margin: 0;
  margin-right: 0 !important;
  padding: 1.5rem 3rem 3rem 3rem;

  /*  */
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