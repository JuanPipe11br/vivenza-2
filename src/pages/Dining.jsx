import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from './ProductDetail';
import './Dining.css';

const PRODUCTS = ALL_PRODUCTS.filter(p => p.category === 'dining');

const FEATURES = [
  {
    title: 'Balance Arquitectónico',
    desc: 'Proporciones calculadas para facilitar la conversación y el movimiento.',
    icon: '◇',
  },
  {
    title: 'Lujo Consciente',
    desc: 'Maderas certificadas FSC y procesos tradicionales de curtido de bajo impacto.',
    icon: '✦',
  },
  {
    title: 'Acabado Personalizado',
    desc: 'Disponible en dimensiones personalizadas para adaptarlo a tu espacio interior.',
    icon: '▣',
  },
];

export default function Dining() {
  return (
    <main>
      <HeroSection
        image="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80"
        title="El Arte de Reunirse"
        subtitle="Esculpido en mármol italiano y roble heritage. Descubre piezas que transforman cada comida en una experiencia curada."
        ctaText="Explorar Colección"
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
              <span className="label-md">Proceso Creativo</span>
              <h2 className="headline-lg">Dominando la Tierra y la Forma</h2>
              <p className="body-lg">
                Nuestra colección de comedor es un diálogo entre lo orgánico y lo arquitectónico.
                Seleccionamos materiales—nogal macizo, Travertino honed, y cueros de grano completo—que
                envejecen con carácter, contando la historia de tu hogar.
              </p>
              <p className="body-md" style={{ marginTop: '1.5rem' }}>
                Cada pieza es acabada a mano, asegurando que la experiencia táctil de una mesa
                Vivenza sea tan profunda como su silueta visual.
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
                alt="Travertino Italiano"
                loading="lazy"
              />
              <div className="dining-materials__caption">
                <h4 className="label-lg">Travertino Italiano</h4>
                <p className="body-md">
                  Poroso y atemporal, nuestra piedra proviene de las mismas canteras que el Coliseo.
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
            <span className="label-md">La Selección</span>
            <h2 className="headline-lg">Fundamentos para el Comedor</h2>
          </motion.div>
          <div className="dining-products__grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} linkTo={`/product/${p.id}`} />
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
            La Elegancia es un Eco de la Calidad
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
