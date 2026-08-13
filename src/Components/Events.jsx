import './Events.css';

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="events-header">
        <p className="events-eyebrow">03 — EVENTS</p>

        <h2 className="events-title">
          Upcoming <span>events.</span>
        </h2>

        <p className="events-intro">
          Join our interactive workshops, hackathons, and open build sessions.
        </p>
      </div>

      <article className="event-feature">
        <div className="event-top">
          <span className="event-status">
            COMING <strong>SOON</strong>
          </span>

          <span className="event-featured">FEATURED</span>
        </div>

        <div className="event-content">
          <p className="event-label">EVENT</p>

          <h3>AICE INAUGURATION</h3>

          <p className="event-description">
            A formal inauguration marking the beginning of AICE — AI Innovation
            Community for Excellence.
          </p>
        </div>

        <div className="event-bottom">
          <span className="event-location">
            <span>⌖</span>
            Maker's Space
          </span>

          <button className="event-details">
            Details <span>→</span>
          </button>
        </div>
      </article>
    </section>
  );
}