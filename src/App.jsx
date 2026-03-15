import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Homepage from './pages/Homepage';
import LivingRoom from './pages/LivingRoom';
import Bedroom from './pages/Bedroom';
import Dining from './pages/Dining';
import Collections from './pages/Collections';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter basename="/vivenza-2/">
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
