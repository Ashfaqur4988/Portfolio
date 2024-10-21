import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h1>Ashfaqur Riaz</h1>
          <p>
            I am a Full Stack Developer transitioning to a Full Stack
            Generalist!
          </p>
        </div>
        <div className="right">
          <h1>SOCIAL</h1>
          <div className="social-icons">
            <FaGithub size={25} />
            <FaLinkedin size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; Copyright 2024 . Made by Ashfaqur Riaz</p>
      </div>
    </div>
  );
};

export default Footer;
