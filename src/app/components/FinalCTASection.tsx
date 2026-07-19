import { FadeIn } from './FadeIn';

// Replace with your actual Google Play Store URL
const GOOGLE_PLAY_URL = 'https://play.google.com/store';

export function FinalCTASection() {
  return (
    <section style={{
      backgroundColor: '#2D5016',
      padding: '120px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: '5%',
        opacity: 0.08,
        pointerEvents: 'none',
      }}>
        <FullPlantSilhouette />
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '2%',
        opacity: 0.06,
        pointerEvents: 'none',
      }}>
        <SmallPlantLeft />
      </div>
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 500,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,71,0.15) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <FadeIn>
          <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                <path d="M12 2 C18.5 2 23 8 23 16.5 C23 25 18 30.5 12 30.5 C6 30.5 1 25 1 16.5 C1 8 5.5 2 12 2Z" fill="rgba(255,255,255,0.8)"/>
                <path d="M12 2 L12 30.5" stroke="rgba(45,80,22,0.4)" strokeWidth="0.8" strokeDasharray="2 3"/>
              </svg>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 0,
          }}>
            Plant tomorrow's<br />
            <span style={{ fontStyle: 'italic', color: '#D4A847' }}>first seed.</span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            marginTop: 24,
          }}>
            Take two minutes tonight.<br />
            Wake up knowing what matters.
          </p>

          {/* ── BETA PERIOD: Google Play CTAs temporarily hidden ──
              Restore when DaySeed is publicly available on Google Play.
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            marginTop: 48,
            flexWrap: 'wrap',
          }}>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#2D5016',
                backgroundColor: 'white',
                padding: '16px 36px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
                transition: 'transform 0.15s, opacity 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Get DaySeed
            </a>
            <GooglePlayBadgeLight />
          </div>
          ── END BETA PERIOD COMMENT ── */}

          {/* Primary CTA during closed beta — remove and restore the block above when publicly released */}
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            marginTop: 48,
            flexWrap: 'wrap',
          }}>
            <a
              href="#beta"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#2D5016',
                backgroundColor: 'white',
                padding: '16px 36px',
                borderRadius: 100,
                letterSpacing: '-0.01em',
                transition: 'transform 0.15s, opacity 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Join the Beta
            </a>
          </div>

          {/* ── BETA PERIOD: tagline temporarily swapped ──
              Restore original: "Available on Google Play · Free to start"
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.35)',
            marginTop: 24,
            letterSpacing: '-0.01em',
          }}>
            Available on Google Play · Free to start
          </p>
          ── END BETA PERIOD COMMENT ── */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.35)',
            marginTop: 24,
            letterSpacing: '-0.01em',
          }}>
            Early access · Limited spots · Android only
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function GooglePlayBadgeLight() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 10,
        padding: '10px 20px',
        textDecoration: 'none',
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.18)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.12)'; }}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M1 1.5L10 10L1 18.5C0.6 18.1 0.4 17.6 0.4 17V3C0.4 2.4 0.6 1.9 1 1.5Z" fill="white" opacity="0.9"/>
        <path d="M1 1.5L10 10L13 7L3 1C2.3 0.6 1.6 0.8 1 1.5Z" fill="#4FC3F7" opacity="0.9"/>
        <path d="M10 10L1 18.5C1.6 19.2 2.3 19.4 3 19L13 13L10 10Z" fill="#F06292" opacity="0.9"/>
        <path d="M17 10C17 9.3 16.6 8.7 16 8.4L13 7L10 10L13 13L16 11.6C16.6 11.3 17 10.7 17 10Z" fill="#FFD54F" opacity="0.9"/>
      </svg>
      <div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>GET IT ON</div>
        <div style={{ fontSize: 14, color: 'white', fontFamily: "'Inter', sans-serif", fontWeight: 500, lineHeight: 1.2 }}>Google Play</div>
      </div>
    </a>
  );
}

function FullPlantSilhouette() {
  return (
    <svg width="320" height="480" viewBox="0 0 320 480" fill="none">
      <path d="M160 470 C158 440 154 410 160 380 C165 356 158 330 160 305 C162 282 158 255 160 230 C162 208 158 183 160 160 C162 140 158 118 160 98 C162 80 158 60 160 42 C162 28 158 12 160 5" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M160 360 C136 342 108 320 98 288 C90 264 100 248 116 254 C136 262 152 296 158 336 C160 346 160 356 160 360Z" fill="white"/>
      <path d="M160 330 C184 312 212 288 220 256 C226 232 216 216 200 222 C180 230 164 264 161 310 C160 320 160 326 160 330Z" fill="white"/>
      <path d="M160 280 C138 262 114 238 108 208 C102 184 112 168 128 175 C146 182 156 216 159 262 C160 270 160 277 160 280Z" fill="white"/>
      <path d="M160 248 C182 228 208 200 210 168 C212 144 198 132 184 140 C168 150 162 184 160 228 C160 236 160 244 160 248Z" fill="white"/>
      <path d="M160 200 C140 180 118 156 114 128 C110 106 120 92 134 99 C150 108 157 140 159 186 C160 193 160 197 160 200Z" fill="white"/>
      <path d="M160 162 C178 142 196 116 196 88 C196 68 184 60 173 68 C162 77 160 106 160 146 C160 153 160 158 160 162Z" fill="white"/>
    </svg>
  );
}

function SmallPlantLeft() {
  return (
    <svg width="180" height="300" viewBox="0 0 180 300" fill="none">
      <path d="M90 290 C88 268 86 244 90 220 C93 202 89 182 90 163 C91 145 88 125 90 107 C91 90 88 72 90 56" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M90 214 C75 202 56 186 52 165 C48 148 56 138 67 143 C80 148 86 168 89 200 C90 207 90 212 90 214Z" fill="white"/>
      <path d="M90 195 C105 182 124 165 128 144 C131 128 123 117 113 122 C100 128 93 150 91 182 C90 189 90 193 90 195Z" fill="white"/>
      <path d="M90 155 C77 142 60 124 58 104 C55 88 63 79 73 84 C85 89 88 112 89 144 C90 149 90 152 90 155Z" fill="white"/>
      <path d="M90 128 C104 114 118 96 118 76 C118 62 108 56 100 62 C91 69 90 92 90 118 C90 123 90 126 90 128Z" fill="white"/>
    </svg>
  );
}
