import { motion } from 'framer-motion';
import { Bot, BarChart3, Lightbulb, Users } from 'lucide-react';

const services = [
  {
    icon: <Bot size={22} />,
    title: 'Custom AI Agents & Automation',
    description:
      'Design and deploy production-grade AI agents — web-browsing bots, LLM orchestration pipelines, and workflow automation — that replace manual work with reliable, scalable systems.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'GenAI Product Consulting',
    description:
      'From initial scoping to shipped product: I help teams identify high-leverage AI opportunities, run proofs of concept, and build GenAI-powered features that stick.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Data Strategy & Analytics',
    description:
      'End-to-end data infrastructure — pipelines, dashboards, and self-service analytics that give your team answers without waiting on a data team.',
  },
  {
    icon: <Users size={22} />,
    title: 'AI Enablement & Training',
    description:
      'Practical workshops and hands-on sessions that help individuals and teams move from AI curiosity to confident, daily use — grounded in real tools and real workflows.',
  },
];

const steps = [
  { number: '01', label: 'Discovery' },
  { number: '02', label: 'Build' },
  { number: '03', label: 'Deploy' },
  { number: '04', label: 'Measure' },
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
        I work with individuals and businesses at every stage — whether you&apos;re trying to
        understand what AI can do for you, or you&apos;re ready to build. Engagements are
        scoped to your needs: advisory, project-based, or ongoing.
      </p>

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
        <a href="mailto:jgbrumfi@gmail.com" className="btn" aria-label="Send me an email">
          Let&apos;s Talk
        </a>
        <p>jgbrumfi@gmail.com</p>
      </div>
    </motion.section>
  );
}

export default Consulting;
