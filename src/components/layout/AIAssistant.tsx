"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, X, Send, Bot } from "lucide-react";
import { portfolioData, intents, followUpKeywords } from "@/lib/chatbot-data";

const getRandomResponse = (responses: string[]) => responses[Math.floor(Math.random() * responses.length)];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Aditya's offline AI Assistant. Ask me anything about his skills, experience, or projects." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastIntent, setLastIntent] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const processMessage = (text: string) => {
    const lowerText = text.toLowerCase().trim();
    
    // Check for follow up
    const isFollowUp = followUpKeywords.some(kw => lowerText.includes(kw));
    let matchedIntent: string | null = null;

    if (isFollowUp && lastIntent && lastIntent !== 'greeting') {
      matchedIntent = lastIntent;
    } else {
      // Find highest matching intent based on keyword hits
      let maxHits = 0;
      
      intents.forEach(intentObj => {
        const hits = intentObj.keywords.filter(kw => lowerText.includes(kw)).length;
        if (hits > maxHits) {
          maxHits = hits;
          matchedIntent = intentObj.intent;
        }
      });
    }

    let responseContent = "";

    if (matchedIntent) {
      setLastIntent(matchedIntent);
      switch(matchedIntent) {
        case 'greeting':
          responseContent = "Hello! I'm here to answer questions about Aditya's portfolio. What would you like to know?";
          break;
        case 'about':
          responseContent = getRandomResponse(portfolioData.about);
          break;
        case 'education':
          responseContent = getRandomResponse(portfolioData.education);
          break;
        case 'experience':
          responseContent = getRandomResponse(portfolioData.experience);
          break;
        case 'projects':
          responseContent = getRandomResponse(portfolioData.projects);
          break;
        case 'certifications':
          responseContent = getRandomResponse(portfolioData.certifications);
          break;
        case 'skills':
          responseContent = getRandomResponse(portfolioData.skills);
          break;
        case 'contact':
          responseContent = getRandomResponse(portfolioData.contact);
          break;
      }
    } else {
      // Out of scope or unrecognized
      responseContent = "I'm designed specifically to answer questions about Aditya's portfolio, experience, and skills. Try asking me about his projects, education, or certifications!";
    }

    return responseContent;
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userText = input;
    setMessages(prev => [...prev, { role: "user", content: userText }]);
    setInput("");
    setIsTyping(true);

    // Simulate natural typing delay based on message length (min 600ms, max 1500ms)
    const replyText = processMessage(userText);
    const delay = Math.min(Math.max(replyText.length * 10, 600), 1500);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: replyText }]);
      setIsTyping(false);
    }, delay);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      document.getElementById('chat-form-submit')?.click();
    }, 50);
  };

  const suggestedQuestions = [
    "Who are you?",
    "What are your skills?",
    "Tell me about your experience"
  ];

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <Button 
              size="icon" 
              className="relative w-16 h-16 rounded-full shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] bg-primary hover:bg-primary/90 border border-primary/20"
              onClick={() => setIsOpen(true)}
            >
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[calc(100vh-2rem)] bg-card/95 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/40 bg-background/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                  <Bot className="w-6 h-6 text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight text-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-primary/80 flex items-center gap-1.5 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse shadow-[0_0_8px_#22c55e]"></span> 
                    Offline Mode Ready
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-9 w-9 rounded-full hover:bg-card/80 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-4 text-[15px] leading-relaxed shadow-md ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-br-sm shadow-primary/20" 
                      : "bg-background/80 border border-border/50 text-foreground rounded-bl-sm backdrop-blur-sm"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-background/80 border border-border/50 rounded-2xl rounded-bl-sm p-4 flex items-center gap-1.5 shadow-md backdrop-blur-sm h-12">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Suggested Questions (only show if few messages) */}
            {messages.length < 3 && !isTyping && (
              <div className="px-5 py-3 flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth">
                {suggestedQuestions.map((q, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    onClick={() => handleSuggestedQuestion(q)}
                    className="whitespace-nowrap text-xs font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all shadow-sm"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-5 border-t border-border/40 bg-background/60 backdrop-blur-md">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-end gap-3 relative"
              >
                <div className="relative w-full">
                  <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my experience..." 
                    className="bg-card/80 border-border/60 rounded-xl pr-14 py-6 shadow-sm focus-visible:ring-primary/40 focus-visible:border-primary/50 text-base"
                    autoComplete="off"
                  />
                  <Button 
                    id="chat-form-submit"
                    type="submit" 
                    size="icon" 
                    disabled={!input.trim() || isTyping} 
                    className="absolute right-1.5 bottom-1.5 h-9 w-9 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 shadow-md transition-transform active:scale-95"
                  >
                    <Send className="w-4 h-4 text-primary-foreground -ml-0.5" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
