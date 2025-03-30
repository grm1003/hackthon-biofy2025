import { useState } from "react";

import { ChatComponent } from "./chat.component";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (message: string) => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
    }
  };

  return <ChatComponent onSubmit={handleSubmit} messages={messages} />;
};
