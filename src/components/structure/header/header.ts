import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";

export type HeaderProps = HTMLAttributes<"header"> &
  VariantProps<typeof headerVariants> & { };

export const headerVariants = cva("header", {
  variants: {
    variant: {
      default: "border-b-foreground/20 border-[0.5px] px-4 lg:px-6 py-2.5",
      floating: "container max-w-screen-xl mx-auto rounded-lg shadow m-4 border-b-foreground/20 border-[0.5px]"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
