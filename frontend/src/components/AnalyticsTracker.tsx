import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 with your Measurement ID
        // It's safe to call initialize multiple times, but usually best done once.
        // However, putting it here ensures it runs when the app starts.
        if (!window.ga4Initialized) {
            ReactGA.initialize('G-WNK3PSEM31');
            window.ga4Initialized = true;
        }

        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null;
};

// Add a type declaration for the window object to avoid TS errors
declare global {
    interface Window {
        ga4Initialized?: boolean;
    }
}

export default AnalyticsTracker;
