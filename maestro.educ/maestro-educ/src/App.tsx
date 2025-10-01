import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import WhyChoose from './pages/WhyChoose';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() { 
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
