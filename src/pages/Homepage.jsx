import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './Homepage.css';

const CATEGORIES = [
  {
    title: 'Dormitorios',
    desc: 'Sanctuaries of rest crafted with Italian linen and solid oak.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    link: '/bedroom',
  },
  {
    title: 'Salas',
    desc: 'Where architectural form meets absolute comfort.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    link: '/living-room',
  },
  {
    title: 'Comedores',
    desc: 'Curated settings for the art of conversation.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    link: '/dining',
  },
];

const NEW_ARRIVALS = [
  {
    title: 'Aurelia Velvet Armchair',
    material: 'Living Room',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
  },
  {
    title: 'Carrara Side Plinth',
    material: 'Decor',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80',
  },
  {
    title: 'Noire Sculptural Chair',
    material: 'Dining',
    price: '$640',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
  },
  {
    title: 'Lumière Floor Lamp',
    material: 'Lighting',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80',
  },
];

export default function Homepage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
        title="Eleva tu Espacio"
        subtitle="Meticulously curated for the modern dwelling."
        ctaText="Ver Colección"
        ctaLink="/collections"
      />

      {/* Categories */}
      <motion.section
        className="section categories"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.div
            className="categories__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">Explore Categories</span>
            <h2 className="headline-lg">Meticulously curated for the modern dwelling.</h2>
          </motion.div>
          <div className="categories__grid">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Link to={cat.link} className="category-card">
                  <div className="category-card__image-wrap">
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                  </div>
                  <h3 className="headline-md">{cat.title}</h3>
                  <p className="body-md">{cat.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Craftsmanship */}
      <section className="craftsmanship">
        <div className="container">
          <div className="craftsmanship__grid">
            <motion.div
              className="craftsmanship__image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Craftsmanship"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="craftsmanship__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-md">Our Philosophy</span>
              <h2 className="headline-lg">Craftsmanship beyond the visual.</h2>
              <p className="body-lg">
                At Vivenza, we believe furniture is more than utility—it is a narrative of your life.
                Every piece is sourced from artisans who treat raw materials with the reverence of a
                master sculptor, ensuring that every curve and joint is a testament to longevity and
                quiet luxury.
              </p>
              <div className="craftsmanship__stats">
                <div className="stat">
                  <span className="stat__value">100%</span>
                  <span className="label-sm">Sustainable Sourcing</span>
                </div>
                <div className="stat">
                  <span className="stat__value">Hand‑finished</span>
                  <span className="label-sm">Quality Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section new-arrivals">
        <div className="container">
          <motion.div
            className="new-arrivals__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md">Just In</span>
            <h2 className="headline-lg">New Arrivals</h2>
            <p className="body-lg">The latest expressions of contemporary design, fresh from our studios.</p>
          </motion.div>
          <div className="new-arrivals__grid">
            {NEW_ARRIVALS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
