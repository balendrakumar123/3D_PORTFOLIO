import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiPhp,
  DiPostgresql,
  DiBootstrap,
  DiHtml5,
  DiMysql,
  DiAngularSimple,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { GrGraphQl } from "react-icons/gr";
import { PiFileSqlBold } from "react-icons/pi";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion"; // Assuming you are using Framer Motion

const ToolCard = ({ index, title, icon: Icon }) => (
  <Tilt className="xs:w-[157px] w-full">
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

function Techstack() {
  // Array of services (icon and title)
  const services = [
    { title: "C++", icon: CgCPlusPlus },
    { title: "JavaScript", icon: DiJavascript1 },
    { title: "Typescript", icon: SiTypescript },
    { title: "HTML", icon: DiHtml5 },
    { title: "Node.js", icon: DiNodejs },
    { title: "Nest.js", icon: SiNestjs },
    { title: "React", icon: DiReact },
    { title: "Angular", icon: DiAngularSimple },
    { title: "Nextjs", icon: SiNextdotjs },
    { title: "MongoDB", icon: DiMongodb },
    { title: "Python", icon: DiPython },
    { title: "PHP", icon: DiPhp },
    { title: "PostgreSQL", icon: DiPostgresql },
    { title: "MySQL", icon: DiMysql },
    { title: "GraphQL", icon: GrGraphQl },
    { title: "SQL", icon: PiFileSqlBold },
    { title: "Threejs", icon: TbBrandThreejs },

  ];

  return (
    <div className="mt-0 ml-0 mb-2 flex flex-wrap gap-10 justify-center">
      {services.map((service, index) => (
        <ToolCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
}

export default Techstack;
