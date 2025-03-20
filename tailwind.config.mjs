/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "hsl(26, 100%, 55%)",
        orangePale: "hsl(25, 100%, 70%)",
        dark: {
          500: "hsl(220, 13%, 13%)",
          400: "hsl(219, 9%, 45%)",
          300: "hsl(220, 14%, 75%)",
          200: "hsl(223, 64%, 98%)",
          100: "hsl(0, 0%, 100%)",
        },
        newPrimary: "#6363FF",
        newWhite: "#F5F5F5",
        lightBox: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
