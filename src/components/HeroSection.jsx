import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection({ image, title, subtitle, ctaText, ctaLink, overlay = true }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      {overlay && <div className="hero__overlay" />}
      <div className="hero__content container">
        <motion.h1
          className="display-lg hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="body-lg hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={ctaLink || '#'} className="btn-primary hero__cta">
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
