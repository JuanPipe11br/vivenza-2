import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from './ProductDetail';
import './LivingRoom.css';

const PRODUCTS = ALL_PRODUCTS.filter(p => p.category === 'living-room');

export default function LivingRoom() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
        title="Serenidad Arquitectónica."
        subtitle="Asientos y superficies diseñados para el santuario moderno. Un diálogo entre materiales naturales y forma refinada."
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
            <span className="label-md">La Colección</span>
            <h2 className="headline-lg">Esenciales para tu Sala</h2>
          </motion.div>
          <div className="living-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} linkTo={`/product/${p.id}`} />
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
              "Un hogar es una colección de memorias, y cada mueble es un recipiente para esos momentos."
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
              <span className="label-sm">Edición Limitada</span>
              <h3 className="headline-md">Credenza Linear</h3>
              <p className="body-md">Laca Mate • Detalles en Latón</p>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                Descubre la Serie Artesanal. Colaboraciones exclusivas con maestros artesanos.
              </p>
              <Link to="/collections" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Descubrir</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
