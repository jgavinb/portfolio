import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const underline = document.querySelector<HTMLElement>('.underline');
    if (underline) underline.style.top = `${selected * 2.5}rem`;
  }, [selected]);

  const experiences = [
    {
      name: 'YETI',
      role: 'Data Scientist II',
      url: 'https://www.yeti.com/',
      start: 'July 2025',
      end: 'Present',
      shortDescription: [
        'Designed and deployed a production GenAI lead-generation system for Corporate Sales — web-browsing agents + LLM orchestration integrated with Salesforce for deduplication, reducing manual prospecting time by 320 hours per quarter.',
        'Built an end-to-end social listening platform ingesting Reddit data into BigQuery/Vertex AI; delivered topic/SKU extraction, sentiment analysis, natural-language self-service querying, and automated alerts.',
        'Partnered with Marketing, Sales, and Demand Planning as embedded technical advisor; led AI enablement sessions and deployed automated reporting workflows that reduced recurring workload by 40%.',
        'Executed geo-based incrementality tests measuring causal impact of store layout changes and brand campaigns; translated results into optimized in-store strategies.',
        'Delivered Marketing Mix Modeling analysis for the Canadian market, quantifying multi-channel ROI and informing 2026 budget allocation.',
      ],
    },
    {
      name: 'Artemis Health',
      role: 'Data Scientist Intern',
      url: 'https://www.artemishealth.com/',
      start: 'September 2024',
      end: 'March 2025',
      shortDescription: [
        'Engineered and optimized data pipelines on a 1-billion-row PostgreSQL dataset, reducing query times by 40% and accelerating delivery of client insights.',
        'Developed ensemble anomaly detection models (unsupervised learning + interrupted time-series) that cut manual data review effort by 50%.',
        'Built real-time data quality dashboards in Streamlit, empowering client operations teams with self-service visibility.',
      ],
    },
    {
      name: 'Syneos Health',
      role: 'Application Security Intern',
      url: 'https://www.syneoshealth.com',
      start: 'December 2022',
      end: 'January 2024',
      shortDescription: [
        'Integrated code-scanning tools into Azure/GitLab CI/CD pipelines, reducing security vulnerabilities by 30% and enabling Shift Left development practices.',
        'Communicated scan results to stakeholders and development teams, facilitating timely, data-driven remediation of critical findings.',
      ],
    },
    {
      name: 'Syneos Health',
      role: 'Solutions Architect Intern',
      url: 'https://www.syneoshealth.com',
      start: 'May 2022',
      end: 'December 2022',
      shortDescription: [
        'Designed and deployed automated PowerBI dashboards with data pipelines for the Enterprise Architecture team, increasing Architecture Review Board productivity by 25%.',
        'Integrated interactive reports into SharePoint via Power Automate, streamlining cross-team collaboration and data access.',
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '0' }}
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
              {experiences[selected].start} — {experiences[selected].end}
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
