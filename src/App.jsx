import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import "./app.scss"


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar /> 
        <Hero />
      </section>
      <section id="Services">
        <Parallax type={"services"}/>
      </section>
      <section>
        Services
      </section>
      <section id="Portfolio">
        <Parallax type={"portfolio"}/>
      </section>
      <section id="Contact">
        Contact
      </section>
    </div>
  );
};

export default App;
