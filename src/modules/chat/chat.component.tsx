import { useState } from "react";
import { clsx } from "clsx";
import { MdFullscreen } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

import { useI18n } from "@/infrastructure/i18n";

export enum Sender {
  client = "CLIENT",
  server = "SERVER",
}

export type Message = {
  message?: string;
  from: Sender;
  images?: string[];
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
          {messages.map(({ message, from, images }, index) => (
            <div key={index}>
              {message && (
                <div
                  className={clsx("rounded-lg p-4 relative", {
                    ["bg-background-neutral-primary rounded-tr-none ml-4"]:
                      from === Sender.client,
                    ["bg-background-neutral-secondary rounded-tl-none mr-4"]:
                      from === Sender.server,
                  })}
                >
                  <span className="text-text">{message}</span>
                </div>
              )}
              {images && (
                <div className="grid grid-cols-3 gap-3">
                  {images.map((src) => (
                    <div className="relative">
                      <img
                        src={src}
                        className="aspect-square rounded-2xl h-full w-full"
                      />
                      <button
                        className={`
                        cursor-pointer absolute -right-2 -top-2 bg-icon transition-all
                        border-none rounded-full text-text hover:bg-icon-hover z-20
                      `}
                      >
                        <MdFullscreen className="h-6 w-6" />
                      </button>
                      <button
                        className={`
                          absolute left-0 top-0 z-10 hover:opacity-100 opacity-0 text-text cursor-pointer border-none
                          bg-[rgba(0,0,0,0.3)] h-full w-full rounded-2xl flex items-center justify-center transition-all
                        `}
                      >
                        <IoMdHeartEmpty className="h-6 w-6" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
