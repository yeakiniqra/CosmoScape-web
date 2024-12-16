'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Rocket, Satellite, Star } from 'lucide-react';
import { useChatContext } from "@/context/ChatContext";

// Define the message type
interface Message {
    id: string;
    content: string;
    type: 'user' | 'ai' | 'error';
}

const Chatbot: React.FC = () => {
    const { messages, sendMessage, isLoading } = useChatContext();
    const [input, setInput] = useState("");
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<JSX.Element[]>([]);


    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const starElements = [...Array(100)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                        transition: {
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }
                    }}
                    className="absolute w-1 h-1 bg-white/50 rounded-full"
                />
            ));
            setStars(starElements);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            await sendMessage(input);
            setInput("");
        }
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const backgroundVariants = {
        initial: {
            background: 'linear-gradient(135deg, #0a192f, #020c1b)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite'
        },
        animate: {
            background: 'linear-gradient(135deg, #0a192f, #1a2980, #020c1b)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite'
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={backgroundVariants}
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#0a192f] via-[#1a2980] to-[#020c1b] p-4"
        >
            <div className="w-full max-w-2xl bg-[#0a192f]/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#1a2980]/50 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-[#1a2980]/30 p-4 flex items-center space-x-4">
                    <Rocket className="text-white w-10 h-10" />
                    <h2 className="text-2xl font-bold text-white tracking-wider">
                        NASA Space Exploration Chat
                    </h2>
                    <Satellite className="text-white w-8 h-8 ml-auto" />
                </div>

                {/* Chat Messages Container */}
                <div
                    ref={chatContainerRef}
                    className="h-[500px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-[#0a192f] scrollbar-thumb-[#1a2980]"
                >
                    <AnimatePresence>
                        {messages.map((msg: Message, index: number) => (
                            <motion.div
                                key={`${index}-${msg.id}`}
                                variants={messageVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`flex ${msg.type === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                    }`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl shadow-lg ${msg.type === 'user'
                                            ? 'bg-[#129ba5] text-white'
                                            : 'bg-[#144358] text-gray-200'
                                        }`}
                                >
                                    {/* Use dangerouslySetInnerHTML for rendering HTML content */}
                                    <div
                                        dangerouslySetInnerHTML={{ __html: msg.content }}
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                            >
                                <div className="bg-[#1a2980]/50 text-white p-3 rounded-2xl flex items-center space-x-2">
                                    <Star className="animate-pulse text-yellow-400" />
                                    <span>Generating cosmic insights...</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <form
                    onSubmit={handleSubmit}
                    className="p-4 bg-[#1a2980]/30 flex items-center space-x-4"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Explore the universe of knowledge..."
                        disabled={isLoading}
                        className="flex-grow p-3 bg-[#0a192f]/50 text-white rounded-full border border-[#1a2980]/50 focus:outline-none focus:ring-2 focus:ring-[#00f2fe]"
                    />
                    <motion.button
                        type="submit"
                        disabled={isLoading || input.trim() === ''}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white p-3 rounded-full disabled:opacity-50"
                    >
                        <Send className="w-6 h-6" />
                    </motion.button>
                </form>
            </div>

            {/* Starry Background Effect */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                {stars}
            </div>
        </motion.div>
    );
};

export default Chatbot;