import Strands from './Strands';
import './EventsTransition.css';

export default function EventsTransition() {
  return (
    <section className="events-transition">
      <div className="events-transition-visual">
        <Strands
          colors={["#5227FF", "#7655FF", "#A18BFF"]}
          count={3}
          speed={0.5}
          amplitude={1}
          waviness={1}
          thickness={0.7}
          glow={2.6}
          taper={3}
          spread={1}
          intensity={0.6}
          saturation={2}
          opacity={1}
          scale={1.5}
          glass={false}
          refraction={1}
          dispersion={1}
          glassSize={1}
          hueShift={0}
        />
      </div>
    </section>
  );
}