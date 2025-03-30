import { request } from "@/infrastructure/network";

import { ErrorGettingMessages } from "../exceptions/messages";
import { GetMessages, getMessagesResponse } from "../models/messages";

export async function getMessages(prompt: string) {
  const response = await request<GetMessages>("", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  const { error: modelFail, data } = getMessagesResponse.safeParse(response);

  if (modelFail) {
    throw ErrorGettingMessages;
  }

  return data;
}
