import { motion } from 'framer-motion';

const metrics = [
  { value: '320', suffix: ' hrs', label: 'saved per quarter' },
  { value: '40%', suffix: '', label: 'reduction in recurring workload' },
  { value: '50%', suffix: '', label: 'less time on manual review' },
];

function CaseStudy() {
  return (
    <motion.section
      className="case-study"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="case-study-header">
        <p className="case-study-eyebrow">What this looks like in practice</p>
        <h2 className="case-study-heading">A sales team got 320 hours back every quarter.</h2>
      </div>

      <div className="case-study-card">
        <div className="case-study-card-section">
          <p className="case-study-label">The Problem</p>
          <p className="case-study-text">
            A corporate sales team was spending over 320 hours every quarter manually researching
            and qualifying leads. They were doing the work — but most of it was repetitive,
            slow, and costing them time they could have spent closing deals.
          </p>
        </div>
        <div className="case-study-card-divider" />
        <div className="case-study-card-section">
          <p className="case-study-label">What I Built</p>
          <p className="case-study-text">
            An AI system that automatically finds qualified leads, enriches their profiles with
            relevant business data, and routes them directly into Salesforce — deduplicated and
            ready to contact. The team went from prospecting to closing.
          </p>
        </div>
      </div>

      <div className="case-study-metrics">
        {metrics.map((m) => (
          <div className="case-study-metric" key={m.label}>
            <div className="case-study-metric-value">
              {m.value}<span className="case-study-metric-suffix">{m.suffix}</span>
            </div>
            <div className="case-study-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <p className="case-study-disclosure">
        Built at YETI, where I work full-time as a Data Scientist.
      </p>
    </motion.section>
  );
}

export default CaseStudy;
