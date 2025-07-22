// src/components/ChatbBot.tsx
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Bot, User } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

export function ChatbBot() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: 'Hello! I am Salils bot. Ask me anything about Salil Vartak.' },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const newUserMessage: Message = { role: 'user', content: input };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        setInput('');
        setLoading(true);

        try {
            // Updated URL to point to your new backend server
            const response = await axios.post('http://localhost:3001/api/askSalil', { message: input });
            const botReply: Message = { role: 'bot', content: response.data.reply };
            setMessages((prevMessages) => [...prevMessages, botReply]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'bot', content: 'Sorry, I am having trouble connecting right now. Please try again later.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <Card className="flex flex-col h-[70vh] w-[400px]" style={{ position: 'relative', zIndex: 10 }}>
            <CardHeader>
                <CardTitle>Chat with Salil's Bot</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-4">
                <ScrollArea className="h-full pr-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-start mb-4 ${
                                msg.role === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            {msg.role === 'bot' && (
                                <Bot className="h-8 w-8 rounded-full bg-gray-200 p-1 mr-2" />
                            )}
                            <div
                                className={`p-3 rounded-lg max-w-[70%] ${
                                    msg.role === 'user'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                }`}
                            >
                                {msg.content}
                            </div>
                            {msg.role === 'user' && (
                                <User className="h-8 w-8 rounded-full bg-blue-500 text-white p-1 ml-2" />
                            )}
                        </div>
                    ))}
                    {loading && (
                        <div className="flex items-start mb-4 justify-start">
                            <Bot className="h-8 w-8 rounded-full bg-gray-200 p-1 mr-2" />
                            <div className="p-3 rounded-lg bg-gray-200 text-gray-800">Typing...</div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex p-4 border-t">
                <Input
                    placeholder="Ask me anything about Salil..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    className="flex-1 mr-2"
                />
                <Button onClick={sendMessage} disabled={loading}>
                    Send
                </Button>
            </CardFooter>
        </Card>
    );
}
export default ChatbBot;