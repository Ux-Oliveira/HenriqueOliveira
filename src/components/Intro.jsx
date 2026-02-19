import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section id="intro" className="gradient-bg intro">
      <div className="center">
        <motion.div
          className="arch"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h1>Henrique Oliveira</h1>
        </motion.div>
      </div>
    </section>
  );
}
