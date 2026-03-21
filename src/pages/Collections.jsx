import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Collections.css';

const COLLECTIONS = [
  {
    title: 'Colección Italiana',
    desc: 'Inspirada en los grandes palacios del norte de Italia, esta línea enfatiza formas escultóricas y mármoles raros. Es una colección para quienes ven su hogar como una galería viva.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    title: 'Minimalismo Zen',
    desc: 'La belleza de la resta. Usando ceniza de tono claro y linos texturizados, esta colección fomenta un santuario de calma. Donde cada línea sirve a un propósito y cada sombra añade profundidad.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    title: 'Línea Brutalista',
    desc: 'Materiales honestos y texturas crudas. Concreto fundido se encuentra con acero forjado a mano en una colección que redefine el lujo industrial para el hogar contemporáneo.',
    image: 'https://images.unsplash.com/photo-1487958449943?w=800&q=80',
  },
];

const BRUTALIST_PRODUCTS = [
  {
    title: 'Mesa Foundry',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80',
  },
  {
    title: 'Lounge Obelisk',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
  },
  {
    title: 'Lámpara Apex',
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
            Nuestras Líneas de Diseño
          </motion.span>
          <motion.h1
            className="display-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Colecciones Curadas
          </motion.h1>
          <motion.p
            className="body-lg collections-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Explora nuestras líneas de diseño meticulosamente elaboradas, donde la precisión arquitectónica se encuentra
            con la calidez de los materiales naturales. Cada pieza es un testimonio del arte de vivir bien.
          </motion.p>
          <motion.blockquote
            className="collections-hero__quote headline-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            "Una celebración de proporciones clásicas y alma modernista."
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
                <span className="label-sm">Colección {String(i + 1).padStart(2, '0')}</span>
                <h2 className="headline-lg">{col.title}</h2>
                <p className="body-lg">{col.desc}</p>
                <Link to="/living-room" className="btn-text" style={{ marginTop: '1.5rem' }}>
                  Explorar Colección
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
            <span className="label-md">De la Línea Brutalista</span>
            <h2 className="headline-lg">Piezas Firmantes</h2>
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
