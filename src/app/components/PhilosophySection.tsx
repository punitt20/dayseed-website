import { FadeIn } from './FadeIn';
import { ScreenshotPhone, settingsBottomImg } from './ScreenshotPhone';

export function PhilosophySection() {
  return (
    <section id="philosophy" style={{ backgroundColor: '#FAF7F2', padding: '140px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: '10%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,71,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
          className="philosophy-grid"
        >
          <FadeIn direction="left">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: '#8FA67A',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>Philosophy</p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 700,
              color: '#1C1C1A',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: 0,
            }}>
              Small Plans.<br />
              <span style={{ fontStyle: 'italic', color: '#4A7C35' }}>Better Days.</span>
            </h2>

            <div style={{ marginTop: 40, paddingLeft: 24, borderLeft: '2px solid rgba(74,124,53,0.25)' }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                fontWeight: 300,
                color: '#1C1C1A',
                opacity: 0.65,
                lineHeight: 1.75,
                marginBottom: 16,
              }}>
                DaySeed isn't about doing everything.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 17,
                fontWeight: 300,
                color: '#1C1C1A',
                opacity: 0.65,
                lineHeight: 1.75,
              }}>
                It's about deciding what matters before tomorrow begins.
              </p>
            </div>

            <div style={{
              marginTop: 56,
              padding: '32px 36px',
              backgroundColor: '#F0F4EC',
              borderRadius: 20,
              border: '1px solid rgba(74,124,53,0.12)',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(18px, 2.2vw, 26px)',
                fontWeight: 500,
                color: '#2D5016',
                lineHeight: 1.4,
                marginBottom: 0,
                fontStyle: 'italic',
              }}>
                "One seed every night.<br />
                One better tomorrow."
              </p>
            </div>
          </FadeIn>

          {/* Real screenshot showing "Simple. Offline. Intentional." */}
          <FadeIn direction="right" delay={0.15} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212,168,71,0.18) 0%, transparent 70%)',
            }} />

            {/* Floating pill — "Simple. Offline. Intentional." */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: -20,
              zIndex: 10,
              backgroundColor: '#2D5016',
              borderRadius: 100,
              padding: '10px 20px',
              boxShadow: '0 8px 24px rgba(45,80,22,0.3)',
            }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                Simple. Offline. Intentional.
              </span>
            </div>

            {/* Floating popup — version */}
            <div style={{
              position: 'absolute',
              bottom: '8%',
              right: -24,
              zIndex: 10,
              backgroundColor: 'white',
              borderRadius: 14,
              padding: '12px 16px',
              boxShadow: '0 8px 24px rgba(28,28,26,0.1)',
              border: '1px solid rgba(28,28,26,0.06)',
            }}>
              <div style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", color: '#8FA67A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Version</div>
              <div style={{ fontSize: 13, fontFamily: "'Playfair Display', serif", color: '#1C1C1A', marginTop: 3, fontWeight: 600 }}>DaySeed 1.0</div>
              <div style={{ fontSize: 10, color: 'rgba(28,28,26,0.4)', marginTop: 4 }}>Plant Today. Grow Tomorrow.</div>
            </div>

            <ScreenshotPhone src={settingsBottomImg} size="md" style={{ position: 'relative', zIndex: 1 }} />
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
