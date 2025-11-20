
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am your Drepto AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: userMessage,
        config: {
          systemInstruction: "You are a helpful medical assistant for a telemedicine app called Drepto. Provide concise, friendly, and helpful information. For specific medical diagnoses, always recommend consulting a real doctor.",
        }
      });

      const text = response.text;
      setMessages(prev => [...prev, { role: 'model', text: text || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Window */}
        {isOpen && (
            <div className="bg-white w-80 sm:w-96 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-200 animate-fade-in-up origin-bottom-right">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-blue-600 p-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1.5 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2H2v10l2.17-2.17a4 4 0 0 1 5.66 0L12 12l2.17-2.17a4 4 0 0 1 5.66 0L22 12V2Z"/><path d="M12 22H2V12l2.17 2.17a4 4 0 0 0 5.66 0L12 12l2.17 2.17a4 4 0 0 0 5.66 0L22 12v10Z"/></svg>
                        </div>
                        <h3 className="text-white font-bold tracking-wide">Drepto AI</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-2 space-y-4 bg-gray-50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm text-xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></span>
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask anything..."
                        className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                    <button 
                        onClick={handleSend} 
                        disabled={isLoading || !input.trim()} 
                        className="bg-primary text-white p-2.5 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-md mb-12"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        )}

        {/* Toggle Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? 'bg-gray-800 rotate-90 shadow-gray-500/50 mb-12' : 'bg-gradient-to-r from-primary to-indigo-600 shadow-primary/50 hover:scale-110 mb-12'} text-white p-2 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group mb-12`}
        >
             {isOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             ) : (
                // Bolt Icon for "Fast AI" as requested
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="group-hover:animate-pulse"><path d="M11 21L4 12h7l-1-9 11 10h-8l2 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none"/></svg>
             )}
        </button>
    </div>
  );
};

export default AIAssistant;
