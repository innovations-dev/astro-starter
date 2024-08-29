import type { Link } from "@/schema/link";
import type { CollectionEntry } from "astro:content";
type entry = CollectionEntry<"link">;
export function getLinks(
  links: Link[],
  category: string,
  currentPath?: string
) {
  if (!links || !links.length) return [];
  return links.map((link) => {
    if (link.subs) {
      return {
        ...link,
        isActive: link.subs.some((sub) => sub.href === currentPath),
      };
    }
    return {
      ...link,
      isActive: link.href === currentPath,
    };
  });
}
