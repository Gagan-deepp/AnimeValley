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
        'button-bg': `linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)`,
        'card-shadow': `linear-gradient(to bottom, transparent 0%, black 100%)`,
        'bg-main': `radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%);`,
        'bg-shadow': `radial-gradient(circle farthest-side, transparent 65%, #060d17), linear-gradient(0deg, #060d17, transparent 60px);`,

        'button-hover': `linear-gradient(to right, #ffafbd, #ffc3a0)`,
        'form_bg': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
        'gradient-purple': 'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
        'text-gradient': 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,101,133,1) 0%, rgba(255,211,165,1) 90% );',
      },
      colors: {
        'mainColor': '#383143',
        'mainColor-2': '#322d37a1',
        'light-white': '#5b5464',
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
        "dark-2": "#322d37a1",
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
        "gray-6": "#484d45",
        glassmorphism: "rgba(255, 255, 255, 0.2)",
        glassmorphism2: "rgba( 0, 0, 0, 0.25 )",
        glassmorphism3: "rgba( 0, 0, 0, 0.4 )",
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