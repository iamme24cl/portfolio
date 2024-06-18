import Navbar from "./components/navbar/Navbar";
import "./app.scss"


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar /> 
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
