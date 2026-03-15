import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './Dining.css';

const PRODUCTS = [
  {
    title: 'Aurelius Heritage Oak Table',
    material: 'Solid European Oak, Hand-rubbed Oil Finish',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
  },
  {
    title: 'Vela Sculptural Chair',
    material: 'Saddle Leather & Black Ash',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
  },
  {
    title: 'Palladio Stone Sideboard',
    material: 'Carrara Marble & Smoked Oak',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
];

const FEATURES = [
  {
    title: 'Architectural Balance',
    desc: 'Proportions calculated to facilitate conversation and movement.',
    icon: '◇',
  },
  {
    title: 'Conscious Luxury',
    desc: 'FSC-certified timbers and low-impact traditional tanning processes.',
    icon: '✦',
  },
  {
    title: 'Bespoke Finish',
    desc: 'Available in custom dimensions to suit your specific interior landscape.',
    icon: '▣',
  },
];

export default function Dining() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80"
        title="The Art of Gathering"
        subtitle="Sculpted from Italian marble and heritage oak. Discover dining pieces that transform every meal into a curated experience."
        ctaText="Explore Collection"
        ctaLink="/collections"
      />

      {/* Materials */}
      <section className="section dining-materials">
        <div className="container">
          <div className="dining-materials__grid">
            <motion.div
              className="dining-materials__content"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-md">Creative Process</span>
              <h2 className="headline-lg">Mastering Earth & Form</h2>
              <p className="body-lg">
                Our dining collection is a dialogue between the organic and the architectural.
                We select materials—solid walnut, Honed Travertine, and full-grain leathers—that
                age with character, telling the story of your home.
              </p>
              <p className="body-md" style={{ marginTop: '1.5rem' }}>
                Every piece is finished by hand, ensuring that the tactile experience of a
                Vivenza table is as profound as its visual silhouette.
              </p>
            </motion.div>
            <motion.div
              className="dining-materials__image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
                alt="Italian Travertine"
                loading="lazy"
              />
              <div className="dining-materials__caption">
                <h4 className="label-lg">Italian Travertine</h4>
                <p className="body-md">
                  Porous and timeless, our stone is sourced from the same quarries as the Colosseum.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section dining-products">
        <div className="container">
          <motion.div
            className="dining-products__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">The Selection</span>
            <h2 className="headline-lg">Dining Foundations</h2>
          </motion.div>
          <div className="dining-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="dining-features">
        <div className="container">
          <motion.h2
            className="headline-lg"
            style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Elegance is an Echo of Quality
          </motion.h2>
          <div className="dining-features__grid">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="title-md">{f.title}</h3>
                <p className="body-md">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
