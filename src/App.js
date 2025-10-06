import React, { useState } from 'react';
import './App.css';

import Slide from './components/Slide';
import NavigationControls from './components/NavigationControls';
import NavBar from './components/NavBar';
import slides from './data/slidesData';

function App() {
  const [index, setIndex] = useState(0);

  const total = slides.length;

  const goPrev = () => setIndex(i => Math.max(0, i - 1));
  const goNext = () => setIndex(i => Math.min(total - 1, i + 1));
  const goHome = () => setIndex(0);
  const selectSlide = (idx) => {
    if (typeof idx === 'number') {
      setIndex(Math.max(0, Math.min(total - 1, idx)));
    }
  };

  return (
    <div className="app-root">
      <NavBar onHome={goHome} />

      <main className="app-main">
        <Slide slide={slides[index]} slides={slides} onSelectSlide={selectSlide} />
      </main>

      <NavigationControls
        onPrev={goPrev}
        onNext={goNext}
        onHome={goHome}
        index={index}
        total={total}
      />
    </div>
  );
}

export default App;
