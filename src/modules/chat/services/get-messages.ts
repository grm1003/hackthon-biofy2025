import { z } from "zod";

import { request } from "@/infrastructure/network";

import { ErrorGettingMessages } from "../exceptions/messages";
import { getMessagesResponse } from "../models/messages";

export async function getMessages(prompt: string) {
  const response = await request<{
    messages: any;
  }>("/generate_image", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  const { error: modelFail, data: messages } = z
    .array(getMessagesResponse)
    .safeParse(response.messages);

  console.log(modelFail, messages);

  if (modelFail) {
    throw new ErrorGettingMessages();
  }

  return { data: messages };
}
