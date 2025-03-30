import { z } from "zod";

const result = z.object({
  image_base64: z.string(),
});

export const getMessagesResponse = z.object({
  request_id: z.string(),
  results: z.array(result),
});

export type GetMessages = z.infer<typeof getMessagesResponse>;
