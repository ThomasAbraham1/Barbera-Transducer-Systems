import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const ContactPage: React.FC = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const product = params.get('product');
        if (product) {
            setFormData(prev => ({
                ...prev,
                subject: `Inquiry: ${product}`,
                message: `I'm interested in the ${product}. Could you please provide more information about availability and ordering?`
            }));
        }
    }, [location]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>Address:</strong><br />
                                    Barbera Transducer Systems<br />
                                    21 Louis St<br />
                                    Staten Island, NY 10304
                                </p>
                                <p>
                                    <strong>Phone:</strong><br />
                                    718-816-3025
                                </p>
                                <p>
                                    <strong>Email:</strong><br />
                                    <a href="mailto:rbarbera@earthlink.net" className="text-accent hover:underline">rbarbera@earthlink.net</a>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-accent"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ContactPage;
