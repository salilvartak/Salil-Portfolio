// backend/server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 for the backend, to avoid conflict with Vite's default 3000

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing of JSON request bodies

app.post('/api/askSalil', async (req, res) => {
    const { message } = req.body;
    console.log(`Received message: ${message}`);

    if (!process.env.DEEPSEEK_API_KEY) {
        return res.status(500).json({ error: 'DeepSeek API Key not configured.' });
    }

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    try {
        const deepseekResponse = await axios.post(
            'https://api.deepseek.com/v1/chat/completions',
            {
                model: 'deepseek-chat',
                messages: [{ role: 'user', content: message }],
                stream: false,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                },
            }
        );

        const reply = deepseekResponse.data.choices[0].message.content;
        res.status(200).json({ reply });
    } catch (error) {
        console.error('Error calling DeepSeek API:', error.response ? error.response.data : error.message);
        res.status(error.response?.status || 500).json({
            error: 'Failed to get a response from DeepSeek API.',
            details: error.response ? error.response.data : error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
});