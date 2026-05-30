import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { 
  IconSend, 
  IconSparkles, 
  IconStethoscope,
  IconRobot
} from '@tabler/icons-react';

const SupportMessages = () => {
  const [activeTab, setActiveTab] = useState('chats'); // 'chats' or 'ai'
  const [input, setInput] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', text: "Habari! I'm your Afya Assistant. How are you feeling today?", time: 'Just now' }
  ]);
  const [currentDoctorSummary, setCurrentDoctorSummary] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const messages = [
    { from: 'Nurse Wanjiku', text: 'Habari Aisha, I will be arriving in about 10 minutes. Please have your card ready.', time: '09:44 AM', unread: true },
    { from: 'System', text: 'Your ANC booking for Thursday 29 May has been confirmed.', time: 'Yesterday', unread: false },
    { from: 'Dr. Omolo', text: 'The lab results look stable, but keep taking the iron supplements.', time: '2 days ago', unread: false },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [aiMessages, isTyping]);

  const handleSendSymptom = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setAiMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/ai/symptoms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          symptoms: input,
          history: aiMessages 
        })
      });
      const data = await response.json();
      
      setCurrentDoctorSummary(data.doctorSummary);
      setAiMessages(prev => [...prev, { 
        role: 'assistant', 
        text: data.patientResponse, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } catch (error) {
      setAiMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "I'm having trouble connecting to the clinic. Please try again or call your nurse directly.", 
        time: 'Now' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-text">Messages</h1>
        <div className="flex bg-surface2 p-1 rounded-lg border border-black/5">
          <button 
            onClick={() => setActiveTab('chats')}
            className={`px-4 py-1.5 rounded-md text-[13px] font-bold transition-all ${activeTab === 'chats' ? 'bg-white shadow-sm text-teal' : 'text-text3'}`}
          >
            Clinical Chats
          </button>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-1.5 rounded-md text-[13px] font-bold transition-all flex items-center gap-2 ${activeTab === 'ai' ? 'bg-white shadow-sm text-teal' : 'text-text3'}`}
          >
            <IconSparkles size={14} /> AI Assistant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
         {/* Conversations List */}
         <Card className="lg:col-span-1 p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-black/5 font-bold text-[14px]">
               {activeTab === 'chats' ? 'Active Conversations' : 'Symptom History'}
            </div>
            <div className="divide-y divide-black/5 overflow-y-auto">
               {activeTab === 'chats' ? messages.map((m, i) => (
                  <div key={i} className={`p-4 cursor-pointer hover:bg-surface2 transition-colors ${m.unread ? 'bg-blue/5' : ''}`}>
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-[13px] font-bold">{m.from}</span>
                        <span className="text-[10px] text-text3">{m.time}</span>
                     </div>
                     <p className="text-[12px] text-text2 truncate">{m.text}</p>
                  </div>
               )) : (
                  <div className="p-8 text-center space-y-3">
                     <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-teal mx-auto">
                        <IconStethoscope size={24} />
                     </div>
                     <p className="text-[12px] text-text3">Your AI conversations are private and only shared with your doctor when symptoms are reported.</p>
                  </div>
               )}
            </div>
         </Card>

         {/* Chat Window */}
         <Card className="lg:col-span-2 flex flex-col p-0 overflow-hidden bg-surface2/30 relative">
            {activeTab === 'chats' ? (
              // Normal Chat
              <>
                <div className="p-4 bg-white border-b border-black/5 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center text-teal font-bold text-xs">NW</div>
                   <div>
                      <div className="text-[13px] font-bold">Nurse Wanjiku</div>
                      <div className="text-[10px] text-green font-medium flex items-center gap-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-green"></div> Online
                      </div>
                   </div>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                   <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] border border-black/5">
                         <p className="text-[13px]">Habari Aisha, I will be arriving in about 10 minutes. Please have your card ready.</p>
                         <div className="text-[10px] text-text3 mt-1">09:44 AM</div>
                      </div>
                   </div>
                   <div className="flex justify-end">
                      <div className="bg-blue text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                         <p className="text-[13px]">Asante Nurse. I am ready.</p>
                         <div className="text-[10px] text-white/70 mt-1">09:46 AM</div>
                      </div>
                   </div>
                </div>
              </>
            ) : (
              // AI Chatbot
              <>
                <div className="p-4 bg-teal text-white flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <IconRobot size={20} />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold">Afya AI Assistant</div>
                        <div className="text-[10px] text-white/80">Always here to help</div>
                      </div>
                   </div>
                   <IconSparkles size={18} className="opacity-50" />
                </div>

                <div ref={scrollRef} className="flex-1 p-6 space-y-4 overflow-y-auto scroll-smooth">
                   {aiMessages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                         <div className={`p-3 rounded-2xl shadow-sm max-w-[85%] ${
                           m.role === 'user' 
                           ? 'bg-blue text-white rounded-tr-none' 
                           : 'bg-white border border-black/5 rounded-tl-none'
                         }`}>
                            <p className="text-[13px] leading-relaxed">{m.text}</p>
                            <div className={`text-[10px] mt-1 ${m.role === 'user' ? 'text-white/70' : 'text-text3'}`}>
                              {m.time}
                            </div>
                         </div>
                      </div>
                   ))}
                   {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-black/5">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-text3 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-text3 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1.5 h-1.5 bg-text3 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                   )}
                </div>

                {currentDoctorSummary && (
                  <div className="px-6 py-2 bg-teal/5 border-t border-teal/10 animate-in slide-in-from-bottom-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-teal uppercase tracking-wider">
                      <IconStethoscope size={14} /> Clinical Summary Updated
                    </div>
                    <p className="text-[11px] text-teal/80 italic line-clamp-1">{currentDoctorSummary}</p>
                  </div>
                )}
              </>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-black/5">
               <div className="flex items-center gap-2 bg-surface2 rounded-full px-4 py-2 border border-black/5 focus-within:border-teal transition-all">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (activeTab === 'ai' ? handleSendSymptom() : null)}
                    placeholder={activeTab === 'ai' ? "Describe how you're feeling..." : "Type a message..."}
                    className="flex-1 bg-transparent outline-none text-[13px]"
                  />
                  <button 
                    onClick={activeTab === 'ai' ? handleSendSymptom : null}
                    className="text-teal hover:text-teal-dark transition-colors disabled:opacity-30"
                    disabled={!input.trim() || isTyping}
                  >
                     <IconSend size={20} />
                  </button>
               </div>
               {activeTab === 'ai' && (
                 <p className="text-[10px] text-center text-text3 mt-2">
                   This is an AI assistant. In case of emergency, call 911 or your local emergency number immediately.
                 </p>
               )}
            </div>
         </Card>
      </div>
    </motion.div>
  );
};

export default SupportMessages;
