import React from 'react';

export default function YouTube360({ videoId, className = '' }) {
  // Add playsinline and enablejsapi; include gyroscope and accelerometer in allow for device orientation
  const params = new URLSearchParams({ autoplay: '1', rel: '0', controls: '1', enablejsapi: '1', playsinline: '1' });
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

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
