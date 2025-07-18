// 📁 src/components/ChatBot.tsx
import { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('/api/askSalil', {
        message: input,
      });
      const botMessage = { sender: 'bot', text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className=" bg-gray-800/50 rounded-2xl max-w-6xl mx-auto shadow-2xl border border-gray-700 overflow-hidden" style={{ position: 'relative', zIndex: 10 }}>
      
      <div className="h-96 overflow-y-auto p-4 space-y-2 bg-gray-800/50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'bg-white/20 text-salil-blue self-end ml-auto rounded-lg'
                : 'bg-gray-100 text-black'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Typing...</div>}
      </div>
      <div className="flex border-t border-gray-700">
        <input
          type="text"
          className="flex-1 p-2 text-sm focus:outline-none bg-gray-700"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="px-4 bg-salil-blue text-white font-bold"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
