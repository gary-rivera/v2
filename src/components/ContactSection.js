import styled from "styled-components";
import SectionTitle from "../utils/SectionTitle";
import UnderMaintenance from "../utils/UnderMaintenance"
import { AboutStyle } from '../styles';
import { useState } from 'react';
import Toggle from '../utils/Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from "../utils/useScroll";
import { scrollReveal } from '../animation'

function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <ContactStyle
      id="contact"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <SectionTitle title="Contact" index="3" />
      <UnderMaintenance />
      {/* <h2> Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="1">
          <div className="detail">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.
            </p>
          </div>
        </Toggle>
        <Toggle title="2">
            <div className="detail">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.
              </p>
            </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
            <div className="detail">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </Toggle>
      </AnimateSharedLayout> */}
    </ContactStyle>
  )
};

const ContactStyle = styled(AboutStyle)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .detail {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;


export default FaqSection;