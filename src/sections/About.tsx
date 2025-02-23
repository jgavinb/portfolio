import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      'Hello! I am Gavin Brumfield, a Master of Analytics student, passionate about Artificial Intelligence and Machine Learning.',
  };

  const desktopText = {
    intro: (
      <>
        <p>
          My journey into analytics began with a fascination for problem-solving. Early on, I thrived in environments that demanded diagnostic thinking—whether troubleshooting systems or optimizing processes. Over time, I realized data analysis mirrored this mindset: both require curiosity, rigor, and the ability to turn ambiguity into actionable strategy.
        </p>
        <p>
          
        </p>
        <p>
          Beyond technical skills, I'm passionate about bridging the gap between data and decision-making. As a graduate student, I&apos;m deepening my expertise in statistical theory and modeling while advocating for data literacy as a universal business competency. When I&apos;m not fine-tuning algorithms or building dashboards, you&apos;ll find me exploring new ways to make analytics accessible, because every dataset holds a story—and I&apos;m here to help organizations write the next chapter.
        </p>
      </>
    ),
  };

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">R</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">FastAPI</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Streamlit</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/assets/profile/profile.webp"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
