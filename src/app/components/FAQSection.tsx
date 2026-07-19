import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';

const faqs = [
  {
    question: 'What is DaySeed?',
    answer: 'DaySeed is a mobile productivity app that helps you spend two peaceful minutes every evening deciding what matters tomorrow. By planting your priorities the night before, you wake up with clarity and know exactly where to focus your energy — no morning fog, no decision fatigue.',
  },
  {
    question: 'How does DaySeed work?',
    answer: 'Each evening, DaySeed prompts you to choose 1–3 priorities for tomorrow. These become your "seeds." When you wake up, your seeds are waiting — already decided, already organized. Throughout the day, you tend to them. Each small act of follow-through compounds into better days over time.',
  },
  {
    question: 'When should I plan tomorrow?',
    answer: 'The best time is in the evening — ideally 30 to 60 minutes before you wind down for the night. This gives your mind time to settle before sleep, and ensures your priorities are set before tomorrow\'s noise begins. DaySeed sends a gentle reminder at your preferred evening time.',
  },
  {
    question: 'Does DaySeed send reminders?',
    answer: 'Yes. DaySeed sends two gentle, unobtrusive reminders: one in the evening to plant tomorrow\'s seeds, and one in the morning to review what you planted. Both are fully customizable — you choose the time, and you can always turn them off.',
  },
  {
    question: 'Where can I download DaySeed?',
    answer: 'DaySeed is available on Google Play for Android devices. Simply search for "DaySeed" or click the Google Play badge on this page to download it. It\'s free to start.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: '#FAF7F2', padding: '120px 32px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <FadeIn style={{ marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: '#8FA67A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>Questions</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#1C1C1A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 0,
          }}>
            Common questions.
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ borderBottom: '1px solid rgba(28,28,26,0.08)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    fontWeight: 500,
                    color: '#1C1C1A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                  }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: openIndex === i ? '#2D5016' : 'rgba(28,28,26,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background-color 0.2s',
                    color: openIndex === i ? 'white' : '#1C1C1A',
                  }}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: openIndex === i ? 400 : 0,
                  transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
                  opacity: openIndex === i ? 1 : 0,
                }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#1C1C1A',
                    opacity: 0.65,
                    lineHeight: 1.75,
                    paddingBottom: 24,
                    margin: 0,
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
