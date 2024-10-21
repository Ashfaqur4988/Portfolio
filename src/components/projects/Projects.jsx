import "./project.scss";

const projects = [
  {
    title: "One Stop",
    image: "onestop.PNG",
    technology: [
      "React",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redis",
      "JWT",
    ],
    description:
      "An E-commerce application for online shopping with payment gateway integration. Redis is used for caching data. JWT is used for authentication. The project is deployed on Render.",
    appLink: "https://one-stop-ze5b.onrender.com/",
    codeLink: "https://github.com/Ashfaqur4988/One-Stop",
  },
  {
    title: "Chatty",
    image: "chatty.PNG",
    technology: [
      "React",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "prisma",
      "Socket IO",
      "JWT",
    ],
    description:
      "A chat application for one to one chat. PostgreSQL is used for database. Socket IO is used for socket connection. JWT is used for authentication. The project is deployed on Render.",
    appLink: "https://chatty-pgis.onrender.com",
    codeLink: "https://github.com/Ashfaqur4988/chatty",
  },
];
const Projects = () => {
  return (
    <div className="projects">
      <div className="top">
        <h1>PROJECTS</h1>
        <p>
          Here you will find some of the personal projects that I created with
          each project containing its own features and technologies
        </p>
      </div>
      {projects.map((project) => (
        <div className="bottom" key={project.title}>
          <div className="left">
            <img src={project.image} alt="" />
          </div>
          <div className="right">
            <div key={project.title} className="projectCard">
              <h2 className="title">{project.title}</h2>
              <div className="tech">
                {project.technology.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
              <p className="desc">{project.description}</p>
              <div className="btn">
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
