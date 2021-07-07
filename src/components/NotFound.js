import { HashLink as Link } from 'react-router-hash-link';

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, discAnimation } from "../animation"

function NotFound() {
  function handleClick(evt) {
    evt.preventDefault();
    
  }
  
  return (
    <div>
      <h3>404 page not found</h3>
      <p>These are not the droids you are looking for</p>
      <Link to="/#main">
        <motion.button 
          variants={fade}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick = {(evt) => {
              evt.preventDefault();
            }}
        >
          Go Home
        </motion.button>
        </Link>
  </div>
  )
}

export default NotFound;