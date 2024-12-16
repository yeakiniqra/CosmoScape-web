import { useState, useRef, useCallback } from "react";
import { startChatSession } from "../lib/geminiClient";

export const useChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any | null>(null);

  const initializeChat = useCallback(async () => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = await startChatSession();
    }
  }, []);

  const formatResponseToBold = (response: string): string => {
    return response
      .replace(/\* \*\*(.*?)\*\*/g, '**$1**') 
      .replace(/\*\*(.*?)\*\*/g, '**$1**'); 
  };

  const sendMessage = useCallback(
    async (input: string) => {
      setIsLoading(true);
      try {
        await initializeChat();
        const response = await chatSessionRef.current.sendMessage(input);
        const formattedResponse = formatResponseToBold(await response.response.text());
        
        setMessages((prev) => [
          ...prev,
          { role: "user", content: input },
          { role: "model", content: formattedResponse },
        ]);
      } catch (error) {
        console.error("Error in sending message:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [initializeChat]
  );

  return { messages, sendMessage, isLoading };
};