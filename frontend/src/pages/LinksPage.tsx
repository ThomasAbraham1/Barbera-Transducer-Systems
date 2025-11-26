import React from 'react';
import PageTransition from '../components/PageTransition';

const LinksPage: React.FC = () => {
    const links = [
        { title: "Wood Violins", url: "http://www.woodviolins.com", desc: "Electric violins and accessories." },
        { title: "Jensen Musical Instruments", url: "http://www.halcyon.com/jensmus/violin.htm", desc: "Custom electric violins." },
        { title: "Jordan Electric Violins", url: "http://www.jordanmusic.com", desc: "Ergonomic electric violins." }
    ];

    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Industry Partners & Links</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
                            >
                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{link.title}</h3>
                                <p className="text-gray-600 mb-4">{link.desc}</p>
                                <span className="text-sm text-accent font-bold">Visit Website &rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default LinksPage;
