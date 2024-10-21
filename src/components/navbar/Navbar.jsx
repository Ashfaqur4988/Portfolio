import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src="/pic.jpg" alt="profile-pic" />
        <span>Ashfaqur Riaz</span>
      </div>
      <div className="right">
        <span>Home</span>
        <span>About</span>
        <span>Experience</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
