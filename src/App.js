import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AlphonsoMangoDetailPage from './pages/products/fruit-detail/AlphonsoMangoDetailPage';
import TotapuriMangoDetailPage from './pages/products/fruit-detail/TotapuriMangoDetailPage';
import KesarMangoDetailPage from './pages/products/fruit-detail/KesarMangoDetailPage';
import GuavaDetailPage from './pages/products/fruit-detail/GuavaDetailPage';
import SapotaDetailPage from './pages/products/fruit-detail/SapotaDetailPage';
import JackfruitDetailPage from './pages/products/fruit-detail/JackfruitDetailPage';
import PineappleDetailPage from './pages/products/fruit-detail/PineappleDetailPage';
import GherkinsDetailPage from './pages/products/vegetables/GherkinsDetailPage';
import BabyCornDetailPage from './pages/products/vegetables/BabyCornDetailPage';
import TomatoPasteDetailPage from './pages/products/vegetables/TomatoPasteDetailPage';
import TamarindPasteDetailPage from './pages/products/vegetables/TamarindPasteDetailPage';
import GingerPasteDetailPage from './pages/products/vegetables/GingerPasteDetailPage';
import GarlicPasteDetailPage from './pages/products/vegetables/GarlicPasteDetailPage';
import GreenChillyPasteDetailPage from './pages/products/vegetables/GreenChillyPasteDetailPage';
import RedChillyPasteDetailPage from './pages/products/vegetables/RedChillyPasteDetailPage';
import MangoJuiceDetailPage from './pages/products/juice-commodities/MangoJuiceDetailPage';
import GuavaJuiceDetailPage from './pages/products/juice-commodities/GuavaJuiceDetailPage';
import LemonJuiceDetailPage from './pages/products/juice-commodities/LemonJuiceDetailPage';
import PineappleJuiceDetailPage from './pages/products/juice-commodities/PineappleJuiceDetailPage';
import LycheeJuiceDetailPage from './pages/products/juice-commodities/LycheeJuiceDetailPage';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(docHeight > 0 && scrollY / docHeight > 0.4);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all focus:outline-none animate-fade-bounce"
      aria-label="Back to top"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
    >
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 19V5M12 5l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918122429668"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all focus:outline-none flex items-center justify-center animate-fade-bounce"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.168 14.692 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.238-.188-3.287-.558l-.235-.08-4.657 1.22 1.24-4.54-.153-.236C7.19 18.02 6.5 16.548 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-6.13c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.14-.184.277-.713.899-.874 1.085-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.823-.734-1.379-1.64-1.542-1.917-.16-.277-.017-.426.122-.564.126-.125.277-.32.415-.48.139-.16.185-.277.277-.462.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.54-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.233-.89.87-.89 2.12 0 1.25.91 2.457 1.037 2.627.126.17 1.79 2.73 4.34 3.72.607.209 1.08.334 1.45.427.61.155 1.16.133 1.6.08.488-.057 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.115-.253-.185-.53-.324z"/>
      </svg>
    </a>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/products/fruit-detail/alphonso-mango" element={<AlphonsoMangoDetailPage />} />
            <Route path="/products/fruit-detail/totapuri-mango" element={<TotapuriMangoDetailPage />} />
            <Route path="/products/fruit-detail/kesar-mango" element={<KesarMangoDetailPage />} />
            <Route path="/products/fruit-detail/guava" element={<GuavaDetailPage />} />
            <Route path="/products/fruit-detail/sapota" element={<SapotaDetailPage />} />
            <Route path="/products/fruit-detail/jackfruit" element={<JackfruitDetailPage />} />
            <Route path="/products/fruit-detail/pineapple" element={<PineappleDetailPage />} />
            <Route path="/products/vegetables/gherkins" element={<GherkinsDetailPage />} />
            <Route path="/products/vegetables/baby-corn" element={<BabyCornDetailPage />} />
            <Route path="/products/vegetables/tomato-paste" element={<TomatoPasteDetailPage />} />
            <Route path="/products/vegetables/tamarind-paste" element={<TamarindPasteDetailPage />} />
            <Route path="/products/vegetables/ginger-paste" element={<GingerPasteDetailPage />} />
            <Route path="/products/vegetables/garlic-paste" element={<GarlicPasteDetailPage />} />
            <Route path="/products/vegetables/green-chilly-paste" element={<GreenChillyPasteDetailPage />} />
            <Route path="/products/vegetables/red-chilly-paste" element={<RedChillyPasteDetailPage />} />
            <Route path="/products/juice-commodities/mango-juice" element={<MangoJuiceDetailPage />} />
            <Route path="/products/juice-commodities/guava-juice" element={<GuavaJuiceDetailPage />} />
            <Route path="/products/juice-commodities/lemon-juice" element={<LemonJuiceDetailPage />} />
            <Route path="/products/juice-commodities/pineapple-juice" element={<PineappleJuiceDetailPage />} />
            <Route path="/products/juice-commodities/lychee-juice" element={<LycheeJuiceDetailPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <BackToTopButton />
        <WhatsAppButton />
        <Chatbot />
        <Footer />
      </div>
      <style>{`
        @keyframes fade-bounce {
          0% { opacity: 0; transform: translateY(40px) scale(0.8); }
          60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
          80% { transform: translateY(4px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-bounce {
          animation: fade-bounce 0.7s cubic-bezier(0.23, 1.1, 0.32, 1) both;
        }
      `}</style>
    </Router>
  );
}

export default App;
