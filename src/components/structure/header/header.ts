import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";

export type HeaderProps = HTMLAttributes<"header"> &
  VariantProps<typeof headerVariants> & {};

export const headerVariants = cva("header", {
  variants: {
    variant: {
      default:
        "relative border-b-foreground/20 border-[0.5px] px-4 lg:px-6 py-2.5",
      floating:
        "fixed container max-w-screen-lg top-5 left-0 right-0 z-50 w-full py-2 shadow-[5px_5px_10px_-5px_foreground] backdrop-blur-md border-foreground/20 border-[0.5px] rounded-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
