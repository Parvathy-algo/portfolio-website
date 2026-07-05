import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - Full Stack Developer Portfolio</p>
    </footer>
  );
}

export default Footer;