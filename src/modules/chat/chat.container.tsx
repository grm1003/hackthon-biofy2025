import { useState } from "react";

import { ChatComponent, Message, Sender } from "./chat.component";
import { getMessages } from "./services/get-messages";
import { GetMessages } from "./models/messages";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchData = async (prompt: string) => getMessages(prompt);

  const handleSubmit = async (message: string) => {
    if (message.trim() !== "") {
      const newMessages = [...messages, { message, from: Sender.client }];
      setMessages(newMessages);

      fetchData(message).then((response: GetMessages) => {
        setMessages([
          ...newMessages,
          {
            from: Sender.server,
            images: response.results.map(({ image_base64 }) => image_base64),
          },
        ]);
      });
    }
  };

  return <ChatComponent onSubmit={handleSubmit} messages={messages} />;
};
