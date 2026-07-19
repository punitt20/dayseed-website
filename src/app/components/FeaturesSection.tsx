import { FadeIn } from './FadeIn';

const features = [
  {
    Icon: PlanIcon,
    title: 'Plan Tomorrow',
    description: 'Decide tomorrow\'s priorities in advance. Choose what matters before the day has a chance to choose for you.',
    accent: '#4A7C35',
  },
  {
    Icon: ClarityIcon,
    title: 'Morning Clarity',
    description: 'Start the day knowing what matters. Your priorities are waiting — no decisions required before coffee.',
    accent: '#E8845A',
  },
  {
    Icon: ReminderIcon,
    title: 'Gentle Reminders',
    description: 'Get reminded to plan in the evening and review in the morning. Subtle nudges that respect your rhythm.',
    accent: '#1A2744',
  },
  {
    Icon: CalendarIcon,
    title: 'Calendar Planning',
    description: 'See and organize tasks by date. Build a clear picture of the week ahead, one seed at a time.',
    accent: '#D4A847',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" style={{ backgroundColor: '#FAF7F2', padding: '120px 32px' }}>
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
          }}>Features</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 700,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 0,
            maxWidth: 500,
          }}>
            Everything you need.<br />
            <span style={{ fontStyle: 'italic', opacity: 0.45 }}>Nothing you don't.</span>
          </h2>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="features-grid">
          {/* Feature 1 - large, spans 2 rows */}
          <FadeIn style={{
            gridRow: 'span 2',
            backgroundColor: '#F0F4EC',
            borderRadius: 24,
            padding: '56px 48px',
            border: '1px solid rgba(74,124,53,0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 360,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div>
              <div style={{ marginBottom: 32 }}><FeatIcon f={features[0]} /></div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 2.8vw, 36px)',
                fontWeight: 600,
                color: '#1C1C1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 0,
              }}>{features[0].title}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 300,
                color: '#1C1C1A',
                opacity: 0.6,
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 320,
              }}>{features[0].description}</p>
            </div>
            <div style={{ position: 'absolute', bottom: 24, right: 32, opacity: 0.12 }}>
              <LargePlantDecor />
            </div>
          </FadeIn>

          {/* Feature 2 */}
          <FadeIn delay={0.1} style={{
            backgroundColor: '#FDF5EE',
            borderRadius: 24,
            padding: '40px 40px',
            border: '1px solid rgba(232,132,90,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <div><FeatIcon f={features[1]} /></div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(20px, 2.2vw, 28px)',
              fontWeight: 600,
              color: '#1C1C1A',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: 0,
            }}>{features[1].title}</h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: '#1C1C1A',
              opacity: 0.6,
              lineHeight: 1.7,
              margin: 0,
            }}>{features[1].description}</p>
          </FadeIn>

          {/* Features 3 & 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="feature-inner-grid">
            {features.slice(2).map((feature, i) => (
              <FadeIn key={i} delay={(i + 2) * 0.1} style={{
                backgroundColor: i === 0 ? '#EEF2F8' : '#FDFAF0',
                borderRadius: 24,
                padding: '32px 28px',
                border: `1px solid ${i === 0 ? 'rgba(26,39,68,0.08)' : 'rgba(212,168,71,0.12)'}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <div><FeatIcon f={feature} /></div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                  fontWeight: 600,
                  color: '#1C1C1A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  marginBottom: 0,
                }}>{feature.title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  color: '#1C1C1A',
                  opacity: 0.55,
                  lineHeight: 1.65,
                  margin: 0,
                }}>{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .features-grid > div:first-child {
            grid-row: auto !important;
          }
          .feature-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function FeatIcon({ f }: { f: typeof features[0] }) {
  const { Icon } = f;
  return <Icon />;
}

function PlanIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill="rgba(74,124,53,0.12)"/>
      <path d="M20 10 C26 10 30 15 30 22 C30 29 25.5 32.5 20 32.5 C14.5 32.5 10 29 10 22 C10 15 14 10 20 10Z" stroke="#4A7C35" strokeWidth="1.5" fill="rgba(74,124,53,0.2)"/>
      <path d="M20 10 L20 32.5" stroke="#2D5016" strokeWidth="0.8" opacity="0.4"/>
      <path d="M16 15 C17.5 13 22.5 13 24 15" stroke="#4A7C35" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

function ClarityIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill="rgba(232,132,90,0.12)"/>
      <circle cx="20" cy="20" r="7" fill="#E8845A" opacity="0.5"/>
      <circle cx="20" cy="20" r="4" fill="#E8845A"/>
      <line x1="20" y1="7" x2="20" y2="10" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="20" y1="30" x2="20" y2="33" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="7" y1="20" x2="10" y2="20" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="30" y1="20" x2="33" y2="20" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="10.5" y1="10.5" x2="12.6" y2="12.6" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="27.4" y1="27.4" x2="29.5" y2="29.5" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="27.4" y1="12.6" x2="29.5" y2="10.5" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="10.5" y1="29.5" x2="12.6" y2="27.4" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

function ReminderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill="rgba(26,39,68,0.08)"/>
      <path d="M20 9 C14 9 10 13.5 10 19.5 L10 26 L8 28 L32 28 L30 26 L30 19.5 C30 13.5 26 9 20 9Z" stroke="#1A2744" strokeWidth="1.5" fill="rgba(26,39,68,0.12)"/>
      <path d="M17 28 C17 29.7 18.3 31 20 31 C21.7 31 23 29.7 23 28" stroke="#1A2744" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="9" r="2" fill="#1A2744" opacity="0.5"/>
      <circle cx="27" cy="12" r="4" fill="#E8845A"/>
      <path d="M27 10 L27 13 L29 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill="rgba(212,168,71,0.12)"/>
      <rect x="9" y="12" width="22" height="19" rx="4" stroke="#D4A847" strokeWidth="1.5" fill="none"/>
      <rect x="9" y="12" width="22" height="7" rx="3.5" fill="#D4A847" opacity="0.3"/>
      <path d="M15 10 L15 14" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M25 10 L25 14" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="13" cy="24" r="1.5" fill="#D4A847" opacity="0.4"/>
      <circle cx="20" cy="24" r="1.5" fill="#D4A847"/>
      <circle cx="27" cy="24" r="1.5" fill="#D4A847" opacity="0.4"/>
      <circle cx="13" cy="28" r="1.5" fill="#D4A847" opacity="0.4"/>
      <circle cx="20" cy="28" r="1.5" fill="#D4A847" opacity="0.4"/>
    </svg>
  );
}

function LargePlantDecor() {
  return (
    <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
      <path d="M60 155 C59 135 57 115 60 95 C62 80 59 65 60 50 C61 37 59 24 60 12" stroke="#4A7C35" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M60 110 C48 100 34 88 30 72 C27 60 33 52 42 56 C52 60 57 80 59 100 C60 105 60 110 60 110Z" fill="#4A7C35"/>
      <path d="M60 95 C72 85 86 73 90 57 C93 45 87 37 78 41 C68 45 63 65 61 85 C60 90 60 95 60 95Z" fill="#4A7C35"/>
      <path d="M60 70 C50 60 38 46 36 30 C34 18 40 12 50 17 C58 21 58 42 59 62 C60 66 60 70 60 70Z" fill="#3D6E2A"/>
      <path d="M60 55 C70 44 82 30 82 16 C82 6 74 2 66 8 C59 14 60 34 60 50 C60 53 60 55 60 55Z" fill="#3D6E2A"/>
    </svg>
  );
}
