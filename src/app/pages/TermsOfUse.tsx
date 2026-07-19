import { Link } from 'react-router';

const SUPPORT_EMAIL = 'punitt29870@gmail.com';
const EFFECTIVE_DATE = 'July 18, 2026';

export function TermsOfUse() {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 120, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>

        <Link to="/" style={backStyle}>← Back to DaySeed</Link>

        <p style={eyebrowStyle}>Legal</p>
        <h1 style={h1Style}>Terms of Use</h1>
        <p style={metaStyle}>Effective date: {EFFECTIVE_DATE}</p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>

          <Section title="Acceptance of Terms">
            <p>By downloading or using DaySeed, you agree to these Terms of Use. If you do not agree, please do not use the app.</p>
          </Section>

          <Section title="Description of DaySeed">
            <p>DaySeed is a personal productivity application for Android that helps you plan your day the evening before. The app operates entirely offline and stores all data locally on your device. No account is required.</p>
          </Section>

          <Section title="License">
            <p>DaySeed grants you a limited, non-exclusive, non-transferable, revocable license to use the app for your personal, non-commercial purposes. You agree not to:</p>
            <ul>
              <li>Copy, modify, or distribute the app or its contents</li>
              <li>Reverse engineer or attempt to extract the source code</li>
              <li>Use the app for any unlawful purpose</li>
              <li>Transfer your license to another person</li>
            </ul>
          </Section>

          <Section title="Appropriate Use">
            <p>DaySeed is intended for personal daily planning. You are responsible for how you use the app and for the content you create within it. Please use it in a way that is lawful and respectful of others.</p>
          </Section>

          <Section title="User Content and Data">
            <p>All content you create in DaySeed (tasks, plans, notes, settings) is stored locally on your device and remains yours. Because DaySeed does not transmit your data to any server, we have no access to your content and bear no responsibility for it.</p>
          </Section>

          <Section title="Export, Import, and Backup Responsibility">
            <p>DaySeed provides tools to export your data as a JSON file and to import previously exported data. You are responsible for maintaining backups of your data if it is important to you. DaySeed is not responsible for any data loss that occurs due to device failure, app removal, or accidental data deletion.</p>
          </Section>

          <Section title="Data and Privacy">
            <p>Your privacy is fundamental to how DaySeed is built. Please review our <Link to="/privacy" style={{ color: '#2D5016' }}>Privacy Policy</Link> for full details on how data is handled.</p>
          </Section>

          <Section title="App Availability and Updates">
            <p>DaySeed is provided "as is." We do not guarantee that the app will be available at all times or that any specific feature will be maintained in future versions. We may update, modify, or discontinue the app at any time without notice.</p>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>DaySeed is provided without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the app will be error-free or uninterrupted.</p>
          </Section>

          <Section title="Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, DaySeed and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, arising from your use of the app. Our total liability shall not exceed the amount you paid for the app, if any.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We may update these Terms of Use from time to time. Changes will be reflected in the effective date at the top of this page. Continued use of the app after changes constitutes your acceptance of the revised terms.</p>
          </Section>

          <Section title="Contact">
            <p>For questions about these Terms, contact us at: <strong>{SUPPORT_EMAIL}</strong></p>
          </Section>

        </div>

        <div style={footerLinksStyle}>
          <Link to="/privacy" style={footerLinkStyle}>Privacy Policy →</Link>
          <Link to="/support" style={footerLinkStyle}>Support →</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={h2Style}>{title}</h2>
      <div style={bodyStyle}>{children}</div>
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
  fontWeight: 700, color: '#1C1C1A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
};
const metaStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(28,28,26,0.45)', marginTop: 0,
};
const h2Style: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600,
  color: '#1C1C1A', letterSpacing: '-0.02em', marginBottom: 12,
};
const bodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 300,
  color: '#1C1C1A', lineHeight: 1.75, opacity: 0.75,
};
const footerLinksStyle: React.CSSProperties = {
  marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(28,28,26,0.08)',
  display: 'flex', gap: 24,
};
const footerLinkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#2D5016', textDecoration: 'none',
};
