import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="top">
        <h1>EXPERIENCE</h1>
        <p>Here you will find the relevant work experience</p>
      </div>
      <div className="bottom">
        <div className="left">
          <h3>Systems Engineer</h3>
          <h4>TATA Consultancy Services</h4>
          <p>Kolkata</p>
          <p>December 2021 - Present</p>
        </div>
        <div className="right">
          <ul>
            <li>
              Developed frontend features for an insurance web application using
              React.js
            </li>
            <li>
              Developed frontend pages using JSP for a legacy application.
            </li>
            <li>Developed and maintained REST APIs in Java Spring Boot</li>
            <li>
              Optimized stored procedures in Oracle to meet business
              requirements.
            </li>
            <li>
              Analyzed API calls using Postman, improving performance by
              reducing redundant calls.
            </li>
            <li>Documented business requirements and technical designs.</li>
            <li>
              Wrote PL/SQL scripts for large datasets, improving data handling &
              mitigating manual efforts in Oracle DB.
            </li>
            <li>
              Delivered presentations and conducted knowledge transfer sessions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
