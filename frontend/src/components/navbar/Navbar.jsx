import { FaMinus, FaPlus } from "react-icons/fa";
import "./navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <img src="/pic.jpg" alt="profile-pic" />
        <span>Ashfaqur Riaz</span>
      </div>
      <div className="right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaMinus size={25} /> : <FaPlus size={25} />}
      </div>

      <div className={!isOpen ? "menu active" : "menu"}>
        <a href="#home" onClick={() => setIsOpen(!isOpen)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(!isOpen)}>
          About
        </a>
        <a href="#experience" onClick={() => setIsOpen(!isOpen)}>
          Experience
        </a>
        <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
