/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      keyframes: {
        parallax: {
          "0%": { transform: "translateY(0)" },
          "100%": {
            transform: "translateY(calc(var(--parallax-direction) * var(--parallax-speed)))"
          }
        },
        "slide-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" }
        }
      },
      animation: {
        parallax: "parallax 1s linear infinite alternate",
        "slide-from-bottom": "slide-from-bottom 1s ease-in-cubic-gs",
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite"
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)"
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.645,0.045,0.355,1)",
        "in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
        "out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
        "in-out-sine": "cubic-bezier(0.37, 0, 0.63, 1)",
        "in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
        "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
        "in-out-quad": "cubic-bezier(0.45, 0, 0.55, 1)",
        "in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "in-cubic-gs": "cubic-bezier(0.25, 1, 0.87, 0.85)",
        "out-cubic-gs": "cubic-bezier(0.25, 1, 0.87, 0.85)"
      }
    },
    variants: {
      extend: {
        animation: ["motion-safe"]
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@adam.plesnik/tailwindcss-scroll-driven-animations")]
};
