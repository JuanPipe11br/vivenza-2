import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from './ProductDetail';
import './Homepage.css';

const NEW_ARRIVALS = ALL_PRODUCTS.filter(p => p.category === 'new-arrivals').slice(0, 4);

const CATEGORIES = [
  {
    title: 'Dormitorios',
    desc: 'Santuarios de descanso elaborados con lino italiano y roble macizo.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    link: '/bedroom',
  },
  {
    title: 'Salas',
    desc: 'Donde la forma arquitectónica se encuentra con el confort absoluto.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    link: '/living-room',
  },
  {
    title: 'Comedores',
    desc: 'Entornos cuidadosamente seleccionados para el arte de la conversación.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    link: '/dining',
  },
];

export default function Homepage() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
        title="Eleva tu Espacio"
        subtitle="Cuidadosamente seleccionado para el hogar moderno."
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
            <span className="label-md">Explorar Categorías</span>
            <h2 className="headline-lg">Cuidadosamente seleccionado para el hogar moderno.</h2>
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
                alt="Artesanía"
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
              <span className="label-md">Nuestra Filosofía</span>
              <h2 className="headline-lg">Artesanía más allá de lo visual.</h2>
              <p className="body-lg">
                En Vivenza, creemos que el mobiliario es más que utilidad—es una narrativa de tu vida.
                Cada pieza es seleccionada de artesanos que tratan la materia prima con la reverencia de un
                maestro escultor, asegurando que cada curva y unión sea un testimonio de longevidad y
                lujo discreto.
              </p>
              <div className="craftsmanship__stats">
                <div className="stat">
                  <span className="stat__value">100%</span>
                  <span className="label-sm">Materiales Sostenibles</span>
                </div>
                <div className="stat">
                  <span className="stat__value">Acabado Manual</span>
                  <span className="label-sm">Garantía de Calidad</span>
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
            <span className="label-md">Recién Llegado</span>
            <h2 className="headline-lg">Últimas Incorporaciones</h2>
            <p className="body-lg">Las últimas expresiones del diseño contemporáneo, directo de nuestros talleres.</p>
          </motion.div>
          <div className="new-arrivals__grid">
            {NEW_ARRIVALS.map((p) => (
              <ProductCard key={p.id} {...p} linkTo={`/product/${p.id}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
