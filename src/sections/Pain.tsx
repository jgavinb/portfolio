import { motion } from 'framer-motion';

const painPoints = [
  {
    number: '01',
    heading: "You're spending hours on work that should be automatic",
    body: "If your team is doing the same things every day — pulling reports, entering data, following up with leads — that's time being thrown away. It shouldn't work like that.",
  },
  {
    number: '02',
    heading: "You're making decisions without clear numbers",
    body: "Which customers are most valuable? Which products are actually profitable? Which campaigns are working? If you're guessing, you're leaving money on the table.",
  },
  {
    number: '03',
    heading: "You know AI could help, but you don't know where to start",
    body: "Everyone says AI is the future, but the tools are overwhelming and the vendors are pushy. You don't need a demo — you need someone to tell you what's actually worth building.",
  },
];

function Pain() {
  return (
    <motion.section
      className="pain"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="pain-header">
        <p className="pain-eyebrow">Sound familiar?</p>
        <h2 className="pain-heading">These are the problems I fix.</h2>
      </div>
      <div className="pain-grid">
        {painPoints.map((item, i) => (
          <motion.div
            className="pain-card"
            key={item.number}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="pain-card-number">{item.number}</span>
            <div className="pain-card-right">
              <h3 className="pain-card-heading">{item.heading}</h3>
              <p className="pain-card-body">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Pain;
