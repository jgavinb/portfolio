import { motion } from 'framer-motion';
function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <a
        href="mailto:jgbrumfi@gmail.com"
        className="email-link"
        aria-label="Email Gavin Brumfield"
      >
        jgbrumfi@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
