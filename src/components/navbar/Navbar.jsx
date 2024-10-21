import "./navbar.scss";
const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
