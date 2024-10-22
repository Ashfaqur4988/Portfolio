/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "React",
  "SASS",
  "Tailwind CSS",
  "NodeJS",
  "ExpressJS",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "Oracle",
  "Redis",
  "Docker",
  "AWS",
  "Git",
  "Github",
  "GitLab",
  "Postman",
  "Jira",
  "Confluence",
  "Swagger",
];
const About = () => {
  return (
    <div className="about" id="about">
      <div className="top">
        <h1>ABOUT ME</h1>

        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="bottom">
        <div className="left">
          <h1>Get to Know Me!</h1>
          <p>
            I'm a <b>Full Stack Developer</b> passionate about building and
            managing both the Front-end and Back-end of websites and web
            applications that drive the success of the overall product. Explore
            some of my work in the Projects section.
          </p>
          <br />
          <p>
            I am dedicated to continuous learning, always striving for
            self-improvement and aiming to transition into a Full Stack
            Generalist. Feel free to connect or follow me on LinkedIn, Twitter,
            or Instagram.
          </p>
          <br />
          <p>
            I'm open to job opportunities where I can contribute, learn, and
            grow. If you have an opportunity that aligns with my skills and
            experience, don't hesitate to get in touch.
          </p>
          <button>Contact</button>
        </div>
        <div className="right">
          <h1>Skills & Tools</h1>
          <div className="skills">
            {skills.map((skill) => (
              <p className="skill" key={skill}>
                <b>{skill}</b>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
