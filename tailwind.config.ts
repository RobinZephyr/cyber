import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "320px",
      sm: "376px",
      md: "500px",
      xmd: "600px",
      lg: "768px",
      xl: "992px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      anton: ["Anton", "sans-serif"],
    },

    boxShadow: {
      "3xl": "-1px 0px 13px 1px rgba(0,0,0)",
    },
    dropShadow: {
      "3xl": "4px 2px 2px #000000",
      "4xl": "3px 2px 0px rgba(0, 0, 0, 1)",
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.4)",
        "0 0px 65px rgba(255, 255,255, 0.2)",
      ],
      whiteLine: "2px 0px 0px rgba(0, 0, 0,1 )",
    },
  },
  plugins: [],
};
export default config;
