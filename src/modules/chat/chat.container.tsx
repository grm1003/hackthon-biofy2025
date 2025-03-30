import { useState } from "react";

import { ChatComponent, Message, Sender } from "./chat.component";
import { getMessages } from "./services/get-messages";
import { GetMessages } from "./models/messages";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (prompt: string) => getMessages(prompt);

  const handleSubmit = async (message: string) => {
    setLoading(true);

    try {
      if (message.trim() !== "") {
        const newMessages = [...messages, { message, from: Sender.client }];
        setMessages(newMessages);

        const response: GetMessages = await fetchData(message);
        setMessages([
          ...newMessages,
          {
            from: Sender.server,
            images: response.results.map(({ image_base64 }) => image_base64),
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatComponent
      onSubmit={handleSubmit}
      messages={messages}
      loading={loading}
    />
  );
};
