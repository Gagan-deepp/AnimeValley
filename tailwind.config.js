/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {

    fontFamily: {
      'ui-text': ['Ubuntu', 'sans-serif'],
      'ui-text-2': ['Itim', 'sans-serif'],
      'ui-text-3': ['Quicksand', 'sans-serif'],
      'ui-text-4': ['Balsamiq Sans', 'sans-serif'],
      'heading': ["Roboto", 'sans-serif'],
      'heading-2': ["Rubik", 'sans-serif'],
      'heading-design': ["Madimi One", 'sans-serif'],
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'shadow_1': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
      backgroundImage: {
        'button-bg': `linear-gradient(to right, #ffefba, #ffffff)`,
        'button-bg-1': `linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)`,
        'button-bg-2': `linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)`,
        'card-shadow': `linear-gradient(to bottom, transparent 0%, black 100%)`,
        'bg-main': `radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%);`,
        'bg-shadow': `linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0)`,

        'button-hover': `linear-gradient(to right, #ffafbd, #ffc3a0)`,
        'form_bg': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
        'gradient-purple': 'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
        'gradient-button': 'linear-gradient(90deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',

      },
      colors: {
        'color-comment': '#2a2a42',
        'color-pink': '#fc408e',
        'card-bg': '#1d1b26',
        'card-bg-hover': 'rgba(224, 224, 224,0.3)',
        'text-shadow': '#a3a3a3',
        'text-ui': '#879fcb',
        'page-ui': '#bdc1c6',
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#F9F6EF",
        "light-3": "#d8d8d6",
        "light-4": "#a6a1c1",
        "light-5": "#c6c9d6",
        "light-6": "#c6cbd1",
        "light-7": "#fefefe",
        "gray-1": "#697C89",
        "gray-2": "#7a7383",
        "gray-3": "#9e9e9e",
        "gray-4": "#767677",
        "gray-5": "#72728c",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}