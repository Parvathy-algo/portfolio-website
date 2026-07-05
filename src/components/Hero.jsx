import profileImg from '../assets/hero.png'; 
import './Hero.css';

function Hero() {
  return (
    <div className="hero-grid">
      <div className="hero-info">
        <span className="hero-tagline">// Full-Stack Web Developer Intern</span>
        <h1 className="hero-heading">Parvathy PS</h1>
        <h2 className="hero-subheading">Building seamless digital experiences.</h2>
        
        <p className="hero-bio">
          Computer Science student passionate about web development and modern UI design. I enjoy building responsive, interactive, and visually engaging applications that combine creativity, functionality, and user experience.
        </p>
        
        <div className="hero-actions">
          <a href="https://www.linkedin.com/in/parvathy-ps-a2bb66318/" target="_blank" rel="noreferrer" className="btn-pill primary">
            LinkedIn
          </a>
          
          {/* UPDATED: Added GitHub Button right next to LinkedIn */}
          <a href="https://github.com/Parvathy-algo" target="_blank" rel="noreferrer" className="btn-pill primary github-hero-btn">
            GitHub
          </a>
          
          <a href="#contact" className="btn-pill">
            Contact Me
          </a>
          
          <a href="#projects" className="btn-pill">
            View Projects
          </a>
        </div>
      </div>

      {/* Right Side: Clean Profile Stack Layout Block */}
      <div className="hero-card-wrapper" style={{ '--card-index': 1 }}>
        <div className="profile-column-stack">
          
          {/* Main Clean Portrait Display Frame Box */}
          <div className="premium-frame-card">
            <img 
              src={profileImg} 
              alt="Parvathy PS Portrait" 
              className="hero-full-profile-photo" 
            />
          </div>

          {/* REPOSITIONED: Horizontal Dashboard Badges Row underneath */}
          <div className="badges-horizontal-row">
            
            <div className="dashboard-badge" style={{ '--card-index': 2 }}>
              <div className="badge-icon">🧬</div>
              <div className="badge-text">
                <span>Focus Area</span>
                <strong>FrontEnd Development</strong>
              </div>
            </div>

            <div className="dashboard-badge" style={{ '--card-index': 3 }}>
              <div className="badge-icon">🎓</div>
              <div className="badge-text">
                <span>Education</span>
                <strong>B.Tech CSE</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;