import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L from 'leaflet';
import { Link } from 'react-router-dom';

// Fix for default marker icon in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const GlobalAudienceMap: React.FC = () => {
    // Dummy Data for Pins with Famous Customers
    const locations = [
        { id: 1, name: "New York, USA", position: [40.7128, -74.0060] as [number, number], customer: "Regina Carter" },
        { id: 2, name: "London, UK", position: [51.5074, -0.1278] as [number, number], customer: "Nigel Kennedy" },
        { id: 3, name: "Tokyo, Japan", position: [35.6762, 139.6503] as [number, number], customer: "Ryuichi Sakamoto" },
        { id: 4, name: "Berlin, Germany", position: [52.5200, 13.4050] as [number, number], customer: "David Garrett" },
        { id: 5, name: "Sydney, Australia", position: [-33.8688, 151.2093] as [number, number], customer: "Richard Tognetti" },
        { id: 6, name: "Los Angeles, USA", position: [34.0522, -118.2437] as [number, number], customer: "Jean-Luc Ponty" },
        { id: 7, name: "Paris, France", position: [48.8566, 2.3522] as [number, number], customer: "Didier Lockwood" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Global Reach</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Barbera Transducers are trusted by professional musicians on stages worldwide.
                    </p>

                    <Link to="/friends" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg mb-8">
                        View Our Community &amp; Friends
                    </Link>
                </motion.div>

                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <MapContainer
                        center={[20, 0]}
                        zoom={2}
                        scrollWheelZoom={false}
                        style={{ height: '100%', width: '100%' }}
                    >
                        {/* 
                          Using a dark minimalist map style (CartoDB Dark Matter) for premium look.
                        */}
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />

                        {locations.map(loc => (
                            <Marker key={loc.id} position={loc.position}>
                                <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                                    <div className="text-center">
                                        <span className="font-bold text-base block">{loc.customer}</span>
                                        <span className="text-xs text-gray-500">{loc.name}</span>
                                    </div>
                                </Tooltip>
                                <Popup>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg">{loc.customer}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{loc.name}</p>
                                        <Link to="/friends" className="text-primary hover:underline text-xs">
                                            See more artists
                                        </Link>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="mt-8 flex justify-center gap-8 text-gray-500 font-serif italic">
                    <span>* 50+ Countries</span>
                    <span>* 1000+ Professional Artists</span>
                </div>
            </div>
        </section>
    );
};

export default GlobalAudienceMap;
