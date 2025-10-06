import React, { useEffect, useRef, useState } from 'react';

// Panorama360: tries to dynamically load panolens and three and render a video panorama.
// If panolens/three are not installed, we show a helpful message and return null.
export default function Panorama360({ videoUrl, posterUrl }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);
  const [loadedLibs, setLoadedLibs] = useState(false);

  useEffect(() => {
    let viewer = null;
    let pano = null;
    let videoEl = null;

    async function setup() {
      try {
        // dynamic import so the app doesn't require panolens at install time
        const THREE = (await import('three')).default || (await import('three'));
        const PANOLENS = (await import('panolens')).default || (await import('panolens'));

        setLoadedLibs(true);

        // create video element
        videoEl = document.createElement('video');
        videoEl.src = videoUrl;
        videoEl.crossOrigin = 'anonymous';
        videoEl.loop = true;
        videoEl.muted = true; // attempt autoplay
        videoEl.playsInline = true;
        videoEl.autoplay = true;

        // append hidden video to DOM (Panolens uses it)
        videoEl.style.display = 'none';
        document.body.appendChild(videoEl);

        // create viewer
        viewer = new PANOLENS.Viewer({ container: containerRef.current, output: 'console' });
        pano = new PANOLENS.VideoPanorama(videoEl);
        viewer.add(pano);

        // start play
        videoEl.play().catch(() => {
          // autoplay might be blocked until user interaction
        });
      } catch (err) {
        console.error('Panorama360: failed to load panolens/three', err);
        setError(err.message || String(err));
      }
    }

    setup();

    return () => {
      try {
        if (viewer && viewer.dispose) viewer.dispose();
        if (videoEl) {
          videoEl.pause();
          videoEl.src = '';
          if (videoEl.parentNode) videoEl.parentNode.removeChild(videoEl);
        }
      } catch (e) {
        // ignore
      }
    };
  }, [videoUrl]);

  if (error) {
    return (
      <div className="panorama-error" style={{ padding: 20, textAlign: 'center' }}>
        <div style={{ marginBottom: 8, color: '#b91c1c' }}>Panorama viewer no disponible</div>
        <div style={{ fontSize: 14, color: '#334155' }}>
          Para habilitar la vista 360 local instala las dependencias: <code>npm install panolens three</code>
        </div>
      </div>
    );
  }

  if (!loadedLibs) {
    return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando visor 360...</div>;
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
