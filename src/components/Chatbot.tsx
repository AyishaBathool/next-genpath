"use client";

import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; type: 'user' | 'bot' }[]>([
    { 
      text: "👋 Hi! I'm your GenPath Assistant. I can help you with information about genetic diseases, their symptoms, treatments, and inheritance patterns. How may I assist you today?", 
      type: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const API_KEY = "AIzaSyDlrI-6XXwODvXBtbWvcDNMpGlr2Q8oO7E";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const userMessage = input.trim();
      setInput('');
      setMessages(prev => [...prev, { text: userMessage, type: 'user' }]);
      
      // Add typing indicator
      setMessages(prev => [...prev, { text: 'Typing...', type: 'bot' }]);

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are a genetic health assistant. Your role is to provide accurate, helpful information about genetic diseases, their symptoms, treatments, and inheritance patterns. Always be professional, clear, and empathetic in your responses.

User: ${userMessage}`
                }]
              }],
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
              }
            })
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Remove typing indicator
        setMessages(prev => prev.filter(msg => msg.text !== 'Typing...'));
        
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I'm having trouble connecting to my knowledge base. Please try again in a moment.";
        setMessages(prev => [...prev, { text: reply, type: 'bot' }]);
      } catch (error) {
        console.error('Error:', error);
        setMessages(prev => {
          const filtered = prev.filter(msg => msg.text !== 'Typing...');
          return [...filtered, { text: "I apologize, but I'm having trouble connecting to my knowledge base. Please try again in a moment.", type: 'bot' }];
        });
      }
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">💬 Chat with GenPath Assistant</h2>
          <button
            onClick={() => setIsMinimized(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Maximize chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">💬 Chat with GenPath Assistant</h2>
        <button
          onClick={() => setIsMinimized(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Minimize chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
} 