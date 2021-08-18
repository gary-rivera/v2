import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion";


function Nav() {
  return (
    <NavStyle>
      <h1> <Link to="/" id="logo">@GaryDevelops</Link></h1>
      <ul>
        <li>
          <Link to="/#about"><span id="alt_font">01. </span>About</Link>
        </li>
        <li>
          <Link to="/#portfolio"><span id="alt_font">02. </span>Portfolio</Link>
        </li>
        <li>
          <Link to="/#contact"><span id="alt_font">03. </span>Connect</Link>
        </li>
      </ul> 
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #1E2123;
  position: sticky;
  top: 0;
  z-index: 5;
  top: 0;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    min-height: 10vh;
    #logo {
      margin: 1rem;
    }
    ul {

      li {
      padding-left: 5rem;
      }
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    #logo {
      display: inline-block;
    }
    ul {
      li {
        text-align: center;
        padding: 1rem 3rem;
      }
    }
        }
`;

export default Nav;