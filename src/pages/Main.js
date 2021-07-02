import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection'
import PortfolioSection from '../components/PortfolioSection'
import ContactSection from '../components/ContactSection';

import { motion } from 'framer-motion';
import { pageAnimation } from "../animation"
import ScrollTop from '../utils/ScrollTop';


function Main() {
  return (
    <motion.div 
      key="main"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    > 
      <IntroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection/>
      <ScrollTop />
    </motion.div>
  );
}

export default Main;