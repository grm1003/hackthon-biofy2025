import { useState } from "react";
import { clsx } from "clsx";

import { useI18n } from "@/infrastructure/i18n";

export enum Sender {
  client = "CLIENT",
  server = "SERVER",
}

export type Message = {
  message: string;
  from: Sender;
};

type ChatComponentProps = {
  onSubmit: (message: string) => Promise<void>;
  messages: Message[];
};

export const ChatComponent = (props: ChatComponentProps) => {
  const { onSubmit, messages } = props;

  const [newMessage, setNewMessage] = useState("");

  const { scopedT } = useI18n();
  const t = scopedT("chat");

  return (
    <div className="flex justify-center h-[calc(100vh-96px)]">
      <div className="w-2/3 flex flex-col justify-end my-8 bg-background rounded-2xl shadow-lg p-4">
        <div className="flex flex-col gap-4 overflow-y-auto border border-white rounded px-3 mt-3 mb-10 scrollbar-black">
          {messages.map(({ message, from }, index) => (
            <div
              key={index}
              className={clsx("rounded-lg p-4 relative", {
                ["bg-background-neutral-primary rounded-tr-none ml-4"]:
                  from === Sender.client,
                ["bg-background-neutral-secondary rounded-tl-none mr-4"]:
                  from === Sender.server,
              })}
            >
              <span className="text-text">{message}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <textarea
            rows={1}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit(newMessage);
            }}
            placeholder={t("placeholder")}
            className={`
              bg-textarea rounded-full p-3 outline-none border-none w-full resize-y
              focus:outline-[rgb(137,180,250,0.5)] transition-all text-text font-body
              sm:text-body-small md:text-body-medium lg:text-body-large
            `}
          />
          <button
            onClick={() => onSubmit(newMessage)}
            className={`
              bg-button text-text-inverse p-3 rounded-full hover:bg-button-hover 
              sm:text-body-small md:text-body-medium lg:text-body-large !font-medium
              cursor-pointer transition-all border-none focus:outline-[rgb(137,180,250,0.5)]
            `}
          >
            {t("submit")}
          </button>
        </div>
      </div>
    </div>
  );
};
