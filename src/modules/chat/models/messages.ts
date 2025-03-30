import { z } from "zod";

export const getMessagesResponse = z.object({
  id: z.number().optional(),
});
