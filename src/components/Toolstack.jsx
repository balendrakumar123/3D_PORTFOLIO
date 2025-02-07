import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Ensure you have Framer Motion installed
import { Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
} from "react-icons/si";
import { DiStackoverflow, DiGithub, DiDocker } from "react-icons/di";

const ToolCard = ({ index, title, icon: Icon }) => (
  <Tilt className="xs:w-[157px]  w-full">
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          translateX: 0,
          transition: {
            delay: index * 0.5,
            type: "spring",
            stiffness: 75,
          },
        },
        hidden: { opacity: 0, translateX: 100 },
      }}
      initial="hidden"
      animate="visible"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col">
        <Icon className="w-16 h-16 text-white" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Toolstack = () => {
  const tools = [
    { icon: SiLinux, title: "Linux" },
    { icon: SiVisualstudiocode, title: "Visual Studio Code" },
    { icon: SiJupyter, title: "Jupyter" },
    { icon: SiPostman, title: "Postman" },
    { icon: DiStackoverflow, title: "Stackoverflow" },
    { icon: DiGithub, title: "Github" },
    { icon: DiDocker, title: "Docker" },
  ];

  return (
    <div className="mt-0 ml-0 mb-2 flex flex-wrap gap-10 justify-center">
      {tools.map((tool, index) => (
        <ToolCard key={tool.title} index={index} {...tool} />
      ))}
    </div>
  );
};

export default Toolstack;
