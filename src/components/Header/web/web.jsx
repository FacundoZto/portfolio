import "./web.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Web = () => {
  return (
    <motion.div
      className="web"
      transition={{
        duration: 0.5,
      }}
      animate={{
        y: 15,
      }}
    >
      <div className="web-option">
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-50}
          duration={100}
          className={"link"}
        >
          About
        </Link>
      </div>
      <div className="web-option">
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          className={"link"}
        >
          Projects
        </Link>
      </div>
      <div className="web-option">
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          className={"link"}
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Web;
