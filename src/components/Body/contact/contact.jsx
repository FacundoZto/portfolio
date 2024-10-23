// import Separator from '../../common/separator/separator.jsx';
import Cv from "../../../assets/FacundoZerbato.pdf";
import "./contact.css";
import SocialContact from "../../common/social-contact.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="contact">
      {/* <label className="section-title">Contact</label> */}
      <div className="contact-container">
        <div className="contact-left">
          <div className="mail">
            <span class="material-symbols-outlined mail-icon">mail</span>
            <h5>facundozerbato@outlook.com</h5>
            <motion.span
              whileTap={{
                scale: 0.7,
              }}
              class="material-symbols-outlined copy-icon"
              onClick={() => copy("facundozerbato@outlook.com")}
            >
              content_copy
            </motion.span>
          </div>
          <SocialContact />
        </div>
        <button className="download">
          <a
            href={Cv}
            target="_blank"
            rel="noreferrer"
            download="Facundo-Zerbato"
          >
            <span class="material-symbols-outlined">file_download</span>
            CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
