"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles, User, Code, Mail, Briefcase, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const QUESTIONS = [
    { id: 'bio', label: "Who is Archit?", icon: User, text: "Tell me about Archit." },
    { id: 'projects', label: "Show Projects", icon: Code, text: "What projects has he built?" },
    { id: 'skills', label: "Core Skills", icon: Briefcase, text: "What are his main technical skills?" },
    { id: 'contact', label: "Contact Info", icon: Mail, text: "How can I contact him?" },
];

export function DigitalSelf() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
        { role: "ai", content: "Hi! I'm Archit's Digital Self. Tap a topic below to learn more about me!" }
    ]);
    const [isTyping, setIsTyping] = React.useState(false);
    const bottomRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleAsk = (q: typeof QUESTIONS[0]) => {
        setMessages(prev => [...prev, { role: "user", content: q.text }]);
        setIsTyping(true);

        setTimeout(() => {
            let response = "";
            switch (q.id) {
                case 'bio':
                    response = "Archit is a Computer Science student and IT professional from Ludhiana, India (currently in Canada). He loves building future-ready tech!";
                    break;
                case 'projects':
                    response = "He has built impressive systems like a Private Cloud Infrastructure, a real-time Emotion Recognition AI, and self-hosted media servers. Check the Projects section for details.";
                    break;
                case 'skills':
                    response = "He's proficient in Python, C++, Next.js, CloudOps (Azure), and networking standards like Cisco IOS. A true full-stack engineer!";
                    break;
                case 'contact':
                    response = "You can shoot him an email at arrchitt@gmail.com or connect on LinkedIn. He's always open to interesting conversations.";
                    break;
            }
            setMessages(prev => [...prev, { role: "ai", content: response }]);
            setIsTyping(false);
        }, 1200);
    };

    const handleReset = () => {
        setMessages([{ role: "ai", content: "Hi! I'm Archit's Digital Self. Tap a topic below to learn more about me!" }]);
    };

    return (
        <>
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ rotate: 10 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
                    >
                        <div className="p-4 border-b border-border/50 bg-primary/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm">Digital Self AI</span>
                            </div>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={handleReset} title="Reset Chat">
                                <RefreshCw className="w-3 h-3" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={cn(
                                            "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                            m.role === 'user'
                                                ? "bg-primary text-primary-foreground rounded-br-sm"
                                                : "bg-muted text-foreground rounded-bl-sm"
                                        )}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" />
                                        <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce delay-100" />
                                        <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        <div className="p-3 border-t border-border/50 bg-card/50">
                            <div className="grid grid-cols-2 gap-2">
                                {QUESTIONS.map((q) => (
                                    <button
                                        key={q.id}
                                        onClick={() => handleAsk(q)}
                                        disabled={isTyping}
                                        className="flex items-center gap-2 p-2 text-xs font-medium bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-lg transition-colors text-left disabled:opacity-50"
                                    >
                                        <q.icon className="w-3 h-3 shrink-0" />
                                        {q.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
