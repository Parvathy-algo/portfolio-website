import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-fixed-container">
      <nav className="glass-navbar">
        {/* Left Side Brand Logo */}
        <div className="navbar-logo">
          Parvathy ✧<span className="logo-dot"></span>
        </div>
        
        {/* Right Side Linked Actions Menu */}
        <ul className="navbar-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#skills" className="nav-item">Skills</a></li>
          <li><a href="#projects" className="nav-item">Projects</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;