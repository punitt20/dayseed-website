import { FadeIn } from './FadeIn';
import { daySeedPlanningImg, todayWithTasksImg, settingsStreakImg } from './ScreenshotPhone';

const steps = [
  {
    number: '01',
    title: 'Plant Tonight',
    description: 'Choose tomorrow\'s priorities before the day begins. A two-minute evening ritual that sets the tone for everything that follows.',
    time: 'Evening',
    timeColor: '#1A2744',
    bgColor: 'rgba(26,39,68,0.04)',
    accentColor: '#1A2744',
    img: daySeedPlanningImg,
    imgAlt: 'DaySeed planning — Must Do, Should Do, Could Do',
  },
  {
    number: '02',
    title: 'Wake With Clarity',
    description: 'Your priorities are already waiting when you wake up. No decisions to make. No fog. Just clarity from the moment you open your eyes.',
    time: 'Morning',
    timeColor: '#E8845A',
    bgColor: 'rgba(232,132,90,0.05)',
    accentColor: '#E8845A',
    img: todayWithTasksImg,
    imgAlt: 'DaySeed today screen with task list',
  },
  {
    number: '03',
    title: 'Grow Every Day',
    description: 'Follow through on small plans and build better days, one seed at a time. Consistency compounds into meaningful growth.',
    time: 'Daytime',
    timeColor: '#4A7C35',
    bgColor: 'rgba(74,124,53,0.05)',
    accentColor: '#4A7C35',
    img: settingsStreakImg,
    imgAlt: 'DaySeed streak and preferences',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#FAF7F2', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn style={{ marginBottom: 80 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: '#8FA67A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>How it works</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 700,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 0,
            maxWidth: 520,
          }}>
            A small ritual for<br />
            <span style={{ fontStyle: 'italic' }}>better days.</span>
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {steps.map((step, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 60,
                    alignItems: 'center',
                    padding: '56px 48px',
                    borderRadius: 24,
                    backgroundColor: step.bgColor,
                    border: '1px solid',
                    borderColor: `${step.accentColor}18`,
                  }}
                  className="how-step"
                >
                  {/* Text side */}
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: step.accentColor,
                        opacity: 0.5,
                        letterSpacing: '0.05em',
                      }}>{step.number}</span>
                      <span style={{ width: 24, height: 1, backgroundColor: step.accentColor, opacity: 0.25, display: 'block' }} />
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        color: step.timeColor,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        opacity: 0.7,
                      }}>{step.time}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(26px, 3vw, 40px)',
                      fontWeight: 600,
                      color: '#1C1C1A',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      marginBottom: 0,
                    }}>{step.title}</h3>

                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 300,
                      color: '#1C1C1A',
                      opacity: 0.6,
                      lineHeight: 1.7,
                      marginTop: 16,
                      maxWidth: 380,
                    }}>{step.description}</p>
                  </div>

                  {/* Screenshot phone side */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    order: i % 2 === 0 ? 1 : 0,
                    minHeight: 260,
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      width: 220,
                      height: 220,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${step.accentColor}14 0%, transparent 70%)`,
                    }} />
                    <div style={{
                      width: 148,
                      height: 320,
                      background: 'linear-gradient(145deg, #2A2A28 0%, #1C1C1A 50%, #141412 100%)',
                      borderRadius: 28,
                      padding: 7,
                      boxShadow: '0 28px 56px rgba(0,0,0,0.32), 0 8px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)',
                      position: 'relative',
                      zIndex: 1,
                      flexShrink: 0,
                    }}>
                      <div style={{ position: 'absolute', right: -2, top: '28%', width: 2, height: 40, backgroundColor: '#2A2A28', borderRadius: '0 2px 2px 0' }} />
                      <div style={{ position: 'absolute', left: -2, top: '20%', width: 2, height: 28, backgroundColor: '#2A2A28', borderRadius: '2px 0 0 2px' }} />
                      <div style={{ position: 'absolute', left: -2, top: '33%', width: 2, height: 28, backgroundColor: '#2A2A28', borderRadius: '2px 0 0 2px' }} />
                      <div style={{ width: '100%', height: '100%', borderRadius: 22, overflow: 'hidden' }}>
                        <img
                          src={step.img}
                          alt={step.imgAlt}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {i < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0' }}>
                  <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
                    <path d="M1 0 L1 32" stroke="#1C1C1A" strokeWidth="1.5" strokeOpacity="0.1" strokeDasharray="4 3"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
