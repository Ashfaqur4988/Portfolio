/* eslint-disable react/no-unescaped-entities */
import "./about.scss";
const skillsAndTools = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "React", "SASS", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["NodeJS", "ExpressJS", "Spring Boot", "Java"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "Oracle", "Redis"],
  },
  {
    category: "Version Control",
    skills: ["Git", "Github", "GitLab", "CI/CD Pipeline", "Github Actions"],
  },
  {
    category: "Cloud",
    skills: ["AWS (IAM, S3, Lambda)"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Postman", "Jira", "Confluence", "Swagger"],
  },
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
          <a href="#contact">Contact</a>
        </div>
        <div className="right">
          <h1>Skills & Tools</h1>
          <div className="skills">
            <div className="skillBox">
              <p>FrontEnd</p>
              <div className="skillName">
                {skillsAndTools[0].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skillBox">
              <p>Backend</p>
              <div className="skillName">
                {skillsAndTools[1].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skillBox">
              <p>Database</p>
              <div className="skillName">
                {skillsAndTools[2].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skillBox">
              <p>Version Control</p>
              <div className="skillName">
                {skillsAndTools[3].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skillBox">
              <p>Cloud</p>
              <div className="skillName">
                {skillsAndTools[4].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skillBox">
              <p>Tools</p>
              <div className="skillName">
                {skillsAndTools[5].skills.map((skill) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
