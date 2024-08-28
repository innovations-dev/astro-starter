import { z, defineCollection, type CollectionEntry } from "astro:content";

const brandSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  icon: z.string(),
});

export const brand = defineCollection({
  type: "data",
  schema: brandSchema,
});

export type Brand = CollectionEntry<"brand">;