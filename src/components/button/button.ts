import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";

export type ButtonAs = "button" | "a";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-gray-200 hover:text-accent-foreground transition-bg ease-in-out",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "py-2 px-1 rounded-full bg-gray-200 dark:bg-gray-600",
        "icon-ghost":
          "py-2 px-1 rounded-full bg-gray-600/10 text-black dark:text-white hover:bg-gray-30/100 dark:hover:bg-gray-500/10",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
    compoundVariants: [
      { variant: "default", size: "md", class: "capitalize font-semibold" },
    ],
  }
);

export type ButtonProps = HTMLAttributes<"button"> &
  VariantProps<typeof buttonVariants> & { as?: ButtonAs };
