import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
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
      console.error('DeepSeek error:', err);
      return res.status(500).json({ error: 'DeepSeek API error', detail: err });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    res.status(200).json({ reply });
  } catch (error) {
    console.error('DeepSeek Fetch Error:', error);
    res.status(500).json({ error: 'Failed to call DeepSeek API' });
  }
}
