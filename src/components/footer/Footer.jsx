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
            <a
              href="https://github.com/Ashfaqur4988"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashfaqur-riaz-570bb5168/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </a>
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
