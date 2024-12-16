import React, { createContext, useContext } from "react";
import { useChat } from "../hooks/useChat";

const ChatContext = createContext<any | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const chat = useChat();
  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};