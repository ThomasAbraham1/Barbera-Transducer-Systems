import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import HearTheDifference from '../components/HearTheDifference';
import GlobalAudienceMap from '../components/GlobalAudienceMap';

import { products } from '../data/products';

const HomePage: React.FC = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div>
            <Hero />

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 bg-background"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">
                        Featured Collections
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </motion.section>

            <HearTheDifference />
            <GlobalAudienceMap />

            {/* Testimonials Preview */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-8 md:py-16 bg-primary text-white"
            >
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-white">What Artists Are Saying</h2>
                    <blockquote className="text-xl md:text-2xl italic mb-8 font-light leading-relaxed">
                        "The Barbera Transducer Bridge is by far the best and most consistent sounding pick-up I have ever experienced in over twenty years."
                    </blockquote>
                    <p className="font-bold text-lg mb-8">— Rufus Reid, Jazz Bassist</p>
                    <Link to="/testimonials" className="inline-block border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors font-bold tracking-wide">
                        Read More Testimonials
                    </Link>
                </div>
            </motion.section>

            {/* Industry Partners */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12 bg-gray-100"
            >
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-8">Trusted By Industry Leaders</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for Partner Logos */}
                        <span className="text-2xl font-serif font-bold text-gray-400">Wood Violins</span>
                        <span className="text-2xl font-serif font-bold text-gray-400">Jordan Violins</span>
                        <span className="text-2xl font-serif font-bold text-gray-400">Jensen Musical Instruments</span>
                    </div>
                    <div className="mt-8">
                        <Link to="/links" className="text-accent font-bold text-sm hover:underline">View All Partners &rarr;</Link>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
                        About Barbera Transducer Systems
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Barbera Transducer Systems manufactures high performance, multi-transducer bridges for violin, viola, cello and upright bass.
                        Our pickups are known for their focused, clear, and natural amplified sound, making them the choice of professional musicians worldwide.
                    </p>
                    <Link to="/about" className="text-accent font-bold hover:underline transition-colors" >Read Our Story &rarr;</Link>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;
