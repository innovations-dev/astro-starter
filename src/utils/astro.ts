import type { Link } from "@/schema/link";
import { getCollection } from "astro:content";

export function getLinks(
  links: Link[],
  category: string,
  currentPath?: string
) {
  if (!links || !links.length) return [];
  const _links = links.filter((entry: Link) => entry.id === category);
  return _links[0].data.map((link: Link) => {
    if (currentPath) {
      const isHome = link.url === "/";
      return {
        ...link,
        isActive: link.url === currentPath || (isHome && currentPath === ""),
      };
    }
    return link;
  });
}
