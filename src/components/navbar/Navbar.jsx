import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        Chandra Lama
        </motion.span>
        <div className="social">
          <a href="https://github.com/iamme24cl" target="_blank">
            <img src="/github.webp" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/chandralama/" target="_blank">
            <img src="/linkedIn.webp" alt="" />
          </a>
          <a href="https://x.com/ChandraBLama1" target="_blank">
            <img src="/x.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;