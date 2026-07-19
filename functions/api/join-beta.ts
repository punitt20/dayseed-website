interface JoinBetaBody {
  name?: string;
  email?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(v: string): string | null {
  if (!v || !v.trim()) return 'Email address is required.';
  if (!EMAIL_RE.test(v.trim())) return 'Please enter a valid email address.';
  return null;
}

export async function onRequest(context: {
  request: Request;
  env: { TELEGRAM_BOT_TOKEN?: string; TELEGRAM_CHAT_ID?: string };
}) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', Allow: 'POST' },
    });
  }

  let body: JoinBetaBody;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailError = validateEmail(body.email);
  if (emailError) {
    return new Response(JSON.stringify({ error: emailError }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = (body.name || '').trim();
  const email = body.email!.trim().toLowerCase();

  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const time = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const text =
    `🌱 <b>New DaySeed Beta Signup!</b>\n\n` +
    `👤 <b>Name:</b> ${name || '—'}\n` +
    `📧 <b>Email:</b> ${email}\n` +
    `🕐 <b>Time:</b> ${time}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      },
    );

    if (!tgRes.ok) {
      const errBody = await tgRes.text();
      console.error('Telegram API error:', tgRes.status, errBody);
      return new Response(
        JSON.stringify({ error: 'Failed to send notification' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      );
    }
  } catch (err) {
    console.error('Telegram fetch error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send notification' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
