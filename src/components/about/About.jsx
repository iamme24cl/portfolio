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
          I focus on transforming ideas into interactive, user-friendly web experiences
          with a touch of creativity, innovative design, and clean code.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;