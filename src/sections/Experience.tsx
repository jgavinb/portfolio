import { motion } from 'framer-motion';

const experiences = [
  {
    name: 'YETI',
    role: 'Data Scientist II',
    url: 'https://www.yeti.com/',
    start: 'July 2025',
    end: 'Present',
  },
  {
    name: 'Artemis Health',
    role: 'Data Scientist Intern',
    url: 'https://www.artemishealth.com/',
    start: 'September 2024',
    end: 'March 2025',
  },
  {
    name: 'Syneos Health',
    role: 'Application Security Intern',
    url: 'https://www.syneoshealth.com',
    start: 'December 2022',
    end: 'January 2024',
  },
  {
    name: 'Syneos Health',
    role: 'Solutions Architect Intern',
    url: 'https://www.syneoshealth.com',
    start: 'May 2022',
    end: 'December 2022',
  },
];

function Experience() {
  return (
    <motion.section
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <motion.div
            className="exp-row"
            key={`${exp.name}-${exp.role}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-row-company"
            >
              {exp.name}
            </a>
            <span className="exp-row-role">{exp.role}</span>
            <span className="exp-row-dates">{exp.start} — {exp.end}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
