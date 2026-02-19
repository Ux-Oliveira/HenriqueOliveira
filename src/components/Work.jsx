import { motion } from "framer-motion";

const projects = [
  {
    title: "Floreios Colados",
    description: "Media Dashboard/Portfolio featuring a artistic work built with Vite.",
    gif: "/gifs/floreios.gif",
    link: "https://floreios-colados.vercel.app/"
  },
  {
    title: "Sumito",
    description: "Shopify powered e-commerce platform for a clothing store built with React and Tailwind.",
    gif: "/gifs/sumito.gif",
    link: "#"
  },
  {
    title: "UpTown",
    description: "Production Companies Dashboard with a functional news letter component built with React.",
    gif: "/gifs/uptown.gif",
    link: "#"
  },
  {
    title: "Ayylien Clothing",
    description: "E-commerce platform for a clothing store, built with React and Tailwind.",
    gif: "/gifs/alien.gif",
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="work">
      {projects.map((project, idx) => (
        <Panel key={idx} project={project} flip={idx % 2 === 1} />
      ))}
    </section>
  );
}

function Panel({ project, flip }) {
  return (
    <div className={`panel ${flip ? "flip" : ""}`}>
      {/* GIF */}
      <motion.div
        className="frame gif"
        initial={{ x: flip ? 200 : -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={project.gif} alt={project.title} />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="text"
        initial={{ x: flip ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link}
         target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">View</button>
        </a>
      </motion.div>
    </div>
  );
}
