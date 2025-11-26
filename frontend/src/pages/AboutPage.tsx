import React from 'react';
import PageTransition from '../components/PageTransition';

const AboutPage: React.FC = () => {
    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">About Us</h1>

                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-md space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Barbera Transducer Systems is dedicated to the development of high performance pickup systems for string instruments.
                            Our goal is to provide musicians with the most natural, clear, and responsive amplified sound possible.
                        </p>
                        <p>
                            Founded by Rich Barbera, a master luthier and inventor, our company has been at the forefront of transducer technology for decades.
                            We specialize in multi-transducer bridges that capture the full tonal spectrum of the instrument, from the deep lows of a bass to the soaring highs of a violin.
                        </p>
                        <p>
                            Unlike traditional piezo pickups that can sound thin or "quacky," Barbera pickups use a unique design that senses the vibration of the strings in multiple directions,
                            resulting in a sound that is true to the acoustic character of the instrument.
                        </p>
                        <p>
                            Our pickups are used by professional musicians in all genres, from classical and jazz to rock and pop.
                            Whether you are playing in a concert hall or a stadium, you can rely on Barbera Transducers to deliver your sound with fidelity and power.
                        </p>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default AboutPage;
