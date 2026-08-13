import { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const startTime = performance.now();

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(1200 - elapsed, 0);

      setTimeout(() => {
        setIsLoaded(true);

        setTimeout(() => {
          setHidden(true);
        }, 700);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
      return () => window.removeEventListener('load', finishLoading);
    }
  }, []);

  if (hidden) return null;

  return (
    <div className={`loading-screen ${isLoaded ? 'is-loaded' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/aice-logo.png" alt="AICE" />
        </div>

        <h1>AICE</h1>

        <p>AI INNOVATION COMMUNITY FOR EXCELLENCE</p>

        <div className="loading-progress">
          <span />
        </div>
      </div>
    </div>
  );
}