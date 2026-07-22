import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marquee: {
          bg: "#0B0E14",
          surface: "#12161F",
          elevated: "#1A2030",
          border: "#262C3B",
          gold: "#E7B23C",
          goldSoft: "#F2D28C",
          red: "#D4432E",
          text: "#F5F3EC",
          muted: "#8B93A6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "film-grain":
          "radial-gradient(circle at 1px 1px, rgba(245,243,236,0.035) 1px, transparent 0)",
      },
      backgroundSize: {
        grain: "14px 14px",
      },
    },
  },
  plugins: [],
};
export default config;
