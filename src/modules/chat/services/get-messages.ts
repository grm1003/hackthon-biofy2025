import { z } from "zod";

import { privateRequest } from "@/infrastructure/network";

import { ErrorGettingMessages } from "../exceptions/messages";
import { getMessagesResponse } from "../models/messages";

export async function getMessages() {
  const response = await privateRequest<{
    messages: any;
  }>("/chat/messages");

  const { error: modelFail, data: messages } = z
    .array(getMessagesResponse)
    .safeParse(response.messages);

  console.log(modelFail, messages);

  if (modelFail) {
    throw new ErrorGettingMessages();
  }

  return { data: messages };
}
