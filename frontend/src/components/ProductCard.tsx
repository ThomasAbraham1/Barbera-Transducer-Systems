import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    price: string;
    imageUrl: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, price, imageUrl, description }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-64 overflow-hidden relative group">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">{category}</span>
                    <span className="text-primary font-bold">{price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{description}</p>

                <div className="mt-auto">
                    <Link
                        to={`/products/${id}`}
                        className="block w-full text-center py-2 border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
