import React from 'react';
import Panorama360 from './Panorama360';

export default function YouTube360({ videoId, className = '', mode = 'iframe', videoUrl }) {
  // Add playsinline and enablejsapi; include gyroscope and accelerometer in allow for device orientation
  const params = new URLSearchParams({ autoplay: '1', rel: '0', controls: '1', enablejsapi: '1', playsinline: '1' });
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  // If mode is 'panorama' and a videoUrl is provided, use Panorama360 (requires panolens/three installed)
  if (mode === 'panorama' && videoUrl) {
    return (
      <div className={`youtube-embed-animated ${className}`} style={{ width: '100%', height: '100%' }}>
        <Panorama360 videoUrl={videoUrl} />
      </div>
    );
  }

  // Default: iframe embed (works without extra dependencies, but may not always expose full 360 controls)
  return (
    <div className={`youtube-embed-animated ${className}`} aria-hidden={false} style={{ pointerEvents: 'auto' }}>
      <iframe
        src={src}
        title="360 YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
        // inline playback attributes for iOS
        playsInline
        webkit-playsinline="true"
        style={{ border: 0, display: 'block', width: '100%', height: '100%', pointerEvents: 'auto' }}
      />
    </div>
  );
}
