import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Artemis Health',
      role: 'Practicum | Data Scientist, Communications Lead',
      url: 'https://www.artemishealth.com/',
      start: 'September 2024',
      end: 'Current',
      shortDescription: [
      "Performing data engineering on a billion-row dataset in PostgreSQL, employing SQL optimizations, indexing, and partitioning for faster queries and efficent data handling.",
      "Developing an ensemble of anomaly detection and unsupervised learning algorithms to identify, categorize, and score data quality issues within third-party vendor datasets.",
      "Creating comprehensive data quality dashboards in Python, providing real-time, actionable interventions based on root-cause analysis to assist the client's data operations team in improving data quality.",
      "Collaborating with stakeholders to define the scope of work including key quality indicators, aligning the project with broader data governance objectives and existing company infrastructure.",
      ],
    },
    {
      name: 'Syneos Health',
      role: 'Application Security Intern',
      url: 'https://www.syneoshealth.com',
      start: 'December 2022',
      end: 'January 2024',
      shortDescription: [
      "Enhanced CI/CD pipeline efficiency by integrating code-scanning tools and providing guidance to development leads on tool implementation to proactively identify and mitigate security vulnerabilities early in the development process.",
      "Improved decision-making and security practices by communicating code scan results to stakeholders and development teams, facilitating timely, data-driven actions to address critical findings and reduce potential risks.",
      "Strengthened legal and privacy standards by implementing a 'Shift left' approach within the Software Development Lifecycle, ensuring compliance with national and international regulations and minimizing compliance-related risks across projects.",
      ],
    },
    {
      name: 'Syneos Health',
      role: 'Solution Architect Intern',
      url: 'https://www.syneoshealth.com',
      start: 'May 2022',
      end: 'December 2022',
      shortDescription: [
      "Increased data accuracy and visibility of project progress by developing and managing PowerBI dashboards with automated data pipelines, providing the Enterprise Architecture team and upper management with real-time metrics on data transfer from the existing Change Management Database to LeanIX.",
      "Enhanced productivity and efficiency of the Architecture Review Board by creating key performance indicator dashboards with automated data pipelines, enabling Syneos Health to track performance and effectively identify areas for process improvement.",
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${index === selected ? 'exp-slider-item-selected' : ''}`}
              onClick={() => setSelected(index)}
              key={`${experience.name}-${index}`}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {experiences[selected].name}
                  </a>
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
