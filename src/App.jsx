import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./app.scss"


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar /> 
        <Hero />
      </section>
      <section id="Services">
        Parallax - services
      </section>
      <section>
        Services
      </section>
      <section id="Portfolio">
        Parallax - portfolio
      </section>
      <section id="Contact">
        Contact
      </section>
    </div>
  );
};

export default App;
