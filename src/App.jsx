import { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import "./app.scss"


const App = () => {
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar /> 
        <Hero contactRef={contactRef} portfolioRef={portfolioRef} />
      </section>
      <section id="About">
        <Parallax type={"about"}/>
      </section>
      <section>
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type={"portfolio"}/>
      </section>
      <Portfolio ref={portfolioRef} />
      <section id="Contact">
        <Contact ref={contactRef} />
      </section>
    </div>
  );
};

export default App;
