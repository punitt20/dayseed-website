import { ScreenshotPhone, todayEmptyImg, daySeedPlanningImg, archiveCalendarImg, todayWithTasksImg } from './ScreenshotPhone';
import { FadeIn } from './FadeIn';

const screens = [
  { label: "Today's priorities", img: todayWithTasksImg, rotate: -4, offset: 40, size: 'md' as const },
  { label: 'Plant tomorrow', img: daySeedPlanningImg, rotate: 0, offset: 0, size: 'lg' as const },
  { label: 'Clean slate', img: todayEmptyImg, rotate: 4, offset: 40, size: 'md' as const },
];

export function AppShowcaseSection() {
  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '120px 32px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: '#8FA67A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>The App</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 700,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 0,
          }}>
            Simple enough to use<br />
            <span style={{ fontStyle: 'italic', color: '#4A7C35' }}>every day.</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 300,
            color: '#1C1C1A',
            opacity: 0.55,
            lineHeight: 1.7,
            marginTop: 20,
          }}>
            Designed for the moments before sleep and just after waking.
          </p>
        </FadeIn>

        {/* Phone showcase — real screenshots */}
        <FadeIn delay={0.1}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 24,
            position: 'relative',
          }}
            className="phone-showcase"
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.06,
              pointerEvents: 'none',
              zIndex: 0,
            }}>
              <LargeBotanicalDecor />
            </div>

            {screens.map((screen, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  zIndex: i === 1 ? 3 : 2,
                  marginTop: screen.offset,
                  transform: `rotate(${screen.rotate}deg)`,
                }}
              >
                <ScreenshotPhone src={screen.img} size={screen.size} />
                <div style={{
                  position: 'absolute',
                  bottom: -28,
                  left: '50%',
                  transform: `translateX(-50%) rotate(${-screen.rotate}deg)`,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: '#1C1C1A',
                  opacity: 0.45,
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.01em',
                }}>{screen.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Archive calendar row */}
        <FadeIn delay={0.15} style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 112,
          gap: 56,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: 380 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: '#8FA67A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>Also</p>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: 600,
              color: '#1C1C1A',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: 0,
            }}>Plan your week,<br />not just your day.</h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              color: '#1C1C1A',
              opacity: 0.55,
              lineHeight: 1.7,
              marginTop: 14,
            }}>
              Browse your past plans in the built-in calendar archive.
              See which days had seeds and track your consistency over time.
            </p>

            {/* Streak stat card */}
            <div style={{
              marginTop: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 20,
              backgroundColor: 'white',
              borderRadius: 16,
              padding: '14px 22px',
              boxShadow: '0 4px 20px rgba(28,28,26,0.08)',
              border: '1px solid rgba(28,28,26,0.06)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D5016', lineHeight: 1 }}>4</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#8FA67A', marginTop: 3, letterSpacing: '0.04em' }}>Day streak</div>
              </div>
              <div style={{ width: 1, height: 36, backgroundColor: 'rgba(28,28,26,0.08)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D5016', lineHeight: 1 }}>4</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#8FA67A', marginTop: 3, letterSpacing: '0.04em' }}>Best streak</div>
              </div>
            </div>
          </div>

          <ScreenshotPhone src={archiveCalendarImg} size="md" />
        </FadeIn>
      </div>

    </section>
  );
}

function LargeBotanicalDecor() {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
      <path d="M200 380 C198 340 195 300 200 260 C204 235 198 210 200 180 C202 155 198 125 200 100 C202 75 198 50 200 25" stroke="#4A7C35" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M200 270 C175 255 145 235 135 210 C127 190 135 178 148 183 C165 189 186 215 198 248 C200 256 200 266 200 270Z" fill="#4A7C35"/>
      <path d="M200 245 C225 230 255 210 265 185 C273 165 265 153 252 158 C235 164 214 190 202 223 C200 231 200 241 200 245Z" fill="#3D6E2A"/>
      <path d="M200 195 C177 178 150 158 144 132 C138 112 148 100 161 106 C176 112 192 138 199 168 C200 176 200 191 200 195Z" fill="#3D6E2A"/>
      <path d="M200 165 C220 148 242 124 244 100 C246 82 234 76 224 82 C212 90 204 114 201 145 C200 153 200 161 200 165Z" fill="#4A7C35"/>
    </svg>
  );
}
