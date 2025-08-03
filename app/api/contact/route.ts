const url =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwc19AAKmvIvO0OYtYOzFcCRWFF8U6PNE8k6h-tQcFS0yDbfJfWG39VdK-ieLUWBTcT/exec';

export async function POST(request: Request) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: await request.text(),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
