import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { BetaModal } from './BetaModal';

const benefits = [
  'Get early access to DaySeed.',
  'Explore the app before the public release.',
  'Test the core features and notification experience.',
  'Report bugs or unexpected behavior.',
  'Share suggestions and feedback.',
  'Help improve DaySeed for its official launch.',
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="7" cy="7" r="7" fill="rgba(74,124,53,0.15)" />
      <path d="M4 7l2 2 4-4" stroke="#4A7C35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SeedlingIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M8 17V9" stroke="#2D5016" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 13 C6 12 3 9 3 6 C3 3.5 5 2 7.5 2.5 C7.7 2.55 8 2.8 8 2.8 C8 2.8 8.3 2.55 8.5 2.5 C11 2 13 3.5 13 6 C13 9 10 12 8 13Z" fill="#4A7C35" />
    </svg>
  );
}

export function BetaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="beta"
        style={{ backgroundColor: '#F0F4EC', padding: '120px 32px', position: 'relative', overflow: 'hidden' }}
      >
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,124,53,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: '8%',
          opacity: 0.05,
          pointerEvents: 'none',
        }}>
          <LeafDecor />
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* Header */}
          <FadeIn style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              backgroundColor: 'rgba(74,124,53,0.12)',
              borderRadius: 100,
              padding: '6px 14px 6px 10px',
              marginBottom: 28,
            }}>
              <SeedlingIcon />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: '#2D5016',
                letterSpacing: '0.02em',
              }}>Closed Beta · Early Access</span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 700,
              color: '#1C1C1A',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 0,
            }}>
              Join the DaySeed Beta.
            </h2>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 700,
              color: '#4A7C35',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              fontStyle: 'italic',
              marginBottom: 0,
            }}>
              Be first.
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              fontWeight: 300,
              color: '#1C1C1A',
              opacity: 0.65,
              lineHeight: 1.7,
              marginTop: 24,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Be one of the first to experience DaySeed. Join our early testing program,
              explore the app before its public release, and help shape its future.
            </p>
          </FadeIn>

          {/* Benefits card */}
          <FadeIn delay={0.1}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: 24,
              padding: '40px 48px',
              boxShadow: '0 4px 32px rgba(28,28,26,0.06)',
              border: '1px solid rgba(74,124,53,0.1)',
              marginBottom: 48,
            }}
              className="beta-card"
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                color: '#8FA67A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>As a beta tester, you can</p>

              <div className="beta-benefits-grid">
                {benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <CheckIcon />
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 300,
                      color: '#1C1C1A',
                      lineHeight: 1.55,
                    }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.15} style={{ textAlign: 'center' }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#2D5016',
                padding: '16px 40px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(45,80,22,0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(45,80,22,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(45,80,22,0.3)';
              }}
            >
              Join the Beta
            </button>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: 'rgba(28,28,26,0.4)',
              marginTop: 14,
              letterSpacing: '-0.01em',
            }}>
              Free to join · Android only · Limited spots
            </p>
          </FadeIn>
        </div>
      </section>

      {modalOpen && <BetaModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

function LeafDecor() {
  return (
    <svg width="280" height="360" viewBox="0 0 280 360" fill="none">
      <path d="M140 350 C138 320 135 290 140 260 C144 235 138 210 140 180 C142 155 138 125 140 100 C142 75 138 50 140 25" stroke="#4A7C35" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M140 260 C115 245 85 225 75 200 C67 180 77 165 93 172 C113 180 132 210 139 248 C140 254 140 258 140 260Z" fill="#4A7C35" />
      <path d="M140 235 C165 220 195 200 205 175 C213 155 203 140 187 148 C168 156 149 184 141 222 C140 228 140 232 140 235Z" fill="#3D6E2A" />
      <path d="M140 185 C117 168 90 148 84 122 C78 102 90 88 106 96 C124 104 136 136 139 172 C140 178 140 183 140 185Z" fill="#3D6E2A" />
      <path d="M140 155 C162 136 188 108 190 80 C192 58 178 50 166 58 C153 68 144 98 141 140 C140 147 140 151 140 155Z" fill="#4A7C35" />
    </svg>
  );
}
