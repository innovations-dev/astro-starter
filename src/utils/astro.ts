import type { Link } from "@/schema/link";

export function getLinks(
  links: Link[],
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
