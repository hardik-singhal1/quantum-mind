import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-900": "#0f172a",
      },
    },
  },
  plugins: [],
};

export default config;
