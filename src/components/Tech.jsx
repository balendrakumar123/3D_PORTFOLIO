import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return ( <div className='mt-2 flex flex-wrap gap-10'>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Expertise in.</p>
        <h2 className={styles.sectionHeadText}>Professional Skillset.</h2>
      </motion.div>

    <Techstack />

    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tool I have used so far
        </p>

      </motion.div>
    <Toolstack />
  </div>
  );
};

export default SectionWrapper(Tech, "");
