import { Link } from 'react-router';
import logoImg from '../../imports/favicon.png';

// Replace with your actual Google Play Store URL
const GOOGLE_PLAY_URL = 'https://play.google.com/store';

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Support', to: '/support' },
];

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1C1C1A',
      padding: '72px 32px 40px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 48,
          marginBottom: 64,
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, textDecoration: 'none' }}
            >
              <img
                src={logoImg}
                alt="DaySeed logo"
                style={{
                  width: 32,
                  height: 32,
                  objectFit: 'contain',
                  borderRadius: 8,
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  padding: 2,
                }}
              />
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: 20,
                color: 'white',
                letterSpacing: '-0.02em',
              }}>DaySeed</span>
            </Link>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.6,
              maxWidth: 240,
              marginTop: 0,
            }}>
              Plant Today. Grow Tomorrow.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.3)',
              lineHeight: 1.6,
              maxWidth: 260,
              marginTop: 16,
            }}>
              A quiet evening ritual for people who want to wake up with clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>Legal & Support</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {legalLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── BETA PERIOD: Play Store badge temporarily hidden ──
                Restore when DaySeed is publicly available on Google Play.
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                padding: '8px 14px',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.14)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
            >
              <svg width="14" height="16" viewBox="0 0 18 20" fill="none">
                <path d="M1 1.5L10 10L1 18.5C0.6 18.1 0.4 17.6 0.4 17V3C0.4 2.4 0.6 1.9 1 1.5Z" fill="white" opacity="0.8"/>
                <path d="M1 1.5L10 10L13 7L3 1C2.3 0.6 1.6 0.8 1 1.5Z" fill="#4FC3F7" opacity="0.8"/>
                <path d="M10 10L1 18.5C1.6 19.2 2.3 19.4 3 19L13 13L10 10Z" fill="#F06292" opacity="0.8"/>
                <path d="M17 10C17 9.3 16.6 8.7 16 8.4L13 7L10 10L13 13L16 11.6C16.6 11.3 17 10.7 17 10Z" fill="#FFD54F" opacity="0.8"/>
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>Google Play</span>
            </a>
            ── END BETA PERIOD COMMENT ── */}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}>
            © 2026 DaySeed. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 12,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}>
            Plant Today. Grow Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
