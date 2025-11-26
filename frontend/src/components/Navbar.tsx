import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider truncate">
                    Barbera Transducer Systems
                </Link>

                <div className="hidden lg:flex space-x-6 font-sans text-sm font-medium items-center">
                    <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link to="/products" className="hover:text-accent transition-colors">Products</Link>

                    {/* Community Dropdown */}
                    <div className="relative group">
                        <button
                            className="hover:text-accent transition-colors flex items-center focus:outline-none"
                            onMouseEnter={() => setIsCommunityOpen(true)}
                            onMouseLeave={() => setIsCommunityOpen(false)}
                        >
                            Community
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-200 transform origin-top-left ${isCommunityOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            onMouseEnter={() => setIsCommunityOpen(true)}
                            onMouseLeave={() => setIsCommunityOpen(false)}
                        >
                            <Link to="/testimonials" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">Testimonials</Link>
                            <Link to="/friends" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">Friends & Users</Link>
                            <Link to="/links" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">Links</Link>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button
                            className="hover:text-accent transition-colors flex items-center focus:outline-none"
                            onMouseEnter={() => setIsResourcesOpen(true)}
                            onMouseLeave={() => setIsResourcesOpen(false)}
                        >
                            Resources
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-200 transform origin-top-left ${isResourcesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            onMouseEnter={() => setIsResourcesOpen(true)}
                            onMouseLeave={() => setIsResourcesOpen(false)}
                        >
                            <Link to="/resources?tab=building" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">Building Your Own</Link>
                            <Link to="/resources?tab=concepts" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">Concepts</Link>
                            <Link to="/resources?tab=faq" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary">FAQ</Link>
                        </div>
                    </div>

                    <Link to="/about" className="hover:text-accent transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
                </div>

                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-primary/95 pb-4">
                    <Link to="/" className="block px-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/products" className="block px-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Products</Link>
                    <div className="px-4 py-2 font-bold text-accent/80 uppercase text-xs tracking-wider mt-2">Community</div>
                    <Link to="/testimonials" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    <Link to="/friends" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Friends & Users</Link>
                    <Link to="/links" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Links</Link>
                    <div className="px-4 py-2 font-bold text-accent/80 uppercase text-xs tracking-wider mt-2">Resources</div>
                    <Link to="/resources?tab=building" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Building Your Own</Link>
                    <Link to="/resources?tab=concepts" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Concepts</Link>
                    <Link to="/resources?tab=faq" className="block pl-8 pr-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link to="/about" className="block px-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-accent/20" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
