import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-reveal";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { mygif } from "../assets";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Know Who I'M.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, specializing in both frontend and backend development.
            On the frontend, I've worked with Angular, React, Material UI, and
            SCSS to build responsive and engaging user interfaces. On the
            backend, I have expertise in NestJS, Node.js, and Express.js, along
            with strong knowledge of databases, including SQL, GraphQL, MongoDB,
            MySQL, and PostgreSQL. I'm a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work together to
            bring your ideas to life!
          </motion.p>
        </div>

        <div>
          <img src={mygif} className="img-fluid" alt="avatar" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In addition to development, I have a strong understanding of Agile
          methodologies, ensuring efficient and iterative project management.
          I'm also familiar with cloud servers, CI/CD pipelines, and DevOps
          tools, including Jenkins, Docker, and cloud platforms, enabling
          seamless deployment and scalability of applications. My fields of
          interest include building new web technologies and products, as well
          as exploring areas related to data science, machine learning, and data
          structures & algorithms. While I have a basic understanding of these
          domains, I am continuously learning and expanding my expertise.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
