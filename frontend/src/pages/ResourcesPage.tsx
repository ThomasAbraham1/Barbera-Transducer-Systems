import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'building' | 'concepts' | 'faq'>('building');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab === 'building' || tab === 'concepts' || tab === 'faq') {
            setActiveTab(tab);
        }
    }, [location]);

    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Resources</h1>

                    <div className="flex flex-wrap justify-center mb-12 gap-4">
                        <button
                            onClick={() => setActiveTab('building')}
                            className={`px-6 py-3 rounded-full font-bold transition-colors ${activeTab === 'building'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            Building Your Own
                        </button>
                        <button
                            onClick={() => setActiveTab('concepts')}
                            className={`px-6 py-3 rounded-full font-bold transition-colors ${activeTab === 'concepts'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            Concepts Behind BTS
                        </button>
                        <button
                            onClick={() => setActiveTab('faq')}
                            className={`px-6 py-3 rounded-full font-bold transition-colors ${activeTab === 'faq'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            FAQ
                        </button>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-md leading-relaxed text-gray-700 space-y-6"
                    >
                        {activeTab === 'building' && (
                            <>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Building your own Electric Violin?</h2>
                                <h3 className="text-xl font-bold text-accent mb-4">Some tips from Rich Barbera</h3>
                                <p>
                                    I frequently hear from customers who are constructing an electric violin of their own design.
                                    Over the course of 20 years of selling pickups to folks making their own electric violins,
                                    I have seen a lot of creative ideas.
                                </p>
                                <p>
                                    There are some general misconceptions about electric violins. One is that because the instrument
                                    is solid body, the body doesn't matter much. This is not the case. Everything about the design,
                                    construction and materials will affect the sound and performance of the instrument.
                                </p>
                                <p>
                                    The resonant characteristics of a stringed instrument's body directly affect and enable the way
                                    in which strings which are coupled to it will vibrate. This is true for solid body instruments as well.
                                </p>
                                <p>
                                    There are some basic guidelines regarding materials and design which will yield different general
                                    tonal and performance characteristics. For example, harder, denser woods will generally yield a
                                    brighter, more sustaining tone, while softer, less dense woods will yield a warmer, more acoustic-like tone.
                                </p>
                            </>
                        )}

                        {activeTab === 'concepts' && (
                            <>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Concepts Behind Barbera Multi Transducer Bridges</h2>
                                <p>
                                    <strong>MUSIC IS ENERGY</strong>, and the pickup is the first critical link in the projection of that energy.
                                    Tone, texture and dynamics require a refined sensitivity to be reproduced well.
                                </p>
                                <p>
                                    The nuances of sound unique to violin family instruments require particularly sensitive treatment for amplification.
                                    Strings vibrate on a musical instrument in direct response to the resonant properties of the particular instrument.
                                </p>
                                <p>
                                    Barbera pickup designs are unique. They employ a precision fabricated multi-element pickup cartridge made of maple.
                                    This construction allows the pickup to sense the vibrational energy of the strings in a way that is very similar
                                    to how the instrument itself responds acoustically.
                                </p>
                                <p>
                                    The result is a focused, clear, and natural amplified sound that retains the unique character of the instrument
                                    and the player's individual style.
                                </p>
                            </>
                        )}

                        {activeTab === 'faq' && (
                            <>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">How are Barbera Pickups different from other pickups?</h3>
                                        <p>
                                            Barbera pickups are multi-transducer bridges. Unlike single-element piezo pickups, our bridges contain separate transducers for each string.
                                            This provides exceptional string-to-string balance, clarity, and a rich, full-range tonal response that accurately reflects the acoustic properties of the instrument.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Do I need a pre-amp?</h3>
                                        <p>
                                            It depends on your amplification setup. Barbera pickups have a high output passive signal.
                                            If you are plugging into an amplifier with a high-impedance input (like most acoustic instrument amps or guitar amps), you generally do not need a pre-amp.
                                            However, a high-quality pre-amp can always help to further shape your tone and maximize the potential of the pickup, especially for direct recording or PA systems.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Does the Barbera Bridge affect the acoustic sound of an acoustic instrument?</h3>
                                        <p>
                                            For violins and cellos, the bridge has a slightly higher mass than a traditional bridge, which can have a minor muting effect on the acoustic volume,
                                            often described as a slightly "darker" or "softer" tone. Many players find this acceptable or even desirable.
                                            For upright bass, the bridge functions acoustically very similarly to a standard bridge.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">Can the tops of the bridges be carved or shaped like a traditional bridge?</h3>
                                        <p>
                                            No. The pickup elements are embedded near the top of the bridge. Carving the top would damage the transducers.
                                            However, the string notches can be carefully adjusted by a qualified luthier to fine-tune the action and string spacing within reasonable limits.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ResourcesPage;
