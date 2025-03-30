import { useI18n } from "@/infrastructure/i18n";
import { useState } from "react";

export const ContentContainer = () => {
  const { scopedT } = useI18n();
  const t = scopedT("landpage");

  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
  <div className="flex justify-center h-[calc(100vh-48px)]">
    <div className="w-2/3 flex flex-col h-full justify-center bg-black rounded-lg shadow-lg p-8">
      <div className="flex-1 overflow-y-auto border border-white rounded p-4 mb-4 scrollbar-black">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="block bg-blue-200 p-2 rounded">{message}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          placeholder="Digite sua mensagem..."
          className="flex-1 border bg-blue-200 rounded-full p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="hover:bg-blue-700 bg-white px-6 py-3 rounded-full shadow-md transition-all"
        >
          Send
        </button>
      </div>
    </div>
  </div>
  );
};
