import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <Link className="link" to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="man with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

// Styled Components

export default AboutSection;
