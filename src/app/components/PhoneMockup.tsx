import type { ReactNode } from 'react';

interface PhoneMockupProps {
  children?: ReactNode;
  screenBg?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { width: 160, height: 320, radius: 28, padding: 8, screenRadius: 20 },
  md: { width: 200, height: 400, radius: 36, padding: 10, screenRadius: 26 },
  lg: { width: 240, height: 480, radius: 42, padding: 12, screenRadius: 30 },
};

export function PhoneMockup({ children, screenBg = '#FAF7F2', className = '', size = 'md' }: PhoneMockupProps) {
  const s = sizes[size];
  return (
    <div
      className={className}
      style={{
        width: s.width,
        height: s.height,
        background: 'linear-gradient(145deg, #2A2A28 0%, #1C1C1A 50%, #141412 100%)',
        borderRadius: s.radius,
        padding: s.padding,
        boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Side button */}
      <div style={{
        position: 'absolute',
        right: -3,
        top: '28%',
        width: 3,
        height: 48,
        backgroundColor: '#2A2A28',
        borderRadius: '0 2px 2px 0',
      }} />
      {/* Volume buttons */}
      <div style={{
        position: 'absolute',
        left: -3,
        top: '22%',
        width: 3,
        height: 32,
        backgroundColor: '#2A2A28',
        borderRadius: '2px 0 0 2px',
      }} />
      <div style={{
        position: 'absolute',
        left: -3,
        top: '34%',
        width: 3,
        height: 32,
        backgroundColor: '#2A2A28',
        borderRadius: '2px 0 0 2px',
      }} />

      {/* Screen */}
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: screenBg,
        borderRadius: s.screenRadius,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Status bar */}
        <div style={{
          height: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 9, fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#1C1C1A' }}>9:41</span>
          {/* Dynamic island */}
          <div style={{
            width: 20,
            height: 6,
            backgroundColor: '#1C1C1A',
            borderRadius: 10,
          }} />
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <rect x="0" y="2" width="2" height="6" rx="0.5" fill="#1C1C1A"/>
              <rect x="3" y="1" width="2" height="7" rx="0.5" fill="#1C1C1A"/>
              <rect x="6" y="0" width="2" height="8" rx="0.5" fill="#1C1C1A"/>
              <rect x="9" y="0" width="2" height="8" rx="0.5" fill="#1C1C1A" opacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {children}
        </div>

        {/* Home indicator */}
        <div style={{
          height: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            width: 40,
            height: 4,
            backgroundColor: '#1C1C1A',
            borderRadius: 2,
            opacity: 0.2,
          }} />
        </div>
      </div>
    </div>
  );
}

export function TodayScreen() {
  const priorities = [
    { text: 'Deep work block', done: true },
    { text: 'Review proposal draft', done: false },
    { text: 'Evening walk', done: false },
  ];
  return (
    <div style={{ padding: '8px 14px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: 9, color: '#8FA67A', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Thursday</div>
      <div style={{ fontSize: 15, fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1A', marginTop: 2, lineHeight: 1.3 }}>Good morning</div>

      <div style={{ fontSize: 9, color: '#8B5E3C', marginTop: 12, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Today's Seeds</div>
      <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {priorities.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 9px',
            backgroundColor: item.done ? '#F0F4EC' : 'white',
            borderRadius: 8,
            border: '1px solid',
            borderColor: item.done ? '#C5D9B8' : '#EAE6E0',
          }}>
            <div style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              border: '1.5px solid',
              borderColor: item.done ? '#4A7C35' : '#C5BFB5',
              backgroundColor: item.done ? '#4A7C35' : 'transparent',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {item.done && (
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                  <path d="M1 2.5L2.8 4.2L6 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span style={{ fontSize: 10, color: item.done ? '#8FA67A' : '#1C1C1A', textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 10,
        padding: '9px 10px',
        background: 'linear-gradient(135deg, #2D5016 0%, #4A7C35 100%)',
        borderRadius: 10,
        color: 'white',
      }}>
        <div style={{ fontSize: 8, opacity: 0.75, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Tonight</div>
        <div style={{ fontSize: 10, marginTop: 1 }}>Plant tomorrow's seed →</div>
      </div>
    </div>
  );
}

export function TomorrowScreen() {
  return (
    <div style={{ padding: '8px 14px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: 9, color: '#8FA67A', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Planning</div>
      <div style={{ fontSize: 14, fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1A', marginTop: 2, lineHeight: 1.3 }}>Tomorrow's seeds</div>

      <div style={{ fontSize: 9, color: '#717182', marginTop: 10, lineHeight: 1.5 }}>What matters most tomorrow?</div>

      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {['', '', ''].map((_, i) => (
          <div key={i} style={{
            height: 32,
            borderRadius: 8,
            border: '1.5px dashed',
            borderColor: i === 0 ? '#4A7C35' : '#DDD8D0',
            backgroundColor: i === 0 ? '#F6FAF4' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px',
            gap: 6,
          }}>
            <div style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: i === 0 ? '#4A7C35' : '#C5BFB5',
            }} />
            {i === 0 && <span style={{ fontSize: 10, color: '#4A7C35' }}>Morning run</span>}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 10,
        fontSize: 9,
        color: '#8FA67A',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        opacity: 0.8,
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="4" stroke="#8FA67A" strokeWidth="1"/>
          <path d="M5 3V5.5L6.5 7" stroke="#8FA67A" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span>2 min evening ritual</span>
      </div>
    </div>
  );
}

export function CalendarScreen() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const nums = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div style={{ padding: '8px 14px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: 9, color: '#8FA67A', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>July 2026</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, marginTop: 8 }}>
        {days.map((d, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: 8, color: '#9B9690', fontWeight: 500, paddingBottom: 2 }}>{d}</div>
        ))}
        {nums.slice(0, 28).map((n, i) => (
          <div key={i} style={{
            textAlign: 'center',
            fontSize: 9,
            padding: '2px 0',
            borderRadius: 4,
            backgroundColor: n === 17 ? '#4A7C35' : n === 15 || n === 20 ? '#F0F4EC' : 'transparent',
            color: n === 17 ? 'white' : n === 15 || n === 20 ? '#4A7C35' : '#1C1C1A',
            fontWeight: n === 17 ? 600 : 400,
          }}>{n}</div>
        ))}
      </div>
      <div style={{ marginTop: 8, borderTop: '1px solid #EAE6E0', paddingTop: 6 }}>
        <div style={{ fontSize: 8, color: '#8B5E3C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Upcoming</div>
        <div style={{ fontSize: 9, color: '#1C1C1A', marginTop: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#4A7C35' }} />
            <span>Team review · Jul 20</span>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#D4A847' }} />
            <span>Deep work · Jul 22</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MorningScreen() {
  return (
    <div style={{ padding: '8px 14px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: 9, color: '#E8845A', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Good Morning</div>
      <div style={{ fontSize: 13, fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1A', marginTop: 2, lineHeight: 1.3 }}>Your day is ready</div>

      <div style={{
        marginTop: 10,
        padding: '10px',
        background: 'linear-gradient(135deg, #FAF2E8 0%, #FDF8F0 100%)',
        borderRadius: 10,
        border: '1px solid #EDD9B8',
      }}>
        <div style={{ fontSize: 8, color: '#8B5E3C', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Planted last night</div>
        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['Write for 30 mins', 'Respond to messages', 'Lunch with team'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: i === 0 ? '#D4A847' : '#C5BFB5', flexShrink: 0 }} />
              <span style={{ fontSize: 9, color: '#1C1C1A' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 8, display: 'flex', gap: 5 }}>
        <div style={{
          flex: 1,
          padding: '7px 8px',
          backgroundColor: '#4A7C35',
          borderRadius: 8,
          color: 'white',
          fontSize: 9,
          textAlign: 'center',
        }}>Start Day</div>
        <div style={{
          flex: 1,
          padding: '7px 8px',
          backgroundColor: 'white',
          borderRadius: 8,
          border: '1px solid #EAE6E0',
          color: '#1C1C1A',
          fontSize: 9,
          textAlign: 'center',
        }}>Edit</div>
      </div>
    </div>
  );
}
