"use client";
import { ChatProvider } from "@/context/ChatContext";
import Chatbot from "@/components/chat/ChatBot";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";


export default function Page() {
  const loading = false;
   
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ChatProvider>
      <>
        <Chatbot />
      </>
    </ChatProvider>
  );
}