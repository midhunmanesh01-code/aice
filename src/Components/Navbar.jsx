import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(Math.min(window.scrollY / 300, 1));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="navbar"
        style={{ '--nav-progress': scrollProgress }}
      >
        <a href="/" className="navbar-brand">
          <img src="/aice-logo.png" alt="AICE" />
        </a>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#events">Events</a>
          <a href="#activities">Activities</a>
        </div>

        <a href="#join" className="navbar-join">
          Join AICE <span>→</span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          className={`mobile-menu-button ${menuOpen ? 'menu-button-open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#mission" onClick={closeMenu}>Mission</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#activities" onClick={closeMenu}>Activities</a>
        </div>

        <a
          href="#join"
          className="mobile-menu-join"
          onClick={closeMenu}
        >
          Join AICE <span>→</span>
        </a>
      </div>
    </>
  );
}