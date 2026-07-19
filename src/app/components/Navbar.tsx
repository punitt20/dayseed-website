import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logoImg from '../../imports/favicon.png';

// Replace with your actual Google Play Store URL
const GOOGLE_PLAY_URL = 'https://play.google.com/store';

const links: { label: string; href: string; isBeta?: boolean }[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join Beta', href: '#beta', isBeta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById('__ds_root__');
    if (!container) return;
    const handleScroll = () => setScrolled(container.scrollTop > 20);
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-cta-desktop { display: block; }
        .nav-hamburger { display: none; }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none; }
          .nav-cta-desktop { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(28,28,26,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
          >
            <img src={logoImg} alt="DaySeed logo" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 8 }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: 20,
              color: '#1C1C1A',
              letterSpacing: '-0.02em',
            }}>DaySeed</span>
          </Link>

          {/* Desktop nav links — hidden on mobile */}
          <div className="nav-desktop-links" style={{ alignItems: 'center', gap: 24, flexWrap: 'nowrap' }}>
            {links.map(link => (
              link.isBeta ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#2D5016',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    backgroundColor: 'rgba(74,124,53,0.1)',
                    borderRadius: 100,
                    padding: '5px 12px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(74,124,53,0.18)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(74,124,53,0.1)'; }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#1C1C1A',
                    textDecoration: 'none',
                    opacity: 0.7,
                    transition: 'opacity 0.2s',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* ── BETA PERIOD: "Get DaySeed" navbar CTA temporarily hidden ──
                Restore when DaySeed is publicly available on Google Play.
            <div className="nav-cta-desktop">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'white',
                  backgroundColor: '#2D5016',
                  padding: '9px 20px',
                  borderRadius: 100,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'background-color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016'; }}
              >
                Get DaySeed
              </a>
            </div>
            ── END BETA PERIOD COMMENT ── */}

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(!open)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#1C1C1A',
                padding: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div style={{
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        backgroundColor: '#FAF7F2',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 32px',
        gap: 32,
      }}>
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              fontWeight: 500,
              color: '#1C1C1A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(28,28,26,0.08)',
              paddingBottom: 24,
            }}
          >
            {link.label}
          </a>
        ))}
        {/* ── BETA PERIOD: mobile "Get DaySeed" button temporarily hidden ──
            Restore when DaySeed is publicly available on Google Play.
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: 'white',
            backgroundColor: '#2D5016',
            padding: '14px 24px',
            borderRadius: 100,
            textDecoration: 'none',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          Get DaySeed
        </a>
        ── END BETA PERIOD COMMENT ── */}
      </div>
    </>
  );
}
