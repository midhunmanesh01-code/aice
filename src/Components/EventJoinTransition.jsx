import { useEffect, useRef } from 'react';
import './EventJoinTransition.css';

export default function EventJoinTransition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      const progress = Math.min(
        Math.max((viewport - rect.top) / (viewport + rect.height), 0),
        1
      );

      section.style.setProperty('--transition-progress', progress);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();

    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="event-join-transition"
      aria-hidden="true"
    >
      <div className="event-join-energy">
        <div className="event-join-core" />
        <div className="event-join-ring event-join-ring-1" />
        <div className="event-join-ring event-join-ring-2" />
        <div className="event-join-ring event-join-ring-3" />
      </div>
    </section>
  );
}