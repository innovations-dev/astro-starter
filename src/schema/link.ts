import { z, defineCollection, type CollectionEntry } from "astro:content";

const linkSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  icon: z.string(),
});

export const link = defineCollection({
  type: "data",
  schema: linkSchema,
});

export type Link = CollectionEntry<"link">;
