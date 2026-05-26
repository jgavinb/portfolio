import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null,
  });

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const containerVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Gavin Brumfield',
          to_email: 'jgbrumfi@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="contact-title">Get In Touch</motion.h2>
      <motion.h2 className="contact-sub-title">Tell me what&apos;s eating your time.</motion.h2>
      <motion.p className="contact-text">
        Describe the problem — even roughly. I&apos;ll tell you honestly whether I can help and
        what it might look like. No pitch, no commitment. Just a straight answer.
      </motion.p>

      <motion.form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-textarea"
          />
        </div>

        <div className="contact-cta">
          <button type="submit" className="btn" disabled={status.submitting}>
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {status.submitted && (
          <motion.div className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Message sent — I&apos;ll be in touch soon.
          </motion.div>
        )}

        {status.error && (
          <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {status.error}
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
