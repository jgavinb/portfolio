import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'What does a typical engagement look like?',
    a: "Most start with a free 30-minute strategy call to scope the problem. From there, I put together a proposal — usually a fixed-scope project with a clear deliverable, timeline, and price. No ambiguity, no open-ended hourly billing unless that structure works better for you.",
  },
  {
    q: 'How long does a project take?',
    a: "Most builds — agents, pipelines, dashboards — take 4–8 weeks from kickoff to deployment. Strategic advisory or data strategy work can start showing results in 2–3 weeks. I'll give you a realistic timeline before we start, not after.",
  },
  {
    q: 'What do I need to have ready?',
    a: "Not much. A clear problem and access to your data is usually enough to get started. I'll help you figure out the right approach, the tooling, and the architecture. You focus on the business decisions; I handle the technical ones.",
  },
  {
    q: 'Do I need to be technical?',
    a: "Not at all. Most of my clients are small business owners, not engineers. I handle the technical side entirely — you just need to know your business problem. We'll talk through it together in plain English.",
  },
  {
    q: 'Can you work alongside my existing team?',
    a: "Absolutely. I can embed as a technical lead, work independently and hand off, or advise your team as they build. Whatever structure moves fastest for your situation.",
  },
  {
    q: 'What does it cost?',
    a: "Project-based work is priced by scope, not by the hour — so you know the number before we start. We'll talk through range and structure on our first call. No commitment required, no surprise invoices.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      className="faq"
      id="faq"
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
        <h2>Common Questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => (
          <motion.div
            className={`faq-item ${open === i ? 'faq-item-open' : ''}`}
            key={item.q}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              className="faq-item-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="faq-item-toggle">{open === i ? '-' : '+'}</span>
            </button>
            <div className="faq-item-answer">
              <p>{item.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FAQ;
