import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(update);
      else setCount(value);
    };
    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <div className="hero-metric" ref={ref}>
      <div className="hero-metric-value">
        {count}<span className="hero-metric-suffix">{suffix}</span>
      </div>
      <div className="hero-metric-label">{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-container" aria-labelledby="hero-heading">
      <div className="hero">
        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
        >
          AI Consulting &nbsp;&middot;&nbsp; Data Science
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
          Ship AI that works in production.
        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.95 }}
        >
          Most AI projects stall between demo and deployment. I help small businesses skip
          that gap entirely — building agents, automations, and analytics that drive
          measurable outcomes. Available for select engagements.
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

        <motion.div
          className="hero-metrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
        >
          <Stat value={320} suffix=" hrs" label="saved per quarter at YETI" />
          <Stat value={40} suffix="%" label="recurring workload reduced" />
          <Stat value={50} suffix="%" label="manual review effort cut" />
          <Stat value={40} suffix="%" label="faster query performance" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
