import z from "zod";

export const podCastType = z.object({
  podCastTitle: z.string().min(3),
  podcastDescription: z.string().min(3),
});
