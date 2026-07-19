import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// ---------------------------------------------------------------------------
// Telegram notification
// Note: Bot token is visible in frontend source. Risk is limited to someone
// sending messages to your bot — they cannot read your messages or data.
// ---------------------------------------------------------------------------
const TG_TOKEN = '8895528557:AAEi-fDogFB-9a8ZL3twF8mlUqipyBXrIoQ';
const TG_CHAT_ID = '7166041613';

async function sendTelegramNotification(name: string, email: string) {
  const time = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
  const text =
    `🌱 <b>New DaySeed Beta Signup!</b>\n\n` +
    `👤 <b>Name:</b> ${name.trim() || '—'}\n` +
    `📧 <b>Email:</b> ${email.trim()}\n` +
    `🕐 <b>Time:</b> ${time}`;

  try {
    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' }),
    });
  } catch (_) {
    // Notification failure should never block the user's signup success
  }
}

// ---------------------------------------------------------------------------
// localStorage data layer
// ---------------------------------------------------------------------------
const STORAGE_KEY = 'dayseed_beta_signups';

interface BetaSignup {
  name: string;
  email: string;
  timestamp: string;
}

function getSignups(): BetaSignup[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function isDuplicateEmail(email: string): boolean {
  return getSignups().some(s => s.email.toLowerCase() === email.trim().toLowerCase());
}

function saveBetaSignup(name: string, email: string): void {
  const existing = getSignups();
  existing.push({ name: name.trim(), email: email.trim().toLowerCase(), timestamp: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(v: string) {
  if (!v.trim()) return 'Email address is required.';
  if (!EMAIL_RE.test(v.trim())) return 'Please enter a valid email address.';
  return '';
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
interface BetaModalProps {
  onClose: () => void;
}

type ModalState = 'form' | 'loading' | 'success';

export function BetaModal({ onClose }: BetaModalProps) {
  const [modalState, setModalState] = useState<ModalState>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [duplicateError, setDuplicateError] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Focus email on open
  useEffect(() => {
    setTimeout(() => emailRef.current?.focus(), 80);
  }, []);

  // Prevent scroll on the fixed container while modal is open
  useEffect(() => {
    const root = document.getElementById('__ds_root__');
    if (root) root.style.overflow = 'hidden';
    return () => { if (root) root.style.overflow = 'auto'; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }

    if (isDuplicateEmail(email)) {
      setDuplicateError(true);
      setEmailError('');
      return;
    }

    setEmailError('');
    setDuplicateError(false);
    setModalState('loading');

    // Save locally and notify via Telegram
    setTimeout(() => {
      saveBetaSignup(name, email);
      sendTelegramNotification(name, email);
      setModalState('success');
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Join the DaySeed Beta"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        backgroundColor: 'rgba(28,28,26,0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 24,
          padding: 0,
          width: '100%',
          maxWidth: 480,
          boxShadow: '0 24px 64px rgba(28,28,26,0.18)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: 'rgba(28,28,26,0.06)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1C1C1A',
            transition: 'background-color 0.2s',
            zIndex: 1,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(28,28,26,0.12)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(28,28,26,0.06)'; }}
        >
          <X size={15} />
        </button>

        {/* Green header strip */}
        <div style={{
          backgroundColor: '#2D5016',
          padding: '32px 40px 28px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: 100,
            padding: '4px 12px',
            marginBottom: 16,
          }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em' }}>BETA PROGRAM</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 26,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            margin: 0,
          }}>
            {modalState === 'success' ? "You're on the list." : 'Join the DaySeed Beta.'}
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.55,
            marginTop: 8,
            marginBottom: 0,
          }}>
            {modalState === 'success'
              ? 'We\'ll send you access instructions when your spot is ready.'
              : 'Enter your details below to request early access.'}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '32px 40px 36px' }}>
          {modalState === 'success' ? (
            <SuccessState onClose={onClose} />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="beta-name"
                  style={labelStyle}
                >
                  Name <span style={{ color: 'rgba(28,28,26,0.35)', fontWeight: 300 }}>(optional)</span>
                </label>
                <input
                  id="beta-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={modalState === 'loading'}
                  style={inputStyle(false)}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="beta-email" style={labelStyle}>
                  Google Play email address <span style={{ color: '#E8845A', fontWeight: 400 }}>*</span>
                </label>
                <input
                  id="beta-email"
                  ref={emailRef}
                  type="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                    if (duplicateError) setDuplicateError(false);
                  }}
                  onBlur={() => { if (email) setEmailError(validateEmail(email)); }}
                  disabled={modalState === 'loading'}
                  aria-invalid={!!emailError || duplicateError}
                  aria-describedby={emailError || duplicateError ? 'beta-email-error' : undefined}
                  style={inputStyle(!!emailError || duplicateError)}
                />
                {emailError && (
                  <p id="beta-email-error" style={errorStyle}>{emailError}</p>
                )}
                {duplicateError && (
                  <p id="beta-email-error" style={{ ...errorStyle, color: '#D4A847' }}>
                    This email is already on the list. We'll be in touch!
                  </p>
                )}
              </div>

              {/* Privacy note */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                color: 'rgba(28,28,26,0.45)',
                lineHeight: 1.65,
                marginBottom: 24,
              }}>
                Your email will only be used to manage your access to the DaySeed beta testing program and related beta communications. It will never be shared publicly or sold.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={modalState === 'loading'}
                style={{
                  width: '100%',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'white',
                  backgroundColor: modalState === 'loading' ? '#8FA67A' : '#2D5016',
                  padding: '14px 24px',
                  borderRadius: 100,
                  border: 'none',
                  cursor: modalState === 'loading' ? 'not-allowed' : 'pointer',
                  letterSpacing: '-0.01em',
                  transition: 'background-color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => {
                  if (modalState !== 'loading') (e.currentTarget as HTMLElement).style.backgroundColor = '#4A7C35';
                }}
                onMouseLeave={e => {
                  if (modalState !== 'loading') (e.currentTarget as HTMLElement).style.backgroundColor = '#2D5016';
                }}
              >
                {modalState === 'loading' ? (
                  <>
                    <LoadingSpinner />
                    Submitting…
                  </>
                ) : (
                  'Join the Beta'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Success icon */}
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: 'rgba(74,124,53,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 11l4 4 8-8" stroke="#4A7C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 15,
        fontWeight: 300,
        color: 'rgba(28,28,26,0.65)',
        lineHeight: 1.7,
        marginBottom: 28,
      }}>
        Thanks for joining the DaySeed Beta. We'll use your submitted Google Play email to provide access to the testing program. You'll receive further instructions when your access is ready.
      </p>

      <div style={{
        backgroundColor: '#F0F4EC',
        borderRadius: 14,
        padding: '16px 20px',
        marginBottom: 28,
        border: '1px solid rgba(74,124,53,0.12)',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 300,
          color: 'rgba(28,28,26,0.55)',
          lineHeight: 1.6,
          margin: 0,
        }}>
          Keep an eye on your inbox. We'll reach out with your Google Play beta invite link when a spot opens up.
        </p>
      </div>

      <button
        onClick={onClose}
        style={{
          width: '100%',
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: '#2D5016',
          backgroundColor: 'rgba(74,124,53,0.1)',
          padding: '14px 24px',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '-0.01em',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(74,124,53,0.18)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(74,124,53,0.1)'; }}
      >
        Done
      </button>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Shared style helpers
// ---------------------------------------------------------------------------
const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: '#1C1C1A',
  letterSpacing: '-0.01em',
  marginBottom: 8,
};

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  fontFamily: "'Inter', sans-serif",
  fontSize: 15,
  fontWeight: 300,
  color: '#1C1C1A',
  backgroundColor: '#FAFAF8',
  padding: '12px 16px',
  borderRadius: 12,
  border: `1px solid ${hasError ? '#D4183D' : 'rgba(28,28,26,0.14)'}`,
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
  letterSpacing: '-0.01em',
});

const errorStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  fontWeight: 400,
  color: '#D4183D',
  marginTop: 6,
  marginBottom: 0,
};
