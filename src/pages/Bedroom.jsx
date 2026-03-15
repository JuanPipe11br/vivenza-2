import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './Bedroom.css';

const PRODUCTS = [
  {
    title: 'Aurelius King Size Bed',
    material: 'Walnut frame with ivory bouclé upholstery',
    price: '$4,850',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
  },
  {
    title: 'Lumière Brass Table Lamp',
    material: 'Hand-brushed solid brass',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80',
  },
  {
    title: 'Solis Oak Nightstand',
    material: 'Two-drawer soft close system',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    title: 'Zenith Velvet Headboard',
    material: 'Midnight Navy Italian Velvet',
    price: '$2,150',
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80',
  },
  {
    title: 'Oracle Pendant Light',
    material: 'Smoked hand-blown glass',
    price: '$1,450',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
  },
];

export default function Bedroom() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
        title="The Art of Quiet Rest"
        subtitle="A bedroom is more than a room; it is a ritual."
      />

      {/* Philosophy */}
      <section className="section bedroom-philosophy">
        <div className="container">
          <div className="bedroom-philosophy__grid">
            <motion.div
              className="bedroom-philosophy__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-md">Our Approach</span>
              <h2 className="headline-lg">Designed for Serenity</h2>
              <p className="body-lg">
                A bedroom is more than a room; it is a ritual. We curate pieces that blend
                architectural precision with organic comfort—velvet headboards, hand-turned
                nightstands, and lighting that mimics the golden hour.
              </p>
              <button className="btn-secondary" style={{ marginTop: '2rem' }}>Our Design Philosophy</button>
            </motion.div>
            <motion.div
              className="bedroom-philosophy__quote"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="headline-md" style={{ fontStyle: 'italic', lineHeight: 1.5 }}>
                "True luxury is felt before it is seen."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bedroom-products">
        <div className="container">
          <motion.div
            className="bedroom-products__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">The Curated Selection</span>
            <h2 className="headline-lg">Beds, Nightstands & Lighting</h2>
          </motion.div>
          <div className="bedroom-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
