import { motion } from 'framer-motion';
import './ProductCard.css';

export default function ProductCard({ image, title, material, price, badge }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="product-card__image-wrap">
        <img src={image} alt={title} className="product-card__image" loading="lazy" />
        {badge && <span className="product-card__badge label-sm">{badge}</span>}
      </div>
      <div className="product-card__info">
        <h3 className="title-md">{title}</h3>
        <p className="body-md">{material}</p>
        {price && <p className="product-card__price">{price}</p>}
      </div>
    </motion.div>
  );
}
