import { Link } from 'react-router';

const SUPPORT_EMAIL = 'punitt29870@gmail.com';
const EFFECTIVE_DATE = 'July 18, 2026';

export function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 120, minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>

        <Link to="/" style={backStyle}>← Back to DaySeed</Link>

        <p style={eyebrowStyle}>Legal</p>
        <h1 style={h1Style}>Privacy Policy</h1>
        <p style={metaStyle}>Effective date: {EFFECTIVE_DATE}</p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>

          <Section title="Overview">
            <p>DaySeed is a personal planning app designed to be private by default. We do not collect, store, or share your personal data. Everything you enter in DaySeed stays on your device.</p>
          </Section>

          <Section title="Data Storage">
            <p>All of your tasks, plans, reflections, streak information, and settings are stored locally on your Android device. No data is transmitted to any server, cloud service, or third party.</p>
            <p>DaySeed does not require an account. There is no sign-in, no user profile, and no cloud sync.</p>
          </Section>

          <Section title="Data We Do Not Collect">
            <ul>
              <li>Your name, email address, or any identifying information</li>
              <li>Your tasks, notes, or planning content</li>
              <li>Your location</li>
              <li>Device identifiers</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports sent to our servers</li>
            </ul>
            <p>DaySeed does not use analytics tools, tracking SDKs, or advertising networks of any kind.</p>
          </Section>

          <Section title="Local Notifications">
            <p>DaySeed may request permission to send you local notifications (such as an evening reminder to plan tomorrow or a morning reminder to review your day). Notification permission is optional and can be granted or revoked at any time through your Android device settings.</p>
            <p>These notifications are generated entirely on your device. No notification data is sent to our servers.</p>
          </Section>

          <Section title="Export and Import">
            <p>DaySeed lets you export your data as a JSON file and share it using your device's system share functionality. When you use system share, any third-party app or service you share to may have its own privacy policy governing how it handles data.</p>
            <p>You can also import a previously exported JSON file to restore your data. This functionality is entirely local — data is never transmitted over the internet by DaySeed during export or import.</p>
          </Section>

          <Section title="Device Permissions">
            <p>DaySeed may request the following device permissions:</p>
            <ul>
              <li><strong>Notifications</strong> — to send you optional planning reminders. You control when and whether these are sent.</li>
              <li><strong>Storage (if applicable)</strong> — to save exported JSON files to your device's file system.</li>
            </ul>
            <p>No other permissions are requested. DaySeed does not access your contacts, microphone, camera, or location.</p>
          </Section>

          <Section title="Advertising">
            <p>DaySeed contains no advertisements and does not work with any ad networks or data brokers.</p>
          </Section>

          <Section title="Third-Party Services">
            <p>DaySeed does not integrate with any third-party services, SDKs, or APIs that collect personal data. The app functions entirely offline and does not require an internet connection.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>DaySeed does not knowingly collect any information from children under the age of 13. Because we collect no personal data from any user, no special handling is required for children's data.</p>
          </Section>

          <Section title="Data Deletion">
            <p>All data is stored locally on your device. You can delete all DaySeed data at any time by using the in-app reset option in Settings, or by uninstalling the app. Uninstalling DaySeed removes all locally stored data from your device.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>If we make material changes to this Privacy Policy, we will update the effective date at the top of this page. We encourage you to review this page periodically. Continued use of DaySeed after changes constitutes your acceptance of the updated policy.</p>
          </Section>

          <Section title="Contact">
            <p>If you have questions about this Privacy Policy, contact us at: <strong>{SUPPORT_EMAIL}</strong></p>
          </Section>

        </div>

        <div style={footerLinksStyle}>
          <Link to="/terms" style={footerLinkStyle}>Terms of Use →</Link>
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
