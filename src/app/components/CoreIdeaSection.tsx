import { FadeIn } from './FadeIn';

const journey = [
  { Icon: NightIcon, label: 'Night', sub: 'The day ends' },
  { Icon: SeedIcon, label: 'Seed', sub: 'You plant tomorrow', highlight: true },
  { Icon: SunriseIcon, label: 'Sunrise', sub: 'A new beginning' },
  { Icon: SproutIcon, label: 'Sprout', sub: 'Clarity emerges', highlight: true },
  { Icon: DayIcon, label: 'Day', sub: 'You focus' },
  { Icon: PlantIcon, label: 'Growth', sub: 'Better days', highlight: true },
];

export function CoreIdeaSection() {
  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn style={{ textAlign: 'center', marginBottom: 80 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 0,
          }}>
            Tomorrow starts <span style={{ fontStyle: 'italic', color: '#4A7C35' }}>tonight.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            fontWeight: 300,
            color: '#1C1C1A',
            opacity: 0.6,
            lineHeight: 1.7,
            marginTop: 24,
            maxWidth: 520,
            margin: '24px auto 0',
          }}>
            DaySeed gives you a quiet moment every evening to decide what matters before tomorrow begins.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 16,
            justifyItems: 'center',
          }}
            className="journey-grid"
          >
            {journey.map((step, i) => {
              const { Icon: StepIcon } = step;
              return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: step.highlight ? 'rgba(74,124,53,0.12)' : 'rgba(28,28,26,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: step.highlight ? '1.5px solid rgba(74,124,53,0.2)' : '1.5px solid rgba(28,28,26,0.08)',
                }}>
                  <StepIcon />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: step.highlight ? '#2D5016' : '#1C1C1A',
                  }}>{step.label}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: '#1C1C1A',
                    opacity: 0.45,
                    marginTop: 2,
                    letterSpacing: '-0.01em',
                  }}>{step.sub}</div>
                </div>
              </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} style={{
          textAlign: 'center',
          marginTop: 96,
          borderTop: '1px solid rgba(28,28,26,0.08)',
          paddingTop: 64,
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#1C1C1A',
            opacity: 0.5,
            lineHeight: 1.6,
            maxWidth: 600,
            margin: '0 auto',
          }}>
            "The secret of getting ahead is getting started the night before."
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function NightIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M26 19A10 10 0 0 1 16 9a10 10 0 0 0 10 20 10 10 0 0 1 0-10z" fill="#1A2744" opacity="0.8"/>
      <circle cx="27" cy="8" r="1.5" fill="#D4A847" opacity="0.7"/>
      <circle cx="22" cy="5" r="1" fill="#D4A847" opacity="0.5"/>
      <circle cx="30" cy="13" r="1" fill="#D4A847" opacity="0.5"/>
    </svg>
  );
}

function SeedIcon() {
  return (
    <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
      <path d="M14 2 C22 2 27 9 27 19 C27 29 21.5 36 14 36 C6.5 36 1 29 1 19 C1 9 6 2 14 2Z" fill="#8B5E3C"/>
      <path d="M14 4 C20 4 25 10 25 19 C25 28 20 34 14 34 C8 34 3 28 3 19 C3 10 8 4 14 4Z" fill="#9B6B47" opacity="0.4"/>
      <path d="M14 2 L14 36" stroke="#6B4428" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 3"/>
      <path d="M10 9 C12 6.5 17 6.5 19 9" stroke="#C4885A" strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  );
}

function SunriseIcon() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <path d="M5 30 Q20 12 35 30Z" fill="#FAB56A" opacity="0.15"/>
      <circle cx="20" cy="24" r="8" fill="#E8845A" opacity="0.8"/>
      <path d="M20 14 L20 10" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28.8 16.2 L31.6 13.4" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11.2 16.2 L8.4 13.4" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 30 L36 30" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
      <path d="M10 38 Q18 32 26 38 L28 40 Q18 38 8 40 Z" fill="#8B5E3C" opacity="0.4"/>
      <ellipse cx="18" cy="36" rx="6" ry="4" fill="#8B5E3C" opacity="0.6"/>
      <path d="M18 32 C18 26 17 20 18.5 14 C19 12 18 8 18 6" stroke="#4A7C35" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M18 18 C14 15 9 12 8 7 C7 4 11 2 14 5 C16 7 17.5 13 18 18Z" fill="#4A7C35"/>
      <path d="M18 18 C22 15 27 12 28 7 C29 4 25 2 22 5 C20 7 18.5 13 18 18Z" fill="#4A7C35"/>
    </svg>
  );
}

function DayIcon() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <circle cx="20" cy="18" r="10" fill="#D4A847" opacity="0.9"/>
      <path d="M20 4 L20 8" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 28 L20 32" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 18 L10 18" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 18 L34 18" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.1 7.1 L13 10" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M29.9 7.1 L27 10" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10.1 28.9 L13 26" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
      <path d="M29.9 28.9 L27 26" stroke="#D4A847" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PlantIcon() {
  return (
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
      <path d="M18 42 C18 36 17 28 18 20 C18.5 16 17.5 10 18 6" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M18 28 C13 25 7 20 6 13 C5 8 9 5 13 8 C16 10 17 18 18 26 C18 27 18 28 18 28Z" fill="#4A7C35"/>
      <path d="M18 22 C23 19 29 14 30 7 C31 2 27 -1 23 2 C20 4 19 12 18 20 C18 21 18 22 18 22Z" fill="#3D6E2A"/>
      <ellipse cx="18" cy="43" rx="6" ry="2" fill="#8B5E3C" opacity="0.3"/>
    </svg>
  );
}
