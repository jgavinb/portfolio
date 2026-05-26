import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Free 30-Min Call',
    body: "We talk about your business and what's costing you time or money. No pitch, no pressure — just a real conversation to see if it makes sense to work together.",
  },
  {
    number: '02',
    title: 'I Map It Out',
    body: "You get a plain-English proposal: what I'll build, how long it'll take, and what it costs. You'll know everything before we start. No surprises, no scope creep.",
  },
  {
    number: '03',
    title: 'I Build It',
    body: "I do the work. You get regular updates in plain English — not technical jargon. You stay focused on running your business while I handle the build.",
  },
  {
    number: '04',
    title: 'It Runs',
    body: "You get something that actually works, not a demo. I make sure it's stable before handing it off, and I'm available if anything needs tuning down the road.",
  },
];

function HowItWorks() {
  return (
    <motion.section
      className="how-it-works"
      id="howitworks"
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
        <h2>How It Works</h2>
      </div>
      <div className="how-it-works-grid">
        {steps.map((step, i) => (
          <motion.div
            className="how-it-works-step"
            key={step.number}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <span className="how-it-works-number">{step.number}</span>
            <h3 className="how-it-works-title">{step.title}</h3>
            <p className="how-it-works-body">{step.body}</p>
          </motion.div>
        ))}
      </div>
      <div className="how-it-works-cta">
        <a
          href="https://calendly.com/jgbrumfi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          aria-label="Book a free 30-minute call"
        >
          Start with a Free Call
        </a>
      </div>
    </motion.section>
  );
}

export default HowItWorks;
