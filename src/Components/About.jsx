import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const section = aboutRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );
      section.style.setProperty('--about-progress', progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-inner">
        <p className="about-eyebrow">ABOUT AICE</p>
        <div className="about-copy">
          <p className="about-step about-step-1">
            Artificial intelligence
          </p>
          <p className="about-step about-step-2">
            isn't just about
          </p>
          <p className="about-step about-step-3">
            technology.
          </p>
          <p className="about-step about-step-4">
            It's about curiosity,
            experimentation,
            and what we create with it.
          </p>
          <p className="about-step about-step-5">
            AICE brings curious students together
            to learn, collaborate, experiment, and build.
          </p>
        </div>
        <div className="about-values">
          <span>EXPLORE</span>
          <span>EXPERIMENT</span>
          <span>CREATE</span>
        </div>
      </div>
    </section>
  );
}