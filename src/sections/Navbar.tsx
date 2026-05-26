import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    { name: 'Services', link: '/#consulting' },
    { name: 'About', link: '/#about' },
    { name: 'Contact', link: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.nav-items-list-item-link');
    links.forEach((link) => {
      link.addEventListener('click', () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector('.nav-items');
    nav?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector('html');
    html?.addEventListener('click', () => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector('main');
    if (responsiveNavVisible) {
      main?.classList.add('blur');
    } else {
      main?.classList.remove('blur');
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? 'blur-nav' : ''}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link href="/" className="brand-wordmark">
            <span className="brand-name">Gavin Brumfield</span>
            <span className="brand-sub">AI Consulting&nbsp;&nbsp;·&nbsp;&nbsp;Austin, TX</span>
          </Link>
        </motion.div>

        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
        >
          {responsiveNavVisible ? (
            <X
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
              size={22}
            />
          ) : (
            <Menu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
              size={22}
            />
          )}
        </motion.div>

        <motion.div
          className={`${responsiveNavVisible && 'nav-responsive'} nav-items`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="nav-mobile-wordmark">
            <span className="brand-name">Gavin Brumfield</span>
            <span className="brand-sub">AI Consulting · Austin, TX</span>
          </div>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
              >
                <Link href={link} className="nav-items-list-item-link" aria-label={`Navigate to ${name}`}>
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
          >
            <a
              href="https://calendly.com/jgbrumfi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav"
              aria-label="Book a call"
            >
              Book a Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
