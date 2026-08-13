import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <img src="/aice-logo.png" alt="AICE" />
            <span>AICE</span>
          </div>

          <h2>
            Keep
            <br />
            <span>curious.</span>
          </h2>

          <p>
            AI Innovation Community for Excellence
            <br />
            College of Engineering Chengannur
          </p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-label">EXPLORE</p>

            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#join">Join AICE</a>
          </div>

          <div>
            <p className="footer-label">CONNECT</p>

            <a href="https://aice.ceconline.edu/" target="_blank" rel="noreferrer">
              Official Website
            </a>
            <a href="https://www.instagram.com/aice.cec/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/aice-cec" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AICE CEC</span>
        <span>Built with ❤️ by Midhun Manesh</span>
      </div>
    </footer>
  );
}