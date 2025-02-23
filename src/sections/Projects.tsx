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
        "A REST API for predicting loan default risk using various machine learning models trained with imbalanced data handling techniques. Built with FastAPI, imbalanced-learn, and Joblib.",
      projectTech: ['Python', 'scikit-learn', 'Imbalanced-learn', 'FastAPI'],
      projectExternalLinks: {
        github: "https://github.com/jgavinb/loan-model-fastapi",
        externalLink: "https://github.com/jgavinb/loan-model-fastapi",
      },
    },
    {
      image: 'assets/projects/project2.webp',
      projectName: 'Customer Churn Prediction App',
      projectLink: "https://mlchurn.streamlit.app",
      projectDescription:
        "A Streamlit deployment of a machine learning model for predicting customer churn in a telecom company. The model was trained using various classification algorithms and hyperparameter tuning.",
      projectTech: ['Python', 'scikit-learn', 'Streamlit'],
      projectExternalLinks: {
        github: "https://github.com/jgavinb/customer-churn-ml",
        externalLink: "https://mlchurn.streamlit.app",
      },
    },
    //{
      //image: 'assets/projects/project3.webp',
      //projectName: 'Compile Vortex',
      //projectLink: 'https://compile-vortex.vercel.app/',
      //projectDescription:
        //'A web-based code editor supporting 40+ programming languages with customizable themes and real-time compilation capabilities.',
      //projectTech: ['React', 'Node.js', 'Judge0 Api', 'Microsoft Azure'],
      //projectExternalLinks: {
        //github: 'https://github.com/lohitkolluri/CompileVortex',
        //externalLink: 'https://compile-vortex.vercel.app/',
      //},
    //},
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
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
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link>
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
