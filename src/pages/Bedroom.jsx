import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from './ProductDetail';
import './Bedroom.css';

const PRODUCTS = ALL_PRODUCTS.filter(p => p.category === 'bedroom');

export default function Bedroom() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
        title="El Arte del Descanso Tranquilo"
        subtitle="Un dormitorio es más que una habitación; es un ritual."
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
              <span className="label-md">Nuestro Enfoque</span>
              <h2 className="headline-lg">Diseñado para la Serenidad</h2>
              <p className="body-lg">
                Un dormitorio es más que una habitación; es un ritual. Seleccionamos piezas que fusionan
                precisión arquitectónica con confort orgánico—cabezales de terciopelo, mesitas talladas
                a mano, e iluminación que imita la hora dorada.
              </p>
              <Link to="/collections" className="btn-secondary" style={{ marginTop: '2rem', display: 'inline-flex', textDecoration: 'none' }}>Nuestra Filosofía de Diseño</Link>
            </motion.div>
            <motion.div
              className="bedroom-philosophy__quote"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="headline-md" style={{ fontStyle: 'italic', lineHeight: 1.5 }}>
                "El verdadero lujo se siente antes de verse."
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
            <span className="label-md">La Selección Curada</span>
            <h2 className="headline-lg">Camas, Mesitas e Iluminación</h2>
          </motion.div>
          <div className="bedroom-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} linkTo={`/product/${p.id}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
