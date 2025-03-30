import { useState } from "react";

import { ChatComponent, Message, Sender } from "./chat.component";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.client,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.server,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.client,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.server,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.client,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
      from: Sender.server,
    },
  ]);

  const handleSubmit = async (message: string) => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
    }
  };

  return <ChatComponent onSubmit={handleSubmit} messages={messages} />;
};
