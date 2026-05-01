import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Floreios Colados",
    description: "Media Dashboard/Portfolio featuring a artistic work built with Vite.",
    gif: "/gifs/floreios.gif",
    link: "https://floreios-colados.vercel.app/"
  },
  {
    title: "Neon Grizzly",
    description: "E-commerce platform for a clothing store, built with React and Tailwind.",
    gif: "/gifs/neon.gif",
    link: "https://neongrizzly.com/"
  },
  {
    title: "Sumito Clothing",
    description: "Shopify powered e-commerce platform for a clothing store built with React and Tailwind.",
    gif: "/gifs/sumito.gif",
    link: "#"
  },
  {
    title: "UpTown",
    description: "Production Companies Dashboard with a functional news letter component built with React.",
    gif: "/gifs/uptown.gif",
    link: "#"
  }
];

export default function Work() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="work" className="work">
      {projects.map((project, idx) => (
        <Panel
          key={idx}
          project={project}
          flip={idx % 2 === 1}
          onOpen={() => setOpenIndex(idx)}
        />
      ))}

      {/*modal*/}
      {openIndex !== null && (
        <motion.div
          className="modal"
          onClick={() => setOpenIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="modal-box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Case Study</h2>

            {openIndex === 0 && (
              <div className="job">
                <h3 className="job-title">Floreios Colados</h3>
                <div className="job-meta">Portfolio / Media Dashboard</div>
                <ul className="job-points">
                  <li>Built a visually immersive artistic portfolio using Vite.</li>
                  <li>Focused on smooth animations and aesthetic storytelling.</li>
                  <li>Implemented responsive layout for all screen sizes.</li>
                  <li>Optimized performance and loading speed.</li>
                  <li>Designed UI/UX for creative expression.</li>
                </ul>
              </div>
            )}
            {openIndex === 1 && (
              <div className="job">
                <h3 className="job-title">Neon Grizzly</h3>
                <div className="job-meta">E-commerce Platform</div>
                <ul className="job-points">
                  <li>Developed full e-commerce experience using React + Tailwind.</li>
                  <li>Created product pages, cart system, and UI components.</li>
                  <li>Focused on branding and modern UI interactions.</li>
                  <li>Ensured responsive design across devices.</li>
                  <li>Improved user engagement with animations.</li>
                </ul>
              </div>
            )}
            {openIndex === 2 && (
              <div className="job">
                <h3 className="job-title">Sumito Clothing</h3>
                <div className="job-meta">Shopify + Frontend Integration</div>
                <ul className="job-points">
                  <li>Integrated Shopify backend with custom frontend UI.</li>
                  <li>Built responsive product browsing experience.</li>
                  <li>Enhanced UX with clean layout and navigation.</li>
                  <li>Optimized for performance and SEO.</li>
                  <li>Customized theme components for branding.</li>
                </ul>
              </div>
            )}
            {openIndex === 3 && (
              <div className="job">
                <h3 className="job-title">UpTown</h3>
                <div className="job-meta">Production Dashboard</div>
                <ul className="job-points">
                  <li>Built dashboard interface with React.</li>
                  <li>Implemented newsletter component system.</li>
                  <li>Focused on data visualization and usability.</li>
                  <li>Designed modular and reusable components.</li>
                  <li>Improved workflow efficiency through UI.</li>
                </ul>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function Panel({ project, flip, onOpen }) {
  return (
    <div className={`panel ${flip ? "flip" : ""}`}>
      {/*gif*/}
      <motion.div
        className="frame gif"
        initial={{ x: flip ? 200 : -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={project.gif} alt={project.title} />
      </motion.div>

      {/*text*/}
      <motion.div
        className="text"
        initial={{ x: flip ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">View</button>
          </a>

          <button className="btn" onClick={onOpen}>
            Case Study
          </button>
        </div>
      </motion.div>
    </div>
  );
}
