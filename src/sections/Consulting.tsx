import { motion } from 'framer-motion';
import { Bot, BarChart3, Lightbulb, Users } from 'lucide-react';

const services = [
  {
    icon: <Bot size={22} />,
    title: 'Custom AI Agents & Automation',
    outcome: 'Production-deployed in 4–8 weeks',
    description:
      'Design and deploy production-grade AI agents — web-browsing bots, LLM orchestration pipelines, and workflow automation — that replace manual work with reliable, scalable systems.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'GenAI Product Consulting',
    outcome: 'Clear build plan in 2 weeks',
    description:
      'From initial scoping to shipped product: I help teams identify high-leverage AI opportunities, run proofs of concept, and build GenAI-powered features that stick.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Data Strategy & Analytics',
    outcome: 'Self-service insights from day one',
    description:
      'End-to-end data infrastructure — pipelines, dashboards, and self-service analytics that give your team answers without waiting on a data team.',
  },
  {
    icon: <Users size={22} />,
    title: 'AI Enablement & Training',
    outcome: 'Your team ships AI confidently',
    description:
      'Practical workshops and hands-on sessions that help individuals and teams move from AI curiosity to confident, daily use — grounded in real tools and real workflows.',
  },
];

const steps = [
  { number: '01', label: 'Free Strategy Call' },
  { number: '02', label: 'Scoped Proposal' },
  { number: '03', label: 'Build & Iterate' },
  { number: '04', label: 'Deploy & Measure' },
];

const forItems = [
  "Small business owners who want to use AI but don't have a technical team to build it",
  'Operators spending hours on tasks that AI could handle in minutes',
  'Growing businesses that need data-driven decisions without hiring a full data team',
];

function Consulting() {
  return (
    <motion.section
      className="consulting"
      id="consulting"
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
        <h2>Work With Me</h2>
      </div>

      <p className="consulting-intro">
        Whether you need a strategic roadmap, a production-ready AI system, or a team that
        can actually use AI — I&apos;ve done it. Engagements are scoped to your timeline and
        budget: advisory, project-based, or ongoing.
      </p>

      <div className="consulting-for">
        <p className="consulting-for-label">Good fit if you are&hellip;</p>
        <ul className="consulting-for-list">
          {forItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="consulting-grid">
        {services.map((service, i) => (
          <motion.div
            className="consulting-grid-card"
            key={service.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="card-outcome">&rarr; {service.outcome}</p>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="consulting-process">
        {steps.map((step) => (
          <div className="consulting-process-step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </div>

      <div className="consulting-cta">
        <a
          href="https://calendly.com/jgbrumfi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          aria-label="Book a free 30-minute call"
        >
          Book a Free 30-Min Call
        </a>
        <p>or email&nbsp;<a href="mailto:jgbrumfi@gmail.com" className="consulting-cta-email">jgbrumfi@gmail.com</a></p>
      </div>
    </motion.section>
  );
}

export default Consulting;
