import { useRef } from 'react';
import Antigravity from './Antigravity';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section className="hero" ref={containerRef}>

      <div className="hero-content">

        <p className="hero-eyebrow hero-reveal">
          AI INNOVATION COMMUNITY FOR EXCELLENCE
        </p>

        <h1 className="hero-title hero-reveal">
          INTELLIGENCE
          <br />
          STARTS WITH
          <br />
          CURIOSITY.
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