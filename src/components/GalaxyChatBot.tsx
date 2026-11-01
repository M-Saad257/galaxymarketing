'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  PhoneCall, 
  MapPin, 
  Calendar,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actions?: { label: string; action: string }[];
}

export default function GalaxyChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Assalam o Alaikum! Welcome to Galaxy Marketing Pvt. Ltd. I am your AI Real Estate Concierge. I can help you explore scenic plots in Murree, high-yield commercial towers in Islamabad, or schedule a consultation with our leadership.',
      time: 'Just now',
      actions: [
        { label: '🏔️ Murree Holiday Hill Park', action: 'murree' },
        { label: '🏢 Daraaj Tower Islamabad', action: 'daraaj' },
        { label: '📈 Calculate 3-Yr ROI', action: 'roi' },
        { label: '📅 Book In-Person Consultation', action: 'book' },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate smart bot real estate response logic
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse = '';
      let actionButtons: { label: string; action: string }[] | undefined = undefined;

      if (lower.includes('murree') || lower.includes('patriots') || lower.includes('holiday')) {
        botResponse = 'Holiday Hill Park Murree is our signature mountain sanctuary! Plots start from PKR 3.8 Million with easy 36-month installments. It boasts 100% pine valley views, tourist rental programs yielding ~22% annually, and gated security.';
        actionButtons = [
          { label: 'Download Murree Payment Plan', action: 'plan_murree' },
          { label: 'Chat with Murree Specialist', action: 'whatsapp_murree' },
        ];
      } else if (lower.includes('daraaj') || lower.includes('commercial') || lower.includes('office')) {
        botResponse = 'Daraaj Tower Islamabad is an institutional-grade corporate and luxury retail destination. Pre-leased opportunities start from PKR 8.5 Million (25% down payment) with projected 18% annual capital appreciation.';
        actionButtons = [
          { label: 'Request Daraaj Floorplan', action: 'daraaj_floor' },
          { label: 'Schedule Site Inspection', action: 'book' },
        ];
      } else if (lower.includes('roi') || lower.includes('calculate') || lower.includes('return') || lower.includes('profit')) {
        botResponse = 'Across our verified portfolio, historical returns range between 18% and 35% over 3 years. For vacation chalets in Bhurban and Murree, rental yields reach 20-24% during peak tourist seasons.';
        actionButtons = [
          { label: 'Open Investment Calculator', action: 'calculator' },
          { label: 'Book Advisory Session', action: 'book' },
        ];
      } else if (lower.includes('book') || lower.includes('visit') || lower.includes('appointment') || lower.includes('office')) {
        botResponse = 'We would be honored to host you at our Head Office: Office # 8, 1st Floor, Al Anayat Mall, G-11 Markaz, Islamabad. What is your preferred day and WhatsApp number so Mr. Atif Khan or our General Manager can prepare your VIP briefing?';
        actionButtons = [
          { label: 'WhatsApp +92 309 5550790', action: 'whatsapp' },
          { label: 'Toll Free: 1800.899.900', action: 'call' },
        ];
      } else if (lower.includes('team') || lower.includes('atif') || lower.includes('adil')) {
        botResponse = 'Galaxy Marketing is spearheaded by Mr. Atif Khan (Founder) and Mr. Adil Khan (Co-Founder), alongside General Manager Waqas Ahmed Siddiqui. Over 6+ years, our leadership has successfully closed 3,215+ transactions.';
      } else {
        botResponse = `Thank you for inquiring about "${query}". Galaxy Marketing specializes in verified high-yield residential, commercial, and scenic resort real estate in Murree and Islamabad. Would you like a senior advisor to contact you directly?`;
        actionButtons = [
          { label: 'Connect on WhatsApp (+92 309 5550790)', action: 'whatsapp' },
          { label: 'Explore All Projects', action: 'projects' },
        ];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: actionButtons,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleActionClick = (action: string) => {
    if (action === 'murree') {
      handleSend('Tell me about Holiday Hill Park Murree plots & pricing');
    } else if (action === 'daraaj') {
      handleSend('What are the commercial details of Daraaj Tower Islamabad?');
    } else if (action === 'roi') {
      handleSend('How does your 3-year ROI and rental yield perform?');
    } else if (action === 'book') {
      handleSend('I want to book an in-person meeting at your G-11 Markaz office');
    } else if (action === 'whatsapp' || action === 'whatsapp_murree') {
      window.open(
        'https://api.whatsapp.com/send?phone=+923095550790&text=Assalam%20o%20Alaikum%2C%20I%20am%20chatting%20with%20your%20Galaxy%20AI%20and%20would%20like%20direct%20assistance.',
        '_blank'
      );
    } else if (action === 'call') {
      window.location.href = 'tel:1800899900';
    } else if (action === 'calculator') {
      const calcEl = document.getElementById('roi-calculator');
      if (calcEl) {
        calcEl.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else if (action === 'projects') {
      window.location.href = '/projects';
    } else {
      handleSend('Please send more details regarding this opportunity.');
    }
  };

  return (
    <>
      {/* Floating Bot Launcher Trigger (Bottom-Right, stacked above WhatsApp) */}
      <div className="fixed bottom-20 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Galaxy AI Real Estate Concierge"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-primary text-black shadow-lg shadow-primary/25 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          {/* Animated Glow Wave */}
          <span className="absolute -inset-1 rounded-full bg-primary/30 animate-ping opacity-60 pointer-events-none"></span>

          {/* Bot Icon */}
          <img src='/images/logo-icon.png' alt="Chatbot" className="w-8 h-8 object-contain relative z-10 drop-shadow" />

          {/* Online Dot */}
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
        </button>
      </div>

      {/* Floating Luxury Chat Modal (Appears from Bottom-Right, Light Theme) */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[390px] max-h-[560px] h-[450px] flex flex-col bg-white border border-gray-200 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-theme-surface border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary-light border border-primary-border flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-theme-heading flex items-center space-x-2">
                  <span>Galaxy Property Concierge</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-primary-light text-primary font-bold border border-primary-border">AI</span>
                </h3>
                <p className="text-[11px] text-emerald-700 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  Active • G-11 Markaz HQ
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white font-medium rounded-br-none'
                      : 'bg-theme-surface text-slate-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Quick Action Buttons */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.actions.map((act, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(act.action)}
                        className="text-[11px] px-2.5 py-1.5 rounded-lg bg-primary-light border border-primary-border text-primary hover:opacity-80 transition-all text-left flex items-center space-x-1 font-medium"
                      >
                        <span>{act.label}</span>
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 bg-gray-100 border border-gray-200 px-3 py-2 rounded-xl text-slate-500 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Consultation Ribbon */}
          <div className="bg-theme-surface px-3 py-1.5 border-t border-gray-200 text-[10px] text-slate-500 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <PhoneCall className="w-3 h-3 text-primary" />
              <span>Toll Free: 1800.899.900</span>
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=+923095550790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline font-bold"
            >
              Direct WhatsApp ↗
            </a>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Murree plots, ROI, or booking..."
              className="flex-1 bg-theme-surface border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-theme-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-primary text-white font-bold disabled:opacity-40 hover:bg-primary-hover transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
