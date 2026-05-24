import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = [
    {
      image: 'assets/projects/project1.webp',
      projectName: 'Loan Default Prediction API',
      projectLink: "https://github.com/jgavinb/loan-model-fastapi",
      projectDescription:
        "A REST API for predicting loan default risk using various machine learning models trained with imbalanced data handling techniques.",
      projectTech: ['Python', 'scikit-learn', 'Imbalanced-learn', 'FastAPI'],
      projectExternalLinks: {
        github: "https://github.com/jgavinb/loan-model-fastapi",
        externalLink: "https://github.com/jgavinb/loan-model-fastapi",
      },
    },
    {
      image: 'assets/projects/project3.webp',
      projectName: 'Resume Chatbot',
      projectLink: 'https://gavchat.streamlit.app/',
      projectDescription:
        'Chatbot developed using Python, GroqAPI, Llama 3, and Streamlit to answer questions about myself and my experience.',
      projectTech: ['Python', 'GroqAPI', 'Llama 3', 'Streamlit'],
      projectExternalLinks: {
        github: 'https://github.com/jgavinb/gb-resume-assistant',
        externalLink: 'https://gavchat.streamlit.app/',
      },
    },
    {
      image: 'assets/projects/project2.webp',
      projectName: 'Customer Churn Prediction App',
      projectLink: "https://mlchurn.streamlit.app/",
      projectDescription:
        "A Streamlit deployment of a machine learning model for predicting customer churn in a telecom company. The model was trained using various classification algorithms and hyperparameter tuning.",
      projectTech: ['Python', 'scikit-learn', 'Streamlit'],
      projectExternalLinks: {
        github: "https://github.com/jgavinb/customer-churn-ml",
        externalLink: "https://mlchurn.streamlit.app/",
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '0' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        <h2>Selected Work</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }, idx) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 24 },
                }}
              >
                <div
                  className="project-image"
                  onClick={() => window.open(projectLink, '_blank')}
                >
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={90} />
                  </div>
                </div>
                <div className="project-info">
                  <h3
                    className="project-info-title"
                    onClick={() => window.open(projectLink, '_blank')}
                  >
                    {projectName}
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
