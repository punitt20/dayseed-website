import { ScreenshotPhone, todayWithTasksImg } from './ScreenshotPhone';
import { FadeIn } from './FadeIn';

// Replace with your actual Google Play Store URL
const GOOGLE_PLAY_URL = 'https://play.google.com/store';

export function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: '#FAF7F2',
      paddingTop: 100,
      paddingBottom: 80,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <BackgroundDecor />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
        minHeight: 'calc(100vh - 180px)',
      }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <FadeIn direction="up" delay={0.1}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(74,124,53,0.1)',
            borderRadius: 100,
            padding: '6px 14px 6px 8px',
            marginBottom: 32,
          }}>
            <SeedIcon />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: '#2D5016',
              letterSpacing: '0.02em',
            }}>Plant Today. Grow Tomorrow.</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(44px, 6vw, 76px)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            marginBottom: 0,
          }}>
            Plant Today.<br />
            <span style={{ color: '#4A7C35', fontStyle: 'italic' }}>Grow Tomorrow.</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            fontWeight: 300,
            color: '#1C1C1A',
            opacity: 0.65,
            lineHeight: 1.65,
            marginTop: 24,
            maxWidth: 440,
          }}>
            Spend two peaceful minutes tonight deciding what matters tomorrow.
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: '#1C1C1A',
            opacity: 0.5,
            lineHeight: 1.6,
            marginTop: 12,
          }}>
            Wake up with clarity. Focus on what matters. Grow one day at a time.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap', alignItems: 'center' }}>
            {/* ── BETA PERIOD: Google Play "Get DaySeed" button temporarily hidden ──
                Restore when DaySeed is publicly available on Google Play.
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#2D5016',
                padding: '14px 28px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                transition: 'background-color 0.2s, transform 0.15s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Get DaySeed
            </a>
            ── END BETA PERIOD COMMENT ── */}

            {/* Primary CTA during closed beta — replace with "Get DaySeed" above when publicly released */}
            <a
              href="#beta"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#2D5016',
                padding: '14px 28px',
                borderRadius: 100,
                letterSpacing: '-0.01em',
                transition: 'background-color 0.2s, transform 0.15s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Join the Beta
            </a>

            <button
              onClick={() => { const el = document.querySelector('#how-it-works'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: '#1C1C1A',
                backgroundColor: 'transparent',
                padding: '14px 24px',
                borderRadius: 100,
                border: '1px solid rgba(28,28,26,0.18)',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(28,28,26,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(28,28,26,0.18)'; }}
            >
              See How It Works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="#1C1C1A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* ── BETA PERIOD: Google Play badge row temporarily hidden ──
              Restore when DaySeed is publicly available on Google Play.
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <GooglePlayBadge />
            <a
              href="#beta"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: '#4A7C35',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                opacity: 0.85,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
            >
              or Join the Beta
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="#4A7C35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          ── END BETA PERIOD COMMENT ── */}
        </FadeIn>

        {/* Right: Real App Screenshot */}
        <FadeIn direction="up" delay={0.2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,124,53,0.1) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />

          <div style={{ position: 'absolute', top: -20, right: 20 }}>
            <SmallLeafDecor rotate={-20} />
          </div>
          <div style={{ position: 'absolute', bottom: 40, left: 0 }}>
            <SmallLeafDecor rotate={15} size={0.8} />
          </div>
          <div style={{ position: 'absolute', bottom: -10, right: 80 }}>
            <SeedDecorSmall />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <ScreenshotPhone src={todayWithTasksImg} size="lg" />

            {/* Floating popup — streak */}
            <div style={{
              position: 'absolute',
              top: '12%',
              left: -108,
              backgroundColor: 'white',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 12px 32px rgba(28,28,26,0.12), 0 2px 8px rgba(28,28,26,0.06)',
              border: '1px solid rgba(28,28,26,0.05)',
              width: 148,
            }}>
              <div style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", color: '#8FA67A', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Current streak</div>
              <div style={{ fontSize: 13, fontFamily: "'Playfair Display', serif", color: '#1C1C1A', marginTop: 4, fontWeight: 600 }}>4 days strong</div>
              <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
                {[0, 1, 2, 3].map(i => (
                  <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#4A7C35' }} />
                ))}
                <div style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: '#4A7C35', opacity: 0.2 }} />
              </div>
            </div>

            {/* Floating popup — evening prompt */}
            <div style={{
              position: 'absolute',
              bottom: '18%',
              right: -100,
              backgroundColor: '#2D5016',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 12px 32px rgba(45,80,22,0.3)',
              width: 148,
            }}>
              <div style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>Tonight</div>
              <div style={{ fontSize: 12, fontFamily: "'Inter', sans-serif", color: 'white', marginTop: 4, lineHeight: 1.4 }}>Plant tomorrow's seed</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>9:30 PM · 2 min ritual</div>
            </div>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}

function BackgroundDecor() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <svg style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.04 }} width="400" height="400" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="200" fill="#4A7C35"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: '5%', right: '-3%', opacity: 0.05 }} width="300" height="300" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="150" fill="#8B5E3C"/>
      </svg>
    </div>
  );
}

function SeedIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <path d="M8 2 C13 2 16 6 16 11 C16 16 12.5 18.5 8 18.5 C3.5 18.5 0 16 0 11 C0 6 3 2 8 2Z" fill="#4A7C35"/>
      <path d="M8 2 L8 18.5" stroke="#2D5016" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

function SmallLeafDecor({ rotate = 0, size = 1 }: { rotate?: number; size?: number }) {
  return (
    <svg width={80 * size} height={100 * size} viewBox="0 0 80 100" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M40 95 C40 95 10 70 10 40 C10 20 24 8 38 12 C39.5 12.5 40 13.5 40 13.5 C40 13.5 40.5 12.5 42 12 C56 8 70 20 70 40 C70 70 40 95 40 95Z" fill="#8FA67A" opacity="0.35"/>
      <path d="M40 95 L40 15" stroke="#4A7C35" strokeWidth="1.5" opacity="0.25"/>
    </svg>
  );
}

function SeedDecorSmall() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
      <path d="M12 3 C19 3 23 9 23 16.5 C23 24 18.5 29 12 29 C5.5 29 1 24 1 16.5 C1 9 5 3 12 3Z" fill="#8B5E3C" opacity="0.4"/>
      <path d="M12 3 L12 29" stroke="#6B4428" strokeWidth="0.8" opacity="0.3"/>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#1C1C1A',
        borderRadius: 10,
        padding: '10px 16px',
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M1 1.5L10 10L1 18.5C0.6 18.1 0.4 17.6 0.4 17V3C0.4 2.4 0.6 1.9 1 1.5Z" fill="white"/>
        <path d="M1 1.5L10 10L13 7L3 1C2.3 0.6 1.6 0.8 1 1.5Z" fill="#4FC3F7"/>
        <path d="M10 10L1 18.5C1.6 19.2 2.3 19.4 3 19L13 13L10 10Z" fill="#F06292"/>
        <path d="M17 10C17 9.3 16.6 8.7 16 8.4L13 7L10 10L13 13L16 11.6C16.6 11.3 17 10.7 17 10Z" fill="#FFD54F"/>
      </svg>
      <div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>GET IT ON</div>
        <div style={{ fontSize: 14, color: 'white', fontFamily: "'Inter', sans-serif", fontWeight: 500, lineHeight: 1.2 }}>Google Play</div>
      </div>
    </a>
  );
}
