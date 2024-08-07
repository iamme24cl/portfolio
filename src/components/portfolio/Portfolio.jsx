import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Animated Portfolio",
    img: "/portfolio.jpg",
    desc: "Animated Portfolio website created using React and Framer Motion",
    url: "https://portfolio-3fk.pages.dev/",
    buttonText: "See Demo",
  },
  {
    id: 2,
    title: "MovieLand",
    img: "/movieland.jpg",
    desc: "A movie recommendation application that recommends movies based on user's movie ratings, filters movies by name and categories.",
    url: "https://movie-land-app.pages.dev/",
    buttonText: "See Demo",
  },
  {
    id: 3,
    title: "sMedia",
    img: "/smedia.jpg",
    desc: "A social media platform enabling users to post updates, comment on each other's posts, message other users in real-time.",
    url: "https://smedia-app.pages.dev/",
    buttonText: "See Demo",
  },
  {
    id: 4,
    title: "Chat Application",
    img: "/chat-app.jpg",
    desc: "Live chat application with friends list and real-time notification features. ",
    url: "https://chatapp-b7p.pages.dev/",
    buttonText: "See Demo",
  },
  {
    id: 5,
    title: "Invoice Manager",
    img: "/invoices.jpg",
    desc: "Manage all your Invoices and Clients with this easy to use Invoice Manager web application.",
    url: "https://github.com/iamme24cl/invoices-backend",
    buttonText: "Github",
  },
  {
    id: 6,
    title: "Dynamic Job search site",
    img: "/job-board.png",
    desc: "This React app fetches remote jobs from an api. You can search for jobs and apply various filters to your search.",
    url: "https://remoteokjobs.netlify.app/",
    buttonText: "See Demo",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const handleClick = () => {
    window.open(item.url, '_blank');
  }

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleClick}>{item.buttonText}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        {/* <h1>Featured Work</h1> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;