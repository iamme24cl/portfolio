import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Detail-oriented and highly motivated full stack software developer. 
          Proficient in Python for rapid implementation and iteration, 
          experienced in React for building interactive front-ends, and skilled in web programming. 
          <br />
          <br />
          Adept at backend system design and implementation with a passion for continuous learning and skill expansion.
          I focus on transforming ideas into interactive, user-friendly experiences
          with a touch of creativity, innovative design, and clean code.
          <br />
          <br />
          With over 15 years of professional experience, transitioning from hospitality to software engineering has been a thrilling journey. 
          The customer-facing skills I've developed over the years uniquely position me to understand user needs and deliver intuitive, 
          user-friendly software solutions. Now, I’m looking to bring this combination of technical and interpersonal skills to a forward-thinking company. 
          If you're searching for a software engineer who brings a unique perspective to the table, let's connect!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;