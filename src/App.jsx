import { BrowserRouter } from "react-router-dom";
import './index.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/canvas/Footer";
import Achievement from "./components/Achievement";
import Educations from "./components/Educations";
import rocket from './assets/rocket.gif';
import astronaut from "./assets/astronaut.gif"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const rocketRef = useRef(null);
  const astronautRef = useRef(null);
  // useEffect(() => {
  //   const rocket = rocketRef.current;

  //   const randomStartPosition = () => {
  //     // Always start at the bottom left
  //     return { x: 0, y: window.innerHeight, rotation: 0 };
  //   };

  //   const calculateEndPosition = () => {
  //     // Always end at the top
  //     return { x: 0, y: -500 };
  //   };

  //   const animateRocket = () => {
  //     const startPosition = randomStartPosition();
  //     const endPosition = calculateEndPosition();

  //     // Animate with GSAP
  //     gsap.fromTo(
  //       rocket,
  //       { x: startPosition.x, y: startPosition.y, rotation: startPosition.rotation },
  //       {
  //         x: endPosition.x,
  //         y: endPosition.y,
  //         rotation: "0", // Rotate during the motion
  //         duration: 15, // Adjust duration as needed
  //         ease: "linear",
  //         onComplete: animateRocket, // Loop the animation
  //       }
  //     );
  //   };

 

  

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <div className="rocket">
      </div>
      <div
      id="astronaut"
      ref={astronautRef}
    ></div>
      <div className='relative z-100'>
        <div className='bg-hero-pattern w-full h-1/2  bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        </div>
        <About />
        <Educations />
        <Experience />
        <Tech />
        <Works />
        <Achievement/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
