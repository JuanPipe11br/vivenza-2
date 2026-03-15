import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './LivingRoom.css';

const PRODUCTS = [
  {
    title: 'Aurelius Sectional',
    material: 'Pebble Grey Linen • Modular Configuration',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    title: 'Nexus Coffee Table',
    material: 'American Walnut • Tempered Glass',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=600&q=80',
  },
  {
    title: 'Elysian Armchair',
    material: 'Obsidian Leather • Brushed Steel Frame',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
  },
  {
    title: 'Seraph Loveseat',
    material: 'Ivory Bouclé • Oak Base',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
];

export default function LivingRoom() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
        title="Architectural Serenity."
        subtitle="Curated seating and surfaces designed for the modern sanctuary. A dialogue between natural materials and refined form."
      />

      {/* Product Grid */}
      <section className="section living-products">
        <div className="container">
          <motion.div
            className="living-products__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">The Collection</span>
            <h2 className="headline-lg">Curated Living Essentials</h2>
          </motion.div>
          <div className="living-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <motion.section
        className="living-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="container">
          <blockquote className="living-quote__text">
            <motion.span
              className="headline-lg"
              style={{ fontStyle: 'italic', display: 'block' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              "A home is a collection of memories, and each piece of furniture is a vessel for those moments."
            </motion.span>
          </blockquote>
        </div>
      </motion.section>

      {/* Featured: Linear Sideboard */}
      <section className="section living-featured">
        <div className="container">
          <div className="living-featured__grid">
            <motion.div
              className="living-featured__image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Linear Sideboard"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="living-featured__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-sm">Limited Edition</span>
              <h3 className="headline-md">Linear Sideboard</h3>
              <p className="body-md">Matte Lacquer • Brass Accents</p>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                Discover the Artisan Series. Exclusive collaborations with master craftsmen.
              </p>
              <button className="btn-primary" style={{ marginTop: '2rem' }}>Discover</button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
