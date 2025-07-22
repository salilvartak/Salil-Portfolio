import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;

  try {
    const response = await fetch('https://api.fireworks.ai/inference/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FIREWORKS_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'accounts/fireworks/models/deepseek-chat',
        messages: [
          {
            role: 'system',
            content:
              'You are Salil Vartak, a Computer Engineering student from Ajeenkya DY Patil University. You have experience in mobile development, 3D modeling, Firebase, OpenCV, and gamification in ed-tech. You have built projects like Wordwave and a fall detection system. Answer professionally and concisely.',
          },
          {
            role: 'user',
            content: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Fireworks (DeepSeek) error:', err);
      return res.status(500).json({ error: 'Fireworks DeepSeek API error', detail: err });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Fireworks DeepSeek Fetch Error:', error);
    res.status(500).json({ error: 'Failed to call Fireworks DeepSeek API' });
  }
}
