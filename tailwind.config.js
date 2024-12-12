/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        night: {
          DEFAULT: "#0a090c",
          100: "#020202",
          200: "#040405",
          300: "#060507",
          400: "#080709",
          500: "#0a090c",
          600: "#383343",
          700: "#675d7b",
          800: "#998fab",
          900: "#ccc7d5",
        },
        "anti-flash_white": {
          DEFAULT: "#f0edee",
          100: "#342c2f",
          200: "#69575d",
          300: "#9a868c",
          400: "#c5babe",
          500: "#f0edee",
          600: "#f4f2f2",
          700: "#f7f5f6",
          800: "#f9f8f9",
          900: "#fcfcfc",
        },
        midnight_green: {
          DEFAULT: "#07393c",
          100: "#010b0c",
          200: "#031718",
          300: "#042224",
          400: "#062d2f",
          500: "#07393c",
          600: "#10858b",
          700: "#1ad1da",
          800: "#60e5ec",
          900: "#b0f2f6",
        },
        caribbean_current: {
          DEFAULT: "#2c666e",
          100: "#091416",
          200: "#11292c",
          300: "#1a3d42",
          400: "#235158",
          500: "#2c666e",
          600: "#4095a0",
          700: "#66b7c2",
          800: "#99cfd6",
          900: "#cce7eb",
        },
        non_photo_blue: {
          DEFAULT: "#90ddf0",
          100: "#093843",
          200: "#126f87",
          300: "#1ca7ca",
          400: "#4bc8e7",
          500: "#90ddf0",
          600: "#a5e3f3",
          700: "#bceaf6",
          800: "#d2f1f9",
          900: "#e9f8fc",
        },
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
};