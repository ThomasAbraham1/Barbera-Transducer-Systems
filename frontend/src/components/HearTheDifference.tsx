import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

// Reusable AudioCard Component
const AudioCard: React.FC<{
    label: string;
    description: string;
    color: string;
    isActive: boolean;
    isPlaying: boolean;
    onToggle: () => void;
}> = ({ label, description, color, isActive, isPlaying, onToggle }) => {
    return (
        <motion.div
            className={`relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer group ${isActive
                    ? `bg-white/10 border-${color} shadow-[0_0_30px_rgba(var(--color-${color}),0.1)]`
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
            onClick={onToggle}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}/20 to-transparent opacity-0 ${isActive ? 'opacity-100' : 'group-hover:opacity-100'} transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                    <h3 className={`text-2xl font-bold mb-2 text-white ${isActive ? `text-${color}` : ''} transition-colors`}>{label}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-full transition-all duration-300 ${isActive && isPlaying ? `bg-${color} text-black` : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
                        {isActive && isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                    </div>

                    {isActive && isPlaying && (
                        <div className="flex gap-1 items-end h-8">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`w-1.5 rounded-full bg-${color}`}
                                    animate={{ height: [8, 24, 8] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const HearTheDifference: React.FC = () => {
    const [activeId, setActiveId] = useState<'standard' | 'barbera' | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Refs to audio elements
    const audioStandardRef = useRef<HTMLAudioElement>(null);
    const audioBarberaRef = useRef<HTMLAudioElement>(null);

    const MP3_URL = "https://s3.ustatik.com/audio.com.audio/source/44/40/1850762177414044-1850762177532250.mp3?response-content-disposition=attachment%3B%20filename%3D%22Tracy%20Silverman%20-%20John%20Adams%20Dharma%20%28with%20BBC%20Philharmonic%29.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=W7IA3NSYSOQIKLY9DEVC%2F20251206%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20251206T123249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d02c292e5fc3abc132862adb0c80eeae07bf40e14ebd704957f657291de6df3f";

    const handleToggle = (id: 'standard' | 'barbera') => {
        const standardAudio = audioStandardRef.current;
        const barberaAudio = audioBarberaRef.current;

        // If clicking the current active track
        if (activeId === id) {
            if (isPlaying) {
                standardAudio?.pause();
                barberaAudio?.pause();
                setIsPlaying(false);
            } else {
                // Determine which to play
                if (id === 'standard') standardAudio?.play();
                else barberaAudio?.play();
                setIsPlaying(true);
            }
        } else {
            // Switching tracks: Stop everything, reset current time, play new.
            standardAudio?.pause();
            barberaAudio?.pause();

            if (standardAudio) standardAudio.currentTime = 0;
            if (barberaAudio) barberaAudio.currentTime = 0;

            setActiveId(id);
            setIsPlaying(true);

            // Small timeout to allow state/DOM to settle if needed, but usually immediate is fine. 
            // Playing strictly the one we want.
            setTimeout(() => {
                if (id === 'standard') standardAudio?.play();
                else barberaAudio?.play();
            }, 0);
        }
    };

    return (
        <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Hear the Difference</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the clarity, warmth, and dynamic response that sets Barbera pickups apart from standard transducers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <AudioCard
                        label="Standard Pickup"
                        description="Typical piezo sound. Often thin, compressed, and lacking natural resonance."
                        color="gray-400"
                        isActive={activeId === 'standard'}
                        isPlaying={isPlaying}
                        onToggle={() => handleToggle('standard')}
                    />
                    <AudioCard
                        label="Barbera Transducer"
                        description="Rich, full-spectrum sound. Captures the true acoustic character of the instrument."
                        color="yellow-500"
                        isActive={activeId === 'barbera'}
                        isPlaying={isPlaying}
                        onToggle={() => handleToggle('barbera')}
                    />
                </div>

                {/* Hidden Audio Elements - Controlled Programmatically */}
                <audio
                    ref={audioStandardRef}
                    src={MP3_URL}
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => { if (activeId === 'standard') setIsPlaying(false); }}
                    onPlay={() => { if (activeId === 'standard') setIsPlaying(true); }}
                />
                <audio
                    ref={audioBarberaRef}
                    src={MP3_URL}
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => { if (activeId === 'barbera') setIsPlaying(false); }}
                    onPlay={() => { if (activeId === 'barbera') setIsPlaying(true); }}
                />
            </div>
        </section>
    );
};

export default HearTheDifference;
