import { cva, type VariantProps } from "class-variance-authority";

export const heroVariants = cva("relative flex items-center", {
  variants: {
    variant: {
      default: "flex-col justify-center text-center",
      featured: "flex-col md:flex-row justify-between",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const title = cva("font-bold mb-4", {
  variants: {
    variant: {
      default: "relative isolate px-6 pt-14 lg:px-8",
      fullWidth: "text-4xl md:text-5xl lg:text-6xl leading-tight",
      featured: "text-4xl md:text-5xl lg:text-6xl leading-tight",
    },
    size: {
      sm: "text-3xl",
      md: "text-4xl",
      lg: "text-5xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const description = cva("mb-8", {
  variants: {
    variant: {
      default: "max-w-2xl",
      featured: "text-lg md:text-xl max-w-md",
    },
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
