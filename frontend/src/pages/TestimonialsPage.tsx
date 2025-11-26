import React from 'react';
import PageTransition from '../components/PageTransition';

const TestimonialsPage: React.FC = () => {
    const testimonials = [
        {
            quote: "The Barbera Transducer Bridge is by far the best and most consistent sounding pick-up I have ever experienced in over twenty years. ... The bottom line for me is that I can play at any volume and still play my bass as if I were playing totally acoustic. That is a real accomplishment. Bravo Rich Barbera!",
            author: "Rufus Reid",
            role: "Jazz Bassist",
            imageUrl: "https://i.ibb.co/mFgfTLYx/image.png?auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "The Barbera bridge is the most natural sounding pick-up I ever heard on an acoustic violin. I tried many pick-ups and this one is the best by far. ... The Barbera bridge is the only pick-up that allows me to get the sound I want.",
            author: "Miri Ben-Ari",
            role: "Violinist",
            imageUrl: "https://i.ibb.co/s974qJC3/image.png?auto=format&fit=crop&w=200&q=80"
        },
        {
            quote: "Rich, The pickup sounds great, far and away from anything I've used before and I've used a lot.",
            author: "John Unger",
            role: "Musician",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Testimonials</h1>

                    <div className="space-y-12">
                        {testimonials.map((t, index) => (
                            <div key={index} className="bg-white p-8 md:p-10 rounded-xl shadow-md border-l-4 border-accent flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="flex-shrink-0">
                                    <img
                                        src={t.imageUrl}
                                        alt={t.author}
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-100 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                                    <div>
                                        <p className="font-bold text-primary text-xl">{t.author}</p>
                                        <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default TestimonialsPage;
