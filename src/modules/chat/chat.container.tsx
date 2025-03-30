import { useEffect, useState } from "react";

import { ChatComponent, Message } from "./chat.component";
import { getMessages } from "./services/get-messages";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // const mocked = [
  //   {
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
  //     from: Sender.client,
  //   },
  //   {
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc",
  //     from: Sender.server,
  //   },
  //   {
  //     from: Sender.server,
  //     images: [
  //       "https://fastly.picsum.photos/id/218/200/300.jpg?hmac=S2tW-K1x-k9tZ7xyNVAdnie_NW9LJEby6GBgYpL7kfo",
  //       "https://fastly.picsum.photos/id/177/200/200.jpg?hmac=785Vry8HsdS9dQ7mFYbwV8bR2tWVtzJWWl9YLp6L0n8",
  //       "https://fastly.picsum.photos/id/790/400/200.jpg?hmac=shM_MMjHuvTd72jZnYDD0qhxymOjg31EDXYchslnUuQ",
  //     ],
  //   },
  // ]

  const fetchData = async (prompt: string) => {
    const data = await getMessages(prompt);

    setMessages(data as any);
  };

  const handleSubmit = async (message: string) => {
    if (message.trim() !== "") {
      // setMessages([...messages, message]);
      await fetchData(message);
    }
  };

  useEffect(() => {
    fetchData("test");
  }, []);

  return <ChatComponent onSubmit={handleSubmit} messages={messages} />;
};
