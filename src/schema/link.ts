import { z } from "astro:content";

const _linkSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  href: z.string(),
  icon: z.string().optional(),
  subs: z
    .array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        href: z.string(),
        icon: z.string().optional(),
      })
    )
    .optional(),
});

const linkSchema = _linkSchema.extend({});

export type Link = z.infer<typeof linkSchema>;
