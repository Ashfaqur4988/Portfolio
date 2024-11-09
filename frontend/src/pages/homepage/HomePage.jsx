import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      <div className="content">
        <img src="nobg.png" alt="picture" />
        <div className="info">
          <h1>Hi, I am Ashfaqur Riaz</h1>
          <p>
            I am a Full Stack Developer transitioning to a Full Stack
            Generalist!
          </p>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
