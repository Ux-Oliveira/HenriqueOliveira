import { useEffect, useRef } from "react";
import "../leisure.css";

export default function Leisure({ setPage }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - window.innerHeight;
      const progress = scrollTop / maxScroll;

      const maxMove = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * maxMove}px)`;
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const track = trackRef.current;
    const el = itemsRef.current[index];

    if (!el) return;

    const offsetLeft = el.offsetLeft;

    const maxMove = track.scrollWidth - window.innerWidth;
    const progress = offsetLeft / maxMove;

    const maxScroll = container.scrollHeight - window.innerHeight;
    const targetScroll = progress * maxScroll;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="leisure">
      <div className="leisure-bg" />

      <button className="home-btn" onClick={() => setPage("home")}>
        Home
      </button>

      {/* Invisible vertical scroll */}
      <div ref={containerRef} className="scroll-container">
        <div className="scroll-spacer" />
      </div>

      {/* Locked viewport */}
      <div className="viewport">
        <div ref={trackRef} className="horizontal-track">

          {/* INTRO */}
          <div
            className="leisure-intro"
            ref={(el) => (itemsRef.current[0] = el)}
            onClick={() => scrollToIndex(0)}
          >
            <h1>My Leisure Projects</h1>
            <p>
              Experimental builds, fun concepts, and weird, creative ideas I explored outside of client work.
            </p>
          </div>

          {/* PROJECT 1 */}
          <div
            className="leisure-item"
            ref={(el) => (itemsRef.current[1] = el)}
            onClick={() => scrollToIndex(1)}
          >
            <div className="frame">
              <img src="/gifs/game.gif" alt="Project One" />
            </div>
            <h2>Leaderbox</h2>
            <p>
              A user-based platform with a movie-based minigame component at the heart of it.
            </p>
            <button className="visit-btn">Visit</button>
          </div>

          {/* PROJECT 2 */}
          <div
            className="leisure-item"
            ref={(el) => (itemsRef.current[2] = el)}
            onClick={() => scrollToIndex(2)}
          >
            <div className="frame">
              <img src="/gifs/tarot.gif" alt="Project Two" />
            </div>
            <h2>Tarot Express</h2>
            <p>A quick, interactive tarot reading webapp.</p>
            <button className="visit-btn">Visit</button>
          </div>

        </div>
      </div>
    </div>
  );
}
