import Projectcard from "../components/Projectcard";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Mobile Indoor Navigation App",
    desc: "Developed a mobile indoor navigation web application for our college campus that helps users locate classrooms, labs, offices, and facilities efficiently using interactive floor mapping and route guidance.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com", 
    liveUrl:  "https://parvathy-algo.github.io/Indoor-navigation-app/"
  },
  {
    id: 2,
    title: "Portfolix_Tech Website",
    desc: "Developed a responsive web platform for showcasing internship programs and company services using modern frontend technologies and clean UI architecture.",
    tags: ["HTML", "CSS", "JavaScript","React"],
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Engineering Mood Predictor",
    desc: "Created a fun interactive web application that humorously predicts engineering student moods based on semester selection using dynamic UI interactions and animated content.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com",
    liveUrl: "#"
  }
];

function Project() {
  return (
    <div className="projects-container" style={{ padding: "4rem 2rem", minHeight: "100vh" }}>
      <div className="projects-header">
        <span className="projects-tagline">// My Engineering Archive</span>
        <h1 className="projects-title" style={{ color: "#ffffff" }}>Featured Projects</h1>
        <p className="projects-subtitle" style={{ color: "#94a3b8" }}>A collection of full-stack applications I've designed and engineered.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((item) => (
          <div key={item.id} className="custom-project-card-box">
            
            {/* Pass the item data straight to the card container */}
            <Projectcard project={item} />
            
            {/* Interactive action anchors */}
            <div className="project-action-links">
              <a href={item.githubUrl} target="_blank" rel="noreferrer" className="proj-btn code">
                Code base ↗
              </a>
              <a href={item.liveUrl} className="proj-btn live">
                Live Demo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;