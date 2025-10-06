import React from 'react';

export default function Slide({ slide, slides = [], onSelectSlide }) {
    // slide: { id, title, background, content } - content can be JSX or string
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuToggle = () => setMenuOpen((open) => !open);

    const handleSlideSelect = (id) => {
        // delegate to parent if provided (keeps App in control of index)
        if (typeof onSelectSlide === 'function') onSelectSlide(id);
        setMenuOpen(false);
    };

    return (
        <section
            id={slide.id}
            className="slide"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url(${slide.background})`,
            }}
            aria-label={slide.title}
        >
            <div className="slide-topbar">
                <button
                    className="hamburger"
                    onClick={handleMenuToggle}
                    aria-expanded={menuOpen}
                    aria-controls="slide-menu"
                    title="Open slide menu"
                >
                    ☰
                </button>

                {/* <div className="slide-title">{slide.title}</div> */}

                <div style={{ width: 44 }} />
            </div>

            {menuOpen && (
                <nav id="slide-menu" className="slide-menu" aria-label="Slides list">
                    <ul>
                        {slides.map((s, idx) => (
                            <li key={s.id}>
                                <button className="slide-menu-item" onClick={() => handleSlideSelect(idx)}>
                                    {/* <span className="slide-menu-index">{idx + 1}</span> */}
                                    <span className="slide-menu-title">{s.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <div className="slide-center">
                {typeof slide.content === 'string' ? (
                    <div className="slide-content" dangerouslySetInnerHTML={{ __html: slide.content }} />
                ) : (
                    <div className="slide-content">{slide.content}</div>
                )}
            </div>
        </section>
    );
}
