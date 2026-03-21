import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container">
          <h2 className="headline-md">Únete al Círculo Vivenza</h2>
          <p className="body-md" style={{ maxWidth: '480px', margin: '1rem auto 2rem' }}>
            Suscríbete para recibir actualizaciones exclusivas sobre nuevas colecciones e inspiración de diseño interior.
          </p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="footer__input"
            />
            <button type="submit" className="btn-primary">Suscribirse</button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">Vivenza</Link>
              <p className="body-md">
                Elevando el living contemporáneo a través de diseño curado y maestría artesanal.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h4 className="label-md">Navegación</h4>
              <ul className="footer__list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/living-room">Salas</Link></li>
                <li><Link to="/bedroom">Dormitorios</Link></li>
                <li><Link to="/dining">Comedores</Link></li>
                <li><Link to="/collections">Colecciones</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer__col">
              <h4 className="label-md">Empresa</h4>
              <ul className="footer__list">
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Sostenibilidad</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer__col">
              <h4 className="label-md">Legal</h4>
              <ul className="footer__list">
                <li><a href="#">Términos de Servicio</a></li>
                <li><a href="#">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer__bottom">
            <p className="label-sm">© 2024 Vivenza Interiores de Lujo. Todos los derechos reservados.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.19-5.03 1.19-5.03s-.3-.61-.3-1.51c0-1.42.82-2.47 1.85-2.47.87 0 1.29.65 1.29 1.44 0 .88-.56 2.19-.85 3.4-.24 1.02.51 1.86 1.52 1.86 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.17-4.28-4.17-2.91 0-4.62 2.19-4.62 4.44 0 .88.34 1.82.76 2.34.08.1.09.19.07.29l-.28 1.15c-.05.19-.15.23-.35.14-1.3-.6-2.11-2.51-2.11-4.04 0-3.28 2.39-6.3 6.88-6.3 3.61 0 6.42 2.58 6.42 6.02 0 3.59-2.26 6.49-5.41 6.49-1.06 0-2.05-.55-2.39-1.19l-.65 2.48c-.24.91-.88 2.05-1.31 2.75.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
