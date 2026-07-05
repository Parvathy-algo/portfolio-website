import './Skills.css';

const skillsData = [
  { 
    category: "Frontend Development", 
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"] 
  },
  { 
    category: "Programming Skills", 
    items: ["Python", "Java", "Problem Solving", "UI Design", "Frontend Development"] 
  },
  { 
    category: "Tools & Technologies", 
    items: ["Git & GitHub", "VS Code", "Vite", "Chrome DevTools", "npm", "Figma Basics"] 
  }
];

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <span className="skills-tagline">// Skills & Technologies</span>
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-subtitle">
          A collection of technologies, tools, and development skills I use to build modern, responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div 
            key={index} 
            className="skills-card" 
            style={{ '--card-index': index }} /* Allows CSS to delay animations per card */
          >
            <h3 className="skills-group-title">{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;