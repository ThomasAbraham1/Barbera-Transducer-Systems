import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    // Configuration: Set to true for video background, false for image background
    const USE_VIDEO_BACKGROUND = true;

    return (
        <div className="relative bg-primary text-white py-24 px-4 overflow-hidden min-h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
                {USE_VIDEO_BACKGROUND ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80"
                    >
                        <source src="https://videos.pexels.com/video-files/5091636/5091636-hd_1920_1080_24fps.mp4" type="video/mp4" />
                        {/* Fallback content for browsers that don't support video */}
                        <img
                            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80"
                            alt="Violin background"
                            className="w-full h-full object-cover"
                        />
                    </video>
                ) : (
                    <img
                        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80"
                        alt="Violin background"
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative container mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">
                    Advanced Pickup Systems <br /> for String Instruments
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light">
                    Experience the pure, natural sound of your instrument with our high-performance multi-transducer bridges.
                </p>
                <Link
                    to="/products"
                    className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                    Explore Products
                </Link>
            </div>
        </div>
    );
};

export default Hero;
