import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

import { products } from '../data/products';

const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
    const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

    return (
        <div className="py-12 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">Our Products</h1>

                <div className="flex justify-center mb-12 flex-wrap gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full transition-colors ${filter === cat
                                ? 'bg-primary text-white'
                                : 'bg-white text-primary hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
