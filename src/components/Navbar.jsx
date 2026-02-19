import { motion } from "framer-motion";

export default function Navbar({ setPage, page }) {
  const go = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const isLeisure = page === "leisure";

  return (
    <nav className="nav">
      <motion.div
        className="logo"
        onClick={() => {
          setPage("home");
          go("intro");
        }}
        whileHover={{ scale: 1.1 }}
      />

      {/* HIDE LINKS ON LEISURE */}
      {!isLeisure && (
        <div className="links">
          <button onClick={() => go("work")}>Work</button>
          <button onClick={() => go("history")}>History</button>
          <button onClick={() => setPage("leisure")}>Leisure</button>
        </div>
      )}
    </nav>
  );
}
