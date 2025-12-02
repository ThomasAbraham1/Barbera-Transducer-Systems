import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FriendsPage from './pages/FriendsPage';
import LinksPage from './pages/LinksPage';
import ResourcesPage from './pages/ResourcesPage';
import ScrollToTop from './components/ScrollToTop';

import AnalyticsTracker from './components/AnalyticsTracker';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans text-text-main">
      <AnalyticsTracker />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
