import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts/caveat/stylesheet.css';
import './index.css';
import App from './components/App.tsx';
import i18nInitPromise from './translations/i18n.ts';
import { preloadAllResources } from './preloadResources.ts';
import Snow from './components/winter_effect/snow/Snow.tsx';
import Garland from './components/winter_effect/garland/Garland.tsx';

const preloader = document.getElementById('preloader');
const effectsContainer = document.createElement('div');
effectsContainer.id = 'effects-container';
document.body.appendChild(effectsContainer);

async function initializeApp(): Promise<void> {
    try {
        createRoot(effectsContainer).render(
            <StrictMode>
                <Snow />
                <Garland />
            </StrictMode>
        );

        await i18nInitPromise;
        
        await preloadAllResources();

        if (preloader) {
            preloader.classList.add('preloader');
        }
        
        const rootElement = document.getElementById('root');
        if (rootElement) {
            createRoot(rootElement).render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        }
        
    } catch (error) {
        console.error('Ошибка при инициализации:', error);
        const rootElement = document.getElementById('root');
        if (rootElement) {
            createRoot(rootElement).render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        }
        document.body.classList.add('loaded');
        if (preloader) {
            preloader.classList.add('preloader');
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}



