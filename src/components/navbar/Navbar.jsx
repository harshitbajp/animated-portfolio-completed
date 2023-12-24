import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Elevating ideas,one line at a time...
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/harshit.bajpai.718">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/100keen._/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
