import './Projectcard.css';

function Projectcard({ project }) {
  return (
    <div className="project-card">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>
      <div className="card-tags">
        {project.tags.map(tag => (
          <span key={tag} className="card-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Projectcard;