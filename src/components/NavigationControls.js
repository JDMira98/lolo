
export default function NavigationControls({ onPrev, onNext, onHome, index = 0, total = 1 }) {
    return (
        <footer className="nav-controls" role="navigation" aria-label="Slide navigation">
            <div className="nav-left">
                <button className="nav-ghost" onClick={onPrev} aria-label="Previous slide">
                    ‹
                </button>
            </div>

            <div className="nav-center">
                <button
                    className="nav-home"
                    onClick={onHome}
                    aria-label="Go to first slide"
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s',
                        cursor: 'pointer',
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = '#f0f0f0')}
                    onMouseOut={e => (e.currentTarget.style.background = 'none')}
                >
                    {/* Home SVG Icon */}
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M3 12L12 4l9 8" />
                        <path d="M9 21V12h6v9" />
                    </svg>
                </button>
                <div className="nav-indicator" aria-hidden>
                    <span className="nav-index">{index + 1}</span>
                    <span className="nav-total">/ {total}</span>
                </div>
            </div>

            <div className="nav-right">
                <button className="nav-ghost" onClick={onNext} aria-label="Next slide">
                    ›
                </button>
            </div>
        </footer>
    );
}

