// Prefer importing local images from `src/images` so bundler resolves them.
import Pasillo from '../images/Pasillo.png';
import Desierto from '../images/desierto.png';
import Jardi from '../images/Jardi.png';
import Texturas from '../images/texturas.png';
import React from 'react';
import YouTube360 from '../components/YouTube360';

// baseUrl: prefer a custom env var REACT_APP_BASE_URL, then PUBLIC_URL, then '/'
const baseUrl = process.env.REACT_APP_BASE_URL || process.env.PUBLIC_URL || '/';

const slides = [
    {
        id: 'slide-1',
        title: 'Introducción - Tunel',
        background: Pasillo || `${baseUrl}images/Pasillo.png`,
        content: '<div class="cta">Voice Over<br/><div class="icon">🎤</div></div>'
    },
    {
        id: 'slide-2',
        title: 'Inicio - Tunel',
        background: Texturas || `${baseUrl}images/tunnel-2.jpg`,
                youtubeId: 'qcPkmctTGLA',
                content: null
    },
    {
        id: 'slide-3',
        title: 'El pasillo',
        background: Pasillo || `${baseUrl}images/hall-1.jpg`,
        content: '<div class="doors">Decisión 1 • Decisión 2 • Decisión 3</div>'
    },
    {
        id: 'slide-4',
        title: 'Desierto',
        background: Desierto || `${baseUrl}images/desert.jpg`,
        // Prefer to use a local 360 video (public/videos/desierto360.mp4) rendered with Panorama360 if available.
        renderMode: 'auto', // 'auto' | 'iframe' | 'panorama'
        youtubeId: 'E2yPlq1WEjU',
        // if you place a 360 mp4 at public/videos/desierto360.mp4 it will be used by Panorama360 in 'panorama' mode
        videoUrl: `${baseUrl}videos/desierto360.mp4`,
        // content is null so Slide will use renderMode/videoUrl to decide what to render
        content: null
    },
    {
        id: 'slide-5',
        title: 'Jardín',
        background: Jardi || `${baseUrl}images/garden.jpg`,
        content: '<div class="cta">Vídeo clip.<br/><div class="icon">▶️</div></div>'
    },
    {
        id: 'slide-6',
        title: 'Luz al final del tunel',
        background: Texturas || `${baseUrl}images/light.jpg`,
        content: '<div class="cta">Videopodcast<br/><div class="icon">▶️</div></div>'
    },
    {
        id: 'slide-7',
        title: 'Detrás de cámaras',
        background: Texturas || `${baseUrl}images/behind.jpg`,
        content: '<div class="cta">Detrás de cámaras<br/><div class="icon">▶️</div></div>'
    }
];

export default slides;
