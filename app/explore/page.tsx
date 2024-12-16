"use client";
import { ChatProvider } from "@/context/ChatContext";
import Chatbot from "@/components/chat/ChatBot";
import { PageContainer } from "@/components/layout/PageContainer";

export default function Page() {
  return (
    <ChatProvider>
      <>
        <Chatbot />
      </>
    </ChatProvider>
  );
}