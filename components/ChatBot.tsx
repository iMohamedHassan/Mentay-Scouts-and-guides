
import React, { useState, useRef, useEffect } from 'react';
import { askScoutAssistant } from '../geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'أهلاً بك في مجموعات منطي الكشفية! أنا مساعدك الكشفي الذكي. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askScoutAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'عذراً، لم أستطع فهم ذلك.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border-2 border-[#ffcc00]/30 animate-fade-in">
          <div className="bg-gradient-to-r from-[#003366] to-[#1a4d2e] p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffcc00] rounded-full flex items-center justify-center text-[#003366] shadow-inner font-bold border-2 border-white">
                ⚜️
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm">المساعد الكشفي الذكي</span>
                <span className="text-[9px] opacity-80 uppercase tracking-tighter">Manti Scout AI Assistant</span>
              </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-[#fcfbf7] space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#003366] text-white rounded-bl-none' 
                  : 'bg-white text-gray-800 border border-[#ffcc00]/20 rounded-br-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
                  <div className="w-2 h-2 bg-[#ffcc00] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#003366] rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-[#1a4d2e] rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t-2 border-[#ffcc00]/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اسأل عن الحركة الكشفية..."
              className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#ffcc00] transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#003366] text-white w-12 h-12 flex items-center justify-center rounded-xl hover:bg-[#1a4d2e] transition-colors shadow-lg active:scale-95 disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-20 h-20 bg-gradient-to-br from-[#ffcc00] to-[#f59e0b] hover:from-[#003366] hover:to-[#1a4d2e] text-[#003366] hover:text-white rounded-full shadow-[0_10px_30px_rgba(255,204,0,0.5)] flex flex-col items-center justify-center transition-all duration-500 active:scale-90 border-4 border-white"
      >
        <span className="text-3xl mb-1">{isOpen ? '✕' : '💬'}</span>
        {!isOpen && <span className="text-[8px] font-black uppercase tracking-tighter">اسألنا</span>}
      </button>
    </div>
  );
};

export default ChatBot;
