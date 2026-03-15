import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Collections.css';

const COLLECTIONS = [
  {
    title: 'The Italian Collection',
    desc: 'Inspired by the grand palazzos of Northern Italy, this line emphasizes sculptural forms and rare marbles. It is a collection for those who view their home as a living gallery.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    title: 'Minimalist Zen',
    desc: 'The beauty of subtraction. Using light-toned ash and textured linens, this collection fosters a sanctuary of calm. Where every line serves a purpose and every shadow adds depth.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    title: 'The Brutalist Line',
    desc: 'Honest materials and raw textures. Cast concrete meets hand-forged steel in a collection that redefines industrial luxury for the contemporary home.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
];

const BRUTALIST_PRODUCTS = [
  {
    title: 'Foundry Table',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80',
  },
  {
    title: 'Obelisk Lounge',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
  },
  {
    title: 'Apex Chandelier',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
  },
];

export default function Collections() {
  return (
    <main>
      {/* Hero Header */}
      <section className="collections-hero">
        <div className="container">
          <motion.span
            className="label-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Design Lines
          </motion.span>
          <motion.h1
            className="display-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Curated Collections
          </motion.h1>
          <motion.p
            className="body-lg collections-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Explore our meticulously crafted design lines, where architectural precision meets
            the warmth of natural materials. Each piece is a testament to the art of fine living.
          </motion.p>
          <motion.blockquote
            className="collections-hero__quote headline-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            "A celebration of classical proportions and modernist soul."
          </motion.blockquote>
        </div>
      </section>

      {/* Collection Cards */}
      <section className="section collections-list">
        <div className="container">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.title}
              className={`collection-row ${i % 2 !== 0 ? 'collection-row--reverse' : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="collection-row__image">
                <img src={col.image} alt={col.title} loading="lazy" />
              </div>
              <div className="collection-row__content">
                <span className="label-sm">Collection {String(i + 1).padStart(2, '0')}</span>
                <h2 className="headline-lg">{col.title}</h2>
                <p className="body-lg">{col.desc}</p>
                <Link to="#" className="btn-text" style={{ marginTop: '1.5rem' }}>
                  Explore Collection
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brutalist Products */}
      <section className="collections-featured">
        <div className="container">
          <motion.div
            className="collections-featured__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">From the Brutalist Line</span>
            <h2 className="headline-lg">Signature Pieces</h2>
          </motion.div>
          <div className="collections-featured__grid">
            {BRUTALIST_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.title}
                className="collections-product"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="collections-product__image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <h3 className="title-md" style={{ marginTop: 'var(--space-5)' }}>{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
