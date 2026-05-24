import { motion } from 'framer-motion';
import Image from 'next/image';

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      style={{ paddingTop: '200px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I&apos;m a Data Scientist based in Austin, TX, focused on building AI and data systems
            that create real operational leverage. At YETI, I design and ship production GenAI
            agents, experimentation frameworks, and self-service analytics platforms that cut
            manual work and surface insights at scale.
          </p>
          <p className="about-grid-info-text">
            Outside of my day-to-day, I consult with organizations at any stage of their AI
            journey — whether that&apos;s scoping what&apos;s possible, building a first agent,
            or upskilling a team. I hold an M.S. in Analytics from NC State and care deeply
            about translating technical work into outcomes people can actually see.
          </p>
          <p className="about-grid-info-text">
            A few technologies I work with regularly:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">Vertex AI</li>
            <li className="about-grid-info-list-item">LangChain</li>
            <li className="about-grid-info-list-item">BigQuery</li>
            <li className="about-grid-info-list-item">GCP</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/assets/profile/profile.webp"
              alt="Gavin Brumfield"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
