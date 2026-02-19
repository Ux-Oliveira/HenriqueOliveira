import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastSection = document.querySelector("section:last-of-type");

    if (!lastSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    observer.observe(lastSection);

    return () => observer.disconnect();
  }, []);

  const goTop = () => {
    document
      .getElementById("intro")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className={`scrollTop ${show ? "show" : ""}`}
      onClick={goTop}
    >
      <img src="/click.png" alt="Back to top" />
    </button>
  );
}
