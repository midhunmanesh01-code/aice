import { useRef } from 'react';
import Antigravity from './Antigravity';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-content">
        <p className="hero-eyebrow hero-eyebrow-reveal">
          AI INNOVATION COMMUNITY FOR EXCELLENCE
        </p>
        <h1 className="hero-title">
          <span className="hero-title-line hero-line-1">
            INTELLIGENCE
          </span>
          <span className="hero-title-line hero-line-2">
            STARTS WITH
          </span>
          <span className="hero-title-line hero-line-3">
            CURIOSITY.
          </span>
        </h1>
        <p className="hero-description hero-reveal">
          A community for students passionate about artificial
          intelligence, innovation, and building what comes next.
        </p>
        <a href="#about" className="hero-cta hero-reveal">
          Explore AICE <span>→</span>
        </a>
      </div>

      <div className="hero-visual">
        <Antigravity
        containerRef={containerRef}
        count={300}
        magnetRadius={10}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.08}
        color="#5227FF"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
        />
      </div>
    </section>
  );
}