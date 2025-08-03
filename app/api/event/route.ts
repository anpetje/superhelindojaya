import crypto from 'crypto';

function hash(data: string) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

const pixelID = process.env.FB_PIXEL_ID;
const accessToken = process.env.FB_ACCESS_TOKEN;

export async function POST(request: Request) {
  if (request.method && request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  if (!pixelID || !accessToken) {
    return new Response(
      JSON.stringify({
        success: true,
        // message: 'Facebook Pixel ID or Access Token is not set. Skipping event tracking.',
        data: null,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // get hostname from request
  const url = new URL(request.url);
  const hostname = url.hostname;

  const {
    eventID,
    eventName,
    email,
    phone,
    customData,
    actionSource = 'website',
  } = await request.json();

  const body = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventID,
        action_source: actionSource,
        event_source_url: hostname,
        user_data: {
          em: email ? [hash(email)] : undefined,
          ph: phone ? [hash(phone)] : undefined,
          client_user_agent: request.headers.get('user-agent') || '',
          client_ip_address: request.headers.get('x-forwarded-for') || '',
        },
        custom_data: customData,
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${process.env.FB_PIXEL_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
