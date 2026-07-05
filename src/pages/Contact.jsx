import './Contact.css';

function Contact() {
  return (
    <div className="contact-section-inner">
      <div className="contact-grid">
        
        {/* Left Column: Contextual Text Messaging */}
        <div className="contact-text-side">
          <span className="contact-tagline">// Drop Me A Line</span>
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            Have an exciting opportunity, a question, or a project in mind? 
            Feel free to reach out—I'd love to chat about how we can build something amazing together.
          </p>
          
          <div className="contact-direct-info">
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <a href="mailto:your.email@example.com">parvathykalarikkal2005.email@example.com</a>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Malappuram,Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Expanded Form fields */}
        <div className="contact-form-side">
          <form className="premium-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email"  required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="6" placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;