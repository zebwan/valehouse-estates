import { useEffect, useState } from "react";
import "./IntroScreen.css";

function IntroScreen({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const displayDuration = prefersReducedMotion ? 700 : 2600;
    const exitDuration = prefersReducedMotion ? 150 : 650;

    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, displayDuration);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, displayDuration + exitDuration);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <section
      className={`intro-screen ${isLeaving ? "intro-screen-leaving" : ""}`}
      aria-label="Valehouse Estates introduction"
    >
      <div className="intro-screen-content">
        <p className="intro-kicker">Private Property Studio</p>

        <h1>Valehouse Estates</h1>

        <div className="intro-line" aria-hidden="true"></div>

        <p className="intro-tagline">Private homes. Considered living.</p>
      </div>
    </section>
  );
}

export default IntroScreen;