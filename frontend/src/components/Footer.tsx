import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="font-serif text-lg mb-4">Barbera Transducer Systems</p>
                <p className="text-sm opacity-80 mb-2">21 Louis St, Staten Island, NY 10304</p>
                <p className="text-sm opacity-80 mb-4">718-816-3025 | rbarbera@earthlink.net</p>
                <p className="text-xs opacity-60">
                    &copy; {new Date().getFullYear()} Barbera Transducer Systems. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
