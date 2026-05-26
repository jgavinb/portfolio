import { motion } from 'framer-motion';
import Image from 'next/image';

function Hero() {
  return (
    <section className="hero-container" aria-labelledby="hero-heading">
      <div className="hero">
        <div className="hero-content">
          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
          >
            Austin, TX &nbsp;&middot;&nbsp; AI Consulting
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero-title-large"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.65 }}
          >
            Gavin Brumfield.
          </motion.h1>

          <motion.h2
            className="hero-title-large hero-title-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          >
            I help small businesses do more with AI.
          </motion.h2>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.95 }}
          >
            If your team is doing work that should be automated, or you're making decisions
            without clear data, I can fix both. Custom AI tools and dashboards, built for
            your business — by one person who knows what they're doing.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 1.1 }}
          >
            <div className="hero-cta-group">
              <a
                href="https://calendly.com/jgbrumfi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-cta"
                aria-label="Book a free 30-minute call"
              >
                Book a Free 30-Min Call &rarr;
              </a>
              <span className="hero-availability">
                <span className="hero-availability-dot" />
                Accepting new clients
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        >
          <div className="hero-photo-inner">
            <Image
              src="/assets/profile/profile.webp"
              alt="Gavin Brumfield"
              fill
              sizes="(max-width: 768px) 280px, 380px"
              priority
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
