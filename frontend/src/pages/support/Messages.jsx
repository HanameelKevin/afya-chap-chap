import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { messages as mockMessages } from '../../mockData';
import { 
  IconSend, 
  IconSparkles, 
  IconStethoscope,
  IconRobot,
  IconCircleCheckFilled
} from '@tabler/icons-react';

const SupportMessages = () => {
  const [activeTab, setActiveTab] = useState('chats'); // 'chats' or 'ai'
  const [input, setInput] = useState('');
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', text: "Habari! I'm your Afya Assistant. Your latest vitals show a BP of 148/96. How are you feeling right now?", time: 'Just now' }
  ]);
  const [currentDoctorSummary, setCurrentDoctorSummary] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

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
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/ai/symptoms`, {
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-8">
      <div className="flex justify-between items-end border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Clinical Communication</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Direct link to your healthcare providers and AI guidance</p>
        </div>
        <div className="flex bg-surface2 p-1 rounded-xl border border-black/5 shadow-inner">
          <button 
            onClick={() => setActiveTab('chats')}
            className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-all ${activeTab === 'chats' ? 'bg-white shadow-md text-teal' : 'text-text3 hover:text-text2'}`}
          >
            Care Team
          </button>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-all flex items-center gap-2 ${activeTab === 'ai' ? 'bg-white shadow-md text-teal' : 'text-text3 hover:text-text2'}`}
          >
            <IconSparkles size={16} /> AI Mentor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
         {/* Conversations List */}
         <Card className="lg:col-span-1 !p-0 overflow-hidden flex flex-col border-black/5 shadow-sm">
            <div className="p-5 border-b border-black/5 bg-surface2/30 font-bold text-[12px] uppercase tracking-widest text-text3">
               {activeTab === 'chats' ? 'Active Care Threads' : 'Diagnostic History'}
            </div>
            <div className="divide-y divide-black/5 overflow-y-auto custom-scrollbar">
               {activeTab === 'chats' ? mockMessages.map((m, i) => (
                  <div key={i} className={`p-5 cursor-pointer hover:bg-surface2 transition-all relative group ${m.role === 'hw' ? 'bg-teal/5' : ''}`}>
                     <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[14px] font-bold text-text group-hover:text-teal transition-colors">{m.sender}</span>
                        <span className="text-[10px] text-text3 font-medium uppercase">{m.time}</span>
                     </div>
                     <p className="text-[12px] text-text2 truncate leading-relaxed italic font-editorial">"{m.text}"</p>
                     {m.role === 'hw' && <div className="absolute left-0 top-0 w-1 h-full bg-teal opacity-50"></div>}
                  </div>
               )) : (
                  <div className="p-10 text-center space-y-4">
                     <div className="w-16 h-16 rounded-3xl bg-teal-light flex items-center justify-center text-teal mx-auto shadow-sm">
                        <IconStethoscope size={32} stroke={1.5} />
                     </div>
                     <p className="text-[13px] text-text3 font-editorial italic leading-relaxed px-4">
                       "Your AI interactions are encrypted and only accessible by your clinical coordinator when a risk is detected."
                     </p>
                  </div>
               )}
            </div>
         </Card>

         {/* Chat Window */}
         <Card className="lg:col-span-2 flex flex-col !p-0 overflow-hidden bg-[#FAFAF8] relative border-black/5 shadow-xl">
            {activeTab === 'chats' ? (
              <>
                <div className="p-5 bg-white border-b border-black/5 flex items-center justify-between shadow-sm">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-teal text-white flex items-center justify-center font-bold text-[13px] shadow-lg shadow-teal/20">NW</div>
                      <div>
                         <div className="text-[15px] font-bold text-text">Nurse Wanjiku</div>
                         <div className="text-[10px] text-green font-black flex items-center gap-1.5 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div> Unit Online
                         </div>
                      </div>
                   </div>
                </div>
                <div className="flex-1 p-8 space-y-6 overflow-y-auto custom-scrollbar">
                   <div className="flex justify-start">
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] border border-black/5">
                         <p className="text-[14px] text-text2 leading-relaxed">Habari Aisha, I will be arriving in about 10 minutes. Please have your clinical card ready.</p>
                         <div className="text-[10px] text-text3 mt-2 font-bold uppercase tracking-tighter">09:44 AM</div>
                      </div>
                   </div>
                   <div className="flex justify-end">
                      <div className="bg-blue text-white p-4 rounded-2xl rounded-tr-none shadow-xl shadow-blue/10 max-w-[80%]">
                         <p className="text-[14px] leading-relaxed">Asante Nurse. I am ready with the records.</p>
                         <div className="text-[10px] text-white/60 mt-2 font-bold uppercase tracking-tighter">09:46 AM</div>
                      </div>
                   </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 bg-teal text-white flex items-center justify-between shadow-lg shadow-teal/10">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center border border-white/10 shadow-inner">
                        <IconRobot size={24} />
                      </div>
                      <div>
                        <div className="text-[15px] font-bold">Afya AI Mentor</div>
                        <div className="text-[10px] text-white/60 font-black uppercase tracking-widest">Clinical Protocol v2.4</div>
                      </div>
                   </div>
                   <IconSparkles size={20} className="opacity-50" />
                </div>

                <div ref={scrollRef} className="flex-1 p-8 space-y-6 overflow-y-auto scroll-smooth custom-scrollbar">
                   {aiMessages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                         <div className={`p-4 rounded-2xl shadow-sm max-w-[85%] ${
                           m.role === 'user' 
                           ? 'bg-blue text-white rounded-tr-none shadow-blue/10' 
                           : 'bg-white border border-black/5 rounded-tl-none'
                         }`}>
                            <p className="text-[14px] leading-relaxed">{m.text}</p>
                            <div className={`text-[10px] mt-2 font-bold uppercase tracking-tighter ${m.role === 'user' ? 'text-white/60' : 'text-text3'}`}>
                              {m.time}
                            </div>
                         </div>
                      </div>
                   ))}
                   {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-black/5">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-teal/40 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-teal/40 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-teal/40 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                   )}
                </div>

                {currentDoctorSummary && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="px-8 py-3 bg-[#F4F9F7] border-t border-teal/10"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-black text-teal uppercase tracking-[0.2em] mb-1">
                      <IconCircleCheckFilled size={14} /> Clinical Digest Synced
                    </div>
                    <p className="text-[12px] text-teal/80 italic font-editorial line-clamp-1">"{currentDoctorSummary}"</p>
                  </motion.div>
                )}
              </>
            )}

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-black/5">
               <div className="flex items-center gap-3 bg-surface2 rounded-2xl px-5 py-3 border border-black/5 focus-within:border-teal/30 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(15,110,86,0.03)] transition-all">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (activeTab === 'ai' ? handleSendSymptom() : null)}
                    placeholder={activeTab === 'ai' ? "Describe your symptoms in detail..." : "Message care team..."}
                    className="flex-1 bg-transparent outline-none text-[14px] font-medium"
                  />
                  <button 
                    onClick={activeTab === 'ai' ? handleSendSymptom : null}
                    className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all disabled:opacity-30 active:scale-90"
                    disabled={!input.trim() || isTyping}
                  >
                     <IconSend size={20} stroke={2} />
                  </button>
               </div>
               {activeTab === 'ai' && (
                 <p className="text-[10px] text-center text-text3 mt-3 font-bold uppercase tracking-widest opacity-60">
                   Clinical AI Advisor · For information only
                 </p>
               )}
            </div>
         </Card>
      </div>
    </motion.div>
  );
};

export default SupportMessages;
