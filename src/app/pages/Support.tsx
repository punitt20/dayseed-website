import { Link } from 'react-router';

const SUPPORT_EMAIL = 'punitt29870@gmail.com';

const faqs = [
  {
    q: 'Where is my data stored?',
    a: 'All of your data — tasks, plans, settings, streaks — is stored entirely on your device. Nothing is sent to any server or cloud service.',
  },
  {
    q: 'Can I use DaySeed without an internet connection?',
    a: 'Yes. DaySeed works completely offline. An internet connection is never required.',
  },
  {
    q: 'How do I back up my data?',
    a: 'Use the Export feature in Settings to save your data as a JSON file to your device. You can import this file at any time to restore your data.',
  },
  {
    q: 'How do I delete all my data?',
    a: 'You can reset the app from within Settings, or simply uninstall DaySeed. Uninstalling removes all locally stored data from your device.',
  },
  {
    q: 'Can I turn off notifications?',
    a: "Yes. You can adjust or disable notifications in DaySeed's Settings, or through your Android device's notification settings for the app.",
  },
  {
    q: 'Will DaySeed be available on iPhone?',
    a: 'DaySeed is currently available for Android only. We may consider iOS in the future.',
  },
  {
    q: 'I found a bug or have a feature request — how do I report it?',
    a: `Email us at ${SUPPORT_EMAIL}. We read every message and genuinely appreciate your feedback.`,
  },
];

export function Support() {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 120, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>

        <Link to="/" style={backStyle}>← Back to DaySeed</Link>

        <p style={eyebrowStyle}>Help</p>
        <h1 style={h1Style}>Support</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 300, color: 'rgba(28,28,26,0.6)', lineHeight: 1.7, marginTop: 0 }}>
          We're a small team and we care about your experience with DaySeed.
          If you need help or have feedback, reach out directly.
        </p>

        {/* Contact card */}
        <div style={{
          marginTop: 40,
          backgroundColor: '#F5F0E8',
          borderRadius: 20,
          padding: '36px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, color: '#8FA67A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email support</div>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 24,
              fontWeight: 600,
              color: '#2D5016',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            {SUPPORT_EMAIL}
          </a>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 300, color: 'rgba(28,28,26,0.55)', lineHeight: 1.6, margin: 0, marginTop: 4 }}>
            We aim to respond within 1–2 business days. Please include your Android version and a description of what you experienced.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 72 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, color: '#1C1C1A', letterSpacing: '-0.02em', marginBottom: 32 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(28,28,26,0.08)', padding: '24px 0' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500, color: '#1C1C1A', letterSpacing: '-0.01em', marginBottom: 8 }}>
                  {item.q}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300, color: 'rgba(28,28,26,0.6)', lineHeight: 1.7 }}>
                  {item.a}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(28,28,26,0.08)' }} />
          </div>
        </div>

        <div style={footerLinksStyle}>
          <Link to="/privacy" style={footerLinkStyle}>Privacy Policy →</Link>
          <Link to="/terms" style={footerLinkStyle}>Terms of Use →</Link>
        </div>

      </div>
    </div>
  );
}

const backStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#2D5016',
  textDecoration: 'none', marginBottom: 48, opacity: 0.8,
};
const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500,
  color: '#E8845A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12,
};
const h1Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 52px)',
  fontWeight: 700, color: '#1C1C1A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20,
};
const footerLinksStyle: React.CSSProperties = {
  marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(28,28,26,0.08)',
  display: 'flex', gap: 24,
};
const footerLinkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#2D5016', textDecoration: 'none',
};
