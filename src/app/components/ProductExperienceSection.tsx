import { ScreenshotPhone, notificationsImg } from './ScreenshotPhone';
import { FadeIn } from './FadeIn';

const benefits = [
  { icon: '🌱', title: 'Planted the night before', description: 'Your tomorrow is prepared before it even starts.' },
  { icon: '☀️', title: 'Ready when you wake', description: 'Open DaySeed and your day is already organized.' },
  { icon: '✓', title: 'No morning decisions', description: 'Save your energy for what actually matters.' },
];

export function ProductExperienceSection() {
  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '120px 32px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
          className="product-grid"
        >
          <FadeIn direction="left" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,132,90,0.12) 0%, transparent 65%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }} />

            {/* Floating popup — morning reminder */}
            <div style={{
              position: 'absolute',
              top: '8%',
              right: -16,
              zIndex: 10,
              backgroundColor: '#1A2744',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 12px 32px rgba(26,39,68,0.35)',
              width: 152,
            }}>
              <div style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Morning</div>
              <div style={{ fontSize: 12, fontFamily: "'Inter', sans-serif", color: 'white', marginTop: 4, lineHeight: 1.4 }}>Review today's plan</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 5 }}>7:00 AM reminder</div>
            </div>

            {/* Floating popup — evening */}
            <div style={{
              position: 'absolute',
              bottom: '10%',
              left: -8,
              zIndex: 10,
              backgroundColor: 'white',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 12px 32px rgba(28,28,26,0.12)',
              border: '1px solid rgba(28,28,26,0.05)',
              width: 152,
            }}>
              <div style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", color: '#8FA67A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Evening</div>
              <div style={{ fontSize: 12, fontFamily: "'Playfair Display', serif", color: '#1C1C1A', marginTop: 4, lineHeight: 1.4 }}>Plan tomorrow's seed</div>
              <div style={{ fontSize: 10, color: 'rgba(28,28,26,0.4)', marginTop: 5 }}>9:30 PM reminder</div>
            </div>

            <ScreenshotPhone src={notificationsImg} size="lg" />
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: '#E8845A',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>Morning experience</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#1C1C1A',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 0,
            }}>
              Wake up knowing<br />
              <span style={{ fontStyle: 'italic', color: '#E8845A' }}>what matters.</span>
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 300,
              color: '#1C1C1A',
              opacity: 0.6,
              lineHeight: 1.7,
              marginTop: 20,
              maxWidth: 380,
            }}>
              Tomorrow's priorities were already planned the night before.
              Open DaySeed in the morning and your day is ready — no mental fog required.
            </p>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
              {benefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: 'rgba(232,132,90,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 16,
                  }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#1C1C1A',
                      letterSpacing: '-0.01em',
                    }}>{benefit.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 300,
                      color: '#1C1C1A',
                      opacity: 0.55,
                      lineHeight: 1.6,
                      marginTop: 2,
                    }}>{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
