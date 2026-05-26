import { motion } from 'framer-motion';
import Image from 'next/image';

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="about-layout">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/assets/profile/profile.webp"
            alt="Gavin Brumfield"
            fill
            sizes="(max-width: 768px) 100%, 340px"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </motion.div>
        <div className="about-inner">
          <p className="about-eyebrow">Who you're working with</p>
          <h2 className="about-heading">You work directly with me.</h2>
          <div className="about-body">
            <p>
              I'm a data scientist at YETI in Austin, TX, where I build AI systems that handle
              thousands of decisions a day — lead generation agents, analytics platforms, and
              automated workflows used by real teams at scale.
            </p>
            <p>
              I started consulting because I kept seeing small businesses sitting on problems that
              I could solve in a matter of weeks — the same kinds of problems that take enterprise
              companies months and large budgets to tackle.
            </p>
            <p>
              When you hire me, you get me. Not an account team, not a junior developer, not a
              proposal that gets handed off. I scope the project, do the work, and make sure it
              runs before I hand it over.
            </p>
          </div>
          <div className="about-details">
            <div className="about-detail">
              <span className="about-detail-label">Based in</span>
              <span className="about-detail-value">Austin, TX</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Works with</span>
              <span className="about-detail-value">Small businesses, remote-friendly</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Background</span>
              <span className="about-detail-value">M.S. Analytics, NC State</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
