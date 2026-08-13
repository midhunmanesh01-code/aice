import './Join.css';

export default function Join() {
  return (
    <section className="join" id="join">
      <div className="join-inner">
        <p className="join-eyebrow">05 — JOIN AICE</p>

        <h2 className="join-title">
          Your curiosity
          <br />
          <span>has a place here.</span>
        </h2>

        <p className="join-description">
          Become part of AICE and explore artificial intelligence through
          learning, collaboration, experimentation, and innovation.
        </p>

        <a href="#footer" className="join-cta">
          Join AICE
          <span>↗</span>
        </a>
      </div>

      <div className="join-glow" aria-hidden="true" />
    </section>
  );
}