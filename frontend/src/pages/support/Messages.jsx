import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, RiskPill } from '../../components/ui/Cards';
import { messages as mockMessages } from '../../mockData';
import { 
  IconSend, 
  IconSparkles, 
  IconStethoscope,
  IconRobot,
  IconCircleCheckFilled,
  IconMicrophone
} from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-10">
      <div className="flex justify-between items-end border-b border-border/40 pb-8">
        <div>
          <h1 className="text-4xl journal-title text-foreground italic">Clinical Communication</h1>
          <p className="text-[12px] text-muted-foreground mt-2 font-black uppercase tracking-[0.2em] opacity-60">Direct link to your healthcare providers and AI guidance</p>
        </div>
        <div className="flex bg-secondary/50 p-1.5 rounded-2xl border border-border/50 shadow-inner backdrop-blur-sm">
          <button 
            onClick={() => setActiveTab('chats')}
            className={`px-6 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all ${activeTab === 'chats' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Care Team
          </button>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'ai' ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <IconSparkles size={16} /> AI Mentor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 flex-1 min-h-0">
         {/* Conversations List */}
         <Card className="lg:col-span-1 !p-0 overflow-hidden flex flex-col border-border/40 shadow-sm bg-card/30 backdrop-blur-sm">
            <div className="p-6 border-b border-border/30 bg-secondary/30 font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground opacity-60">
               {activeTab === 'chats' ? 'Active Care Threads' : 'Diagnostic History'}
            </div>
            <div className="divide-y divide-border/20 overflow-y-auto custom-scrollbar">
               {activeTab === 'chats' ? mockMessages.map((m, i) => (
                  <div key={i} className={`p-6 cursor-pointer hover:bg-white transition-all relative group ${m.role === 'hw' ? 'bg-primary/5' : ''}`}>
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{m.sender}</span>
                        <span className="text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-60">{m.time}</span>
                     </div>
                     <p className="text-[13px] text-muted-foreground truncate leading-relaxed italic font-editorial">"{m.text}"</p>
                     {m.role === 'hw' && <div className="absolute left-0 top-0 w-1 h-full bg-primary opacity-50"></div>}
                  </div>
               )) : (
                  <div className="p-12 text-center space-y-6">
                     <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mx-auto shadow-sm border border-primary/5">
                        <IconStethoscope size={36} stroke={1.5} />
                     </div>
                     <p className="text-[14px] text-muted-foreground font-editorial italic leading-relaxed px-6 opacity-70">
                       "Your AI interactions are encrypted and only accessible by your clinical coordinator when a risk is detected."
                     </p>
                  </div>
               )}
            </div>
         </Card>

         {/* Chat Window */}
         <Card className="lg:col-span-2 flex flex-col !p-0 overflow-hidden bg-background/50 relative border-border/40 shadow-2xl">
            {activeTab === 'chats' ? (
              <>
                <div className="p-6 bg-white/80 border-b border-border/40 flex items-center justify-between shadow-sm backdrop-blur-md">
                   <div className="flex items-center gap-5">
                      <Avatar className="w-12 h-12 rounded-2xl shadow-lg shadow-primary/10 border border-primary/5">
                        <AvatarFallback className="bg-primary text-white font-black text-[13px]">NW</AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                         <div className="text-[16px] font-bold text-foreground tracking-tight">Nurse Wanjiku</div>
                         <div className="text-[9px] text-green font-black flex items-center gap-2 uppercase tracking-[0.2em]">
                            <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span> Unit Online
                         </div>
                      </div>
                   </div>
                </div>
                <div className="flex-1 p-10 space-y-8 overflow-y-auto custom-scrollbar">
                   <div className="flex justify-start">
                      <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm max-w-[80%] border border-border/40">
                         <p className="text-[15px] text-foreground/80 leading-relaxed font-medium">Habari Aisha, I will be arriving in about 10 minutes. Please have your clinical card ready.</p>
                         <div className="text-[9px] text-muted-foreground mt-3 font-black uppercase tracking-widest opacity-40">09:44 AM</div>
                      </div>
                   </div>
                   <div className="flex justify-end">
                      <div className="bg-blue text-white p-5 rounded-3xl rounded-tr-none shadow-xl shadow-blue/20 max-w-[80%]">
                         <p className="text-[15px] leading-relaxed font-medium">Asante Nurse. I am ready with the records.</p>
                         <div className="text-[9px] text-white/50 mt-3 font-black uppercase tracking-widest">09:46 AM</div>
                      </div>
                   </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-6 bg-primary text-white flex items-center justify-between shadow-lg shadow-primary/20">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/10 shadow-inner">
                        <IconRobot size={28} stroke={1.5} />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[16px] font-bold tracking-tight">Afya AI Mentor</div>
                        <div className="text-[9px] text-white/60 font-black uppercase tracking-[0.2em]">Clinical Protocol v2.4</div>
                      </div>
                   </div>
                   <IconSparkles size={24} className="opacity-40 animate-pulse" />
                </div>

                <div ref={scrollRef} className="flex-1 p-10 space-y-8 overflow-y-auto scroll-smooth custom-scrollbar bg-secondary/20">
                   {aiMessages.map((m, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={i} 
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                         <div className={`p-5 rounded-3xl shadow-sm max-w-[85%] border transition-all ${
                           m.role === 'user' 
                           ? 'bg-blue text-white rounded-tr-none shadow-blue/10 border-blue/10' 
                           : 'bg-white border-border/40 rounded-tl-none'
                         }`}>
                            <p className={`text-[15px] leading-relaxed ${m.role === 'user' ? 'font-medium' : 'font-editorial italic text-foreground/80'}`}>{m.text}</p>
                            <div className={`text-[9px] mt-3 font-black uppercase tracking-widest ${m.role === 'user' ? 'text-white/50' : 'text-muted-foreground opacity-40'}`}>
                              {m.time}
                            </div>
                         </div>
                      </motion.div>
                   ))}
                   {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-border/40 shadow-sm">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                      </div>
                   )}
                </div>

                <AnimatePresence>
                  {currentDoctorSummary && (
                    <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      className="px-8 py-4 bg-primary-foreground border-t border-primary/10 shadow-[0_-8px_32px_rgba(15,110,86,0.05)]"
                    >
                      <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-1.5">
                        <IconCircleCheckFilled size={16} /> Clinical Digest Synced
                      </div>
                      <p className="text-[13px] text-primary/80 italic font-editorial line-clamp-1 leading-relaxed">"{currentDoctorSummary}"</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Input Area */}
            <div className="p-8 bg-white border-t border-border/40 backdrop-blur-md">
               <div className="flex items-center gap-4 bg-secondary/50 rounded-3xl px-6 py-4 border border-border/30 focus-within:border-primary/40 focus-within:bg-white focus-within:shadow-[0_0_32px_rgba(15,110,86,0.04)] transition-all">
                  <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (activeTab === 'ai' ? handleSendSymptom() : null)}
                    placeholder={activeTab === 'ai' ? "Describe your symptoms in detail..." : "Message care team..."}
                    className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 text-[15px] font-medium p-0 h-auto"
                  />
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-2xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
                      <IconMicrophone size={20} />
                    </Button>
                    <Button 
                      onClick={activeTab === 'ai' ? handleSendSymptom : null}
                      size="icon"
                      className="w-12 h-12 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 shrink-0"
                      disabled={!input.trim() || isTyping}
                    >
                       <IconSend size={22} stroke={2} />
                    </Button>
                  </div>
               </div>
               {activeTab === 'ai' && (
                 <p className="text-[9px] text-center text-muted-foreground mt-4 font-black uppercase tracking-[0.3em] opacity-40">
                   Clinical AI Advisor · For informational purposes only
                 </p>
               )}
            </div>
         </Card>
      </div>
    </motion.div>
  );
};

export default SupportMessages;
