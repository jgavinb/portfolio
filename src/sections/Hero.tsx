import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../components/Button';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-container" aria-labelledby="hero-heading">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 5, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        style={{ backgroundPositionY: `${scrollY * 0.5}px` }}
      >
        <div
          className="hero-background"
          style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
        ></div>
        <motion.h1
          id="hero-heading"
          className="hero-title"
          initial={{ opacity: 0, y: 5, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.8 }}
        >
          Gavin Brumfield.
        </motion.h2>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.0 }}
        >
          I turn data into decisions.
        </motion.h3>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.2 }}
        >
          I&apos;m an analytics professional driven by solving complex problems through data. I specialize in transforming raw datasets into actionable insights that empower organizations to act with clarity. Currently, I&apos;m sharpening my expertise in statistical theory and application as a graduate student in NC State’s Master of Science in Analytics program.
        </motion.p>
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.4 }}
        >
          <Button
            text="Check out my chatbot!"
            link="https://gavchat.streamlit.app/"
            aria-label="Chatbot link"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
