import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<typeof products[0] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
        setLoading(false);
    }, [id]);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div className="py-16 bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <Link to="/products" className="text-accent hover:underline mb-8 inline-block">&larr; Back to Products</Link>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-white min-h-[500px] p-8 flex items-center justify-center">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full max-h-[600px] object-contain" />
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12">
                        <div className="text-sm font-bold text-accent uppercase tracking-wide mb-2">{product.category}</div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{product.name}</h1>
                        <p className="text-2xl font-bold text-gray-800 mb-6">{product.price}</p>

                        <div className="prose max-w-none mb-8 text-gray-600">
                            <p>{product.description}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-primary mb-3">Key Features</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={`/contact?product=${encodeURIComponent(product.name)}`}
                                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors text-center shadow-md hover:shadow-lg"
                            >
                                Contact to Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
