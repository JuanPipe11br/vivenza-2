import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

const ALL_PRODUCTS = [
  {
    id: 'aurelius-sectional',
    title: 'Aurelius Sectional',
    material: 'Pebble Grey Linen • Configuración Modular',
    price: '$3,450',
    category: 'living-room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'El Aurelius Sectional representa la esencia del diseño italiano contemporáneo. Con líneas limpias y materiales de primera calidad, este sofá modular se adapta a cualquier espacio vital. La tapicería de lino格雷i proporciona una textura visual rica mientras mantiene una sensación suave al tacto.',
    details: [
      'Estructura de madera de haya maciza',
      'Tapizado en lino italiano de alta calidad',
      'Espuma de alta densidad para máximo confort',
      'Configuración modular personalizable',
      'Patas de roble natural encerado a mano'
    ],
    dimensions: '280cm x 180cm x 85cm',
  },
  {
    id: 'nexus-coffee-table',
    title: 'Mesa de Centro Nexus',
    material: 'Nogal Americano • Vidrio Templado',
    price: '$1,890',
    category: 'living-room',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=800&q=80',
    description: 'La Mesa de Centro Nexus es una pieza de arquitectura en miniatura. La combinación de nogal americano con vidrio templado crea un contraste visual fascinante que ancla cualquier sala de estar con elegancia discreta.',
    details: [
      'Estructura de nogal americano macizo',
      'Superficie de vidrio templado de 12mm',
      'Acabado con aceite de tung natural',
      'Diseño que facilita la limpieza',
      'Almacenamiento integrado discret'
    ],
    dimensions: '120cm x 60cm x 40cm',
  },
  {
    id: 'elysian-armchair',
    title: 'Sillón Elysian',
    material: 'Cuero Obsidiana • Estructura de Acero Cepillado',
    price: '$2,150',
    category: 'living-room',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
    description: 'El Sillón Elysian combina la robusta elegancia del cuero full-grain con la precisión del acero inoxidable cepillado. Cada pieza es un estudio en contrastes formales que eleva cualquier espacio.',
    details: [
      'Cuero full-grain de origen italiano',
      'Estructura de acero inoxidable 304',
      'Espuma de memoria para máximo confort',
      'Costuras reforzadas a mano',
      'Base giratoria de 360°'
    ],
    dimensions: '78cm x 82cm x 95cm',
  },
  {
    id: 'seraph-loveseat',
    title: 'Sofá Loveseat Seraph',
    material: 'Bouclé Marfil • Base de Roble',
    price: '$3,200',
    category: 'living-room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    description: 'El Seraph Loveseat es una declaración de sofisticación minimalista. Su tapizado en boucléIvory ybase de roble sólido crean una pieza atemporal que abraza tanto la forma como la función.',
    details: [
      'Bouclé italiano premium de alta resistencia',
      'Base de roble macizo con acabado natural',
      'Cojines de plumas naturales con núcleo de espuma',
      'Sistema de cierre suave en todos los mecanismos',
      'Diseño ergonómico para máximo confort'
    ],
    dimensions: '175cm x 90cm x 80cm',
  },
  {
    id: 'aurelius-king-bed',
    title: 'Cama King Aurelius',
    material: 'Estructura de nogal con tapizado bouclé marfil',
    price: '$4,850',
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    description: 'La Cama King Aurelius transforma tu dormitorio en un santuario de descanso. La combinación de madera de nogal con tapizado bouclé crea un ambiente de serenidad y lujo discreto.',
    details: [
      'Estructura de nogal estadounidense macizo',
      'Tapizado en bouclé italiano premium',
      'Cabecero con acolchado manual',
      'Sistema de soporte de listones de madera',
      'Patas talladas a mano'
    ],
    dimensions: '200cm x 220cm x 120cm (cabecero)',
  },
  {
    id: 'lumiere-lamp',
    title: 'Lámpara de Mesita Lumière',
    material: 'Latón macizo cepillado a mano',
    price: '$890',
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1561753757-d8880c5a3551?w=800&q=80',
    description: 'La Lámpara Lumière captura la esencia de la hora dorada. Su diseño de latón macizo y pantalla de lino orgánico proyecta una luz cálida y acogedora, perfecta para crear ambientes íntimos.',
    details: [
      'Estructura de latón macizo con acabado satinado',
      'Pantalla de lino orgánico natural',
      'Compatible con bombillas LED de cualquier temperatura',
      'Cable de tela trenzada de alta calidad',
      'Interruptor de latón integrado'
    ],
    dimensions: '35cm x 20cm x 50cm',
  },
  {
    id: 'solis-nightstand',
    title: 'Mesita de Noche Solis',
    material: 'Sistema de dos cajones con cierre suave',
    price: '$1,200',
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'La Mesita Solis ejemplifica el diseño funcional con elegancia. Sus dos cajones de cierre suave proporcionan almacenamiento discreto mientras su estética minimalista complementa cualquier dormitorio.',
    details: [
      'Construcción de roble macizo certificado FSC',
      'Cajones con sistema de cierre suave premium',
      'Interior forrado en tela de lino',
      'Espacio para cables integrado',
      'Patas cónicas de precisión'
    ],
    dimensions: '50cm x 40cm x 55cm',
  },
  {
    id: 'zenith-headboard',
    title: 'Cabecero Zenith Velvet',
    material: 'Terciopelo italiano azul medianoche',
    price: '$2,150',
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80',
    description: 'El Cabecero Zenith es una pieza escultórica que domina el dormitorio. Su tapizado en terciopelo italiano azul medianoche se convierte en el punto focal de cualquier habitación.',
    details: [
      'Terciopelo de alta gradación de origen italiano',
      'Estructura de madera de fresno macizo',
      'Acolchado con técnica capitoné tradicional',
      'Instalación universal compatible con cualquier cama',
      'Marco de metal negro mate discreto'
    ],
    dimensions: '180cm x 120cm x 15cm',
  },
  {
    id: 'aurelius-heritage-table',
    title: 'Mesa de Comedor Aurelius Heritage',
    material: 'Roble Europeo Macizo, Acabado Aceitado a Mano',
    price: '$5,200',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    description: 'La Mesa Aurelius Heritage celebra la artesanía tradicional europea. Cada tabla de roble es seleccionada por su veta única y acabada a mano con aceite natural, revelando la belleza inherente de la madera.',
    details: [
      'Tablones de roble europeomacizo de 4cm de grosor',
      'Acabado con aceite de linaza natural',
      'Uniones de espiga y muesca tradicionales',
      'Patas de铸hierro con acabado en polvo negro',
      'Para 8-10 personas'
    ],
    dimensions: '240cm x 100cm x 76cm',
  },
  {
    id: 'vela-chair',
    title: 'Silla Escultórica Vela',
    material: 'Cuero de Saddle & Fresno Negro',
    price: '$1,450',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    description: 'La Silla Vela es un estudio en equilibrio sculptural. Su respaldo curvado de cuero saddle y estructura de fresno negro crean un asiento que es tan cómodo como visualmente impactante.',
    details: [
      'Asiento y respaldo en cuero saddle premium',
      'Estructura de fresno negromacizo',
      'Cojín de espuma de alta densidad extraíble',
      'Apilable para almacenamiento eficiente',
      'Diseñada para uso comercial pesado'
    ],
    dimensions: '52cm x 56cm x 78cm',
  },
  {
    id: 'palladio-sideboard',
    title: 'Credenza Palladio',
    material: 'Mármol de Carrara y Roble Ahumado',
    price: '$6,800',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    description: 'La Credenza Palladio une el lujo del mármol de Carrara con la calidez del roble ahumado. Esta pieza de almacenamiento se convierte en el centro de atención de cualquier comedor o sala de estar.',
    details: [
      'Superficie de mármol de Carrara genuino',
      'Cuerpo de roble ahumadomacizo',
      'Puertas con cierre suave y sistema push-to-open',
      'Interior forrado en terciopelo',
      'Patas de latón macizo con acabado pulido'
    ],
    dimensions: '200cm x 45cm x 80cm',
  },
  {
    id: 'aurelia-velvet-armchair',
    title: 'Sillón Aurelia Velvet',
    material: 'Sala de Estar',
    price: '$1,250',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
    description: 'El Aurelia Velvet Armchair combina el lujo del terciopelo con una silueta contemporánea. Perfecto para rincón de lectura o como acento en cualquier sala.',
    details: [
      'Terciopelo de alta calidad',
      'Estructura de madera maciza',
      'Patas de latón cepillado',
      'Asiento cómodo con espuma de alta densidad'
    ],
    dimensions: '75cm x 80cm x 90cm',
  },
  {
    id: 'carrara-side-plinth',
    title: 'Pedestal Lateral Carrara',
    material: 'Decor',
    price: '$890',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80',
    description: 'Un pedestal versátil en mármol de Carrara genuino. Ideal para exhibir esculturas, plantas o como mesa de apoyo lateral.',
    details: [
      'Mármol de Carrara italiano',
      'Acabado pulido a mano',
      'Base protectora de fieltro',
      'Diseño atemporal'
    ],
    dimensions: '35cm x 35cm x 60cm',
  },
  {
    id: 'noire-sculptural-chair',
    title: 'Silla Escultórica Noire',
    material: 'Dining',
    price: '$640',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    description: 'Una silla que es arte funcional. Su silueta escultórica la convierte en pieza de STATEMENT en cualquier espacio.',
    details: [
      'Diseño artístico contemporáneo',
      'Estructura de acero con recubrimiento en polvo',
      'Asiento ergonómico',
      'Resistente a la intemperie'
    ],
    dimensions: '50cm x 55cm x 82cm',
  },
  {
    id: 'lumiere-floor-lamp',
    title: 'Lámpara de Pie Lumière',
    material: 'Lighting',
    price: '$420',
    category: 'new-arrivals',
    image: 'https://images.unsplash.com/photo-1561753757-d8880c5a3551?w=600&q=80',
    description: 'Lámpara de pie con diseño minimalista que aporta iluminación ambiental cálida a cualquier espacio.',
    details: [
      'Estructura de metal con acabado negro mate',
      'Pantalla de lino natural',
      'Compatible con bombilla E27',
      'Cable de tela de 2 metros'
    ],
    dimensions: '160cm x 40cm',
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 className="headline-lg">Producto no encontrado</h1>
        <Link to="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          Volver al Inicio
        </Link>
      </main>
    );
  }

  const relatedProducts = ALL_PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main>
      <HeroSection
        image={product.image}
        title={product.title}
        subtitle={product.material}
        overlay={true}
      />

      <section className="section product-detail">
        <div className="container">
          <div className="product-detail__grid">
            <motion.div
              className="product-detail__image"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={product.image} alt={product.title} />
            </motion.div>

            <motion.div
              className="product-detail__info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="label-md">Diseño Vivenza</span>
              <h1 className="headline-lg" style={{ marginTop: 'var(--space-3)' }}>{product.title}</h1>
              <p className="body-lg" style={{ marginTop: 'var(--space-2)', color: 'var(--outline)' }}>
                {product.material}
              </p>
              <p className="product-detail__price">{product.price}</p>

              <div className="product-detail__actions">
                <button className="btn-primary">Solicitar Información</button>
                <button className="btn-secondary">Añadir a Favoritos</button>
              </div>

              <div className="product-detail__description">
                <h3 className="title-md">Descripción</h3>
                <p className="body-md">{product.description}</p>
              </div>

              <div className="product-detail__dimensions">
                <span className="label-sm">Dimensiones</span>
                <p className="body-md">{product.dimensions}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="product-detail__details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="title-lg">Características</h3>
            <ul className="product-detail__features">
              {product.details.map((detail, i) => (
                <li key={i} className="body-md">
                  <span className="product-detail__check">✓</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section product-detail__related">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-md">Explora Más</span>
              <h2 className="headline-lg" style={{ marginTop: 'var(--space-2)' }}>Productos Relacionados</h2>
            </motion.div>
            <div className="product-detail__related-grid" style={{ marginTop: 'var(--space-8)' }}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} linkTo={`/product/${p.id}`} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export { ALL_PRODUCTS };
