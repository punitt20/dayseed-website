import { useState, useEffect } from 'react';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById('__ds_root__');
    if (!container) return;

    const onScroll = () => setVisible(container.scrollTop > 320);
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById('__ds_root__');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 150,
        width: 44,
        height: 44,
        borderRadius: '50%',
        backgroundColor: '#2D5016',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(45,80,22,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease, background-color 0.2s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016'; }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
