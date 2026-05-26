import { motion } from 'framer-motion';

const services = [
  {
    title: 'Workflow Automation',
    outcome: 'Hours back every week',
    description: "If your team is doing the same tasks repeatedly — data entry, lead follow-up, report generation, customer outreach — I can automate them. You define the rules once; the system runs without anyone babysitting it.",
  },
  {
    title: 'AI Strategy & Planning',
    outcome: 'A clear plan in 2 weeks',
    description: "Not sure where AI fits in your business? I will map out the highest-value opportunities for your specific situation and give you a plain-English plan for what to build first — and what to skip.",
  },
  {
    title: 'Dashboards & Reporting',
    outcome: 'See what is actually working',
    description: "Stop running reports by hand or waiting on someone else to pull the numbers. I build custom dashboards that show you exactly what is happening in your business — sales, costs, customers — updated automatically.",
  },
  {
    title: 'Team Training',
    outcome: 'Your team uses AI confidently',
    description: "AI tools are only valuable if your people actually use them. I run focused, hands-on sessions built around your specific business — not generic AI hype — so your team walks away with real skills they use the next day.",
  },
];

const forItems = [
  "Small business owners who want AI but don't have a technical team to build it",
  'Operators spending hours every week on tasks AI could handle in minutes',
  'Growing businesses that need clear data without hiring a full analytics team',
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
        <h2>What I Build</h2>
      </div>

      <p className="consulting-intro">
        Every engagement starts with your specific problem — not a template. Whether you need
        something built from scratch or a clear plan for what to do next, I will scope it to
        fit your timeline and budget.
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
            <h3>{service.title}</h3>
            <p className="card-outcome">&rarr; {service.outcome}</p>
            <p>{service.description}</p>
          </motion.div>
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
