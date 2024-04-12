import "./header.css";
import Mobile from "./mobile/mobile.jsx";
import Web from "./web/web.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <motion.div
        className="title"
        transition={{
          duration: 0.5,
        }}
        animate={{
          x: 50,
        }}
      >
        Front-end Developer
      </motion.div>

      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined icon-mobile">menu</span>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
