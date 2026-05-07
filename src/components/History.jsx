import { useState } from "react";
import { motion } from "framer-motion";

export default function History() {
  const [open, setOpen] = useState(false);

  return (
    <section id="history" className="history gradient-bg">
      <div className="card">

        {/* LEFT IMAGE WITH OVERLAY */}
        <div className="profile-wrap">
          <img src="/profile.png" className="profile" />

          <div className="profile-overlay">
            <p>
              Frontend Engineer (React/Vue) | UX & Product Systems
              With 4+ years of experience building
              immersive userbased platforms, modern interfaces and AI-integrated web apps and SaaS applications.
              <span className="history-link" onClick={() => setOpen(true)}>
                {" "}My work history →
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="info">

          <div className="stack-grid">

            <div className="stack-item">
              <h4>JavaScript</h4>
              <p>Dynamic, interactive features that bring web apps to life.</p>
            </div>

            <div className="stack-item">
              <h4>React, Vite, Next, Node, Vue & Angular</h4>
              <p>Component-based architectures tailored to scale.</p>
            </div>

            <div className="stack-item">
              <h4>HTML & CSS</h4>
              <p>Accessible, responsive layouts with design precision.</p>
            </div>

            <div className="stack-item">
              <h4>REST API</h4>
              <p>Seamless integrations with external services.</p>
            </div>

            <div className="stack-item">
              <h4>Database Integration</h4>
              <p>Reliable data handling and scalable architecture.</p>
            </div>

            <div className="stack-item">
              <h4>LLM & A.I.</h4>
              <p>Intelligent features powered by modern AI tools.</p>
            </div>


            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="stack-item contact"
            >
              <i className="fa-brands fa-linkedin"></i>
              <h4>LinkedIn</h4>
              <p>Connect me!</p>
            </a>

            <a
              href="mailto:chsilvaoliveira@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="stack-item contact"
            >
              <i className="fa-solid fa-envelope"></i>
              <h4>Email Me</h4>
              <p>Direct contact anytime</p>
            </a>

          </div>

          {/* BUTTONS */}
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1rPoKA51oNIP9cHHp6faJxj-KppKpSNFM/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="btn glow">My Resume</button></a>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/Q9S3RXYKXTJE" target="_blank" rel="noopener noreferrer"><button className="btn glow alt">Google UX Cert</button></a>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <motion.div
          className="modal"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="modal-box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
           <h2 class="modal-title">Work History</h2>

<div class="job">
  <h3 class="job-title">Frontend Developer (UX/UI Focused)</h3>
  <div class="job-meta">Skalory (Digital Union GmbH) GER | June 2023 - August 2025</div>
  <ul class="job-points">
    <li>Designed and coded responsive HTML/CSS newsletters optimized for major email clients.</li>
    <li>Development of web applications, dashboards, and user-centric platforms.</li>
    <li>Conducted A/B, UX research, testing on subject lines, layout formats, and CTA placement.</li>
    <li>Responsibility for architectural decisions and prototyping from conception to launch.</li>
    <li>Building for performance optimization, accessibility, and a mobile-first approach.</li>
  </ul>
</div>

<div class="job">
  <h3 class="job-title">Front-end Developer</h3>
  <div class="job-meta">Freelancer | April 2022 - Present</div>
  <ul class="job-points">
    <li>Delivered 20+ responsive websites from Figma/Sketch to React, Vite, or Angular apps.</li>
    <li>Built reusable components and interactive features, increasing session duration by 25%.</li>
    <li>Optimized performance via code splitting and lazy loading (40% faster loads).</li>
    <li>Scalable frontend architecture and state management and component-based development.</li>
    <li>Integrated REST APIs and implemented e-commerce solutions. In both design and production systems.</li>
  </ul>
</div>

          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
