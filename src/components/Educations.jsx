import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-tilt";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Fade, Zoom } from "react-reveal";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { my } from "../assets";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { univ_logo } from "../assets";
import { AnimatePresence } from "framer-motion";
import nptel from '../assets/nptel.jpg';

const Slider = ({ services, itemsPerPage = 4 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation(); // For controlling animation programmatically

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0
        )
      );
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener("resize", calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener("resize", calcSliderConstraints);

    return () => {
      window.removeEventListener("resize", calcSliderWidth);
      window.removeEventListener("resize", calcSliderConstraints);
    };
  }, [sliderChildrenWidth, sliderWidth]);

  // Automatic Sliding Logic
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start((current) => {
        const nextPosition = current - 300; // Adjust based on desired slide width
        return nextPosition < -sliderConstraints ? 0 : nextPosition;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [controls, sliderConstraints]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-10"
          transition={{ type: "spring", duration: 0.75 }}
          ref={ref}
          drag="x"
          dragConstraints={{
            left: -sliderConstraints,
            right: 0,
          }}
          animate={controls} // Attach Framer Motion's animation controller
          custom={x.get()} // Pass the current `x` value for animation control
        >
          {services.map((item, i) => (
            <motion.div key={`${item.title}-${i}`}>
              <ServiceCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

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
          src={nptel}
          alt="web-development"
          className="w-100 h-200 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Educations = () => {
  return (
    <div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have studied</p>
          <h2 className={styles.sectionHeadText}>Educations.</h2>
        </motion.div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Container>
            <h1
              style={{
                fontSize: "2.1em",
                paddingTop: "20px",
                paddingBottom: "10px",
                justifyContent: "center",
              }}
            >
              <strong className="purple">Degrees Received</strong>
            </h1>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px]  leading-[30px]"
            >
              <div>
                <h5 style={{ fontSize: "1.6em", paddingBottom: "10px" }}>
                  <strong className="purple quote-card-view-header">
                    Pondicherry central University
                  </strong>
                </h5>

                <Card className="quote-card-view">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p style={{ textAlign: "justify" }}>
                        <span className="purple">
                          Masters in computer Science (M.C.A){" "}
                        </span>
                        from <span className="purple"> 2016</span> To{" "}
                        <span className="purple"> 2019</span>
                      </p>
                      <ul>
                        <li
                          className="about-activity"
                          style={{ paddingBottom: "10px" }}
                        >
                          I have studied basic software engineering subjects
                          like DS, Algorithms, DBMS, OS, AI etc.
                        </li>
                        <li
                          className="about-activity"
                          style={{ paddingBottom: "10px" }}
                        >
                          Apart from this, I have done courses on Python, Full
                          Stack Development.Javascript Frameworks Like
                          Angular,React,Nodejs
                        </li>
                        <li className="about-activity">
                          Currently i am learning about Deep Learning, Data
                          Science, Cloud Computing,Machine learning
                        </li>
                      </ul>
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </motion.p>
          </Container>
          <div>
            {" "}
            <img src={univ_logo} alt="about" className="img-fluid" />
          </div>
        </div>
      </div>
      <motion.div variants={textVariant()}>
        <h1
          className={`${styles.sectionSubText} text-center`}
          style={{
            fontSize: "2.1em",
            paddingTop: "20px",
            paddingBottom: "10px",
            justifyContent: "center",
          }}
        >
          <strong className="purple">Certificate Received</strong>
        </h1>
      </motion.div>

      <div className="mt-5 ml-0 mb-2 flex flex-wrap gap-10">
        <Slider services={services} itemsPerPage={4} />
      </div>
    </div>
  );
};

export default SectionWrapper(Educations, "education");
