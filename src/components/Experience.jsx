import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import CanvasLoader from "./Loader";
import Developer from "./canvas/Developer";
gsap.registerPlugin(ScrollTrigger);
const ExperienceCard = ({ experience }) => {
 
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(1.2);
  const developerRef = useRef();
 
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })
      .to(
        { y: positionY },
        {
          y: -3.5,
          duration: 1,
          onUpdate: function () {
            setPositionY(this.targets()[0].y);

            // Dynamically change the animation based on the y position
            const newY = this.targets()[0].y;
            if (newY < -2) {
              setAnimationName("victory");
            } else if (newY < -1) {
              setAnimationName("clapping");
            } else if (newY < 0) {
              setAnimationName("salute");
            } else {
              setAnimationName("idle");
            }
          },
        }
      );
  }, []);

  return (
    <div
      // style={{
      //   position: "relative",
      // }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="experience-section mt-20 flex flex-col">
        <Canvas
        className="experience-section"
          style={{
            position: "absolute",
            zIndex: 9999,
            top:0
          }}
        >
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <Developer
              ref={developerRef}
              position-y={positionY}
              position-x={positionX}
              scale={0.6}
              animationName={animationName}
              // rotation={[0, Math.PI / 2, 0]}
            />
          </Suspense>
        </Canvas>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
