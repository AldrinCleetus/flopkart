/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#008ECC",
        primary: "var(--primary-color)",
        text: "var(--secondary-color)",
        // text: "#666666",
        title: "#222222",
        light: "#888888",
        background: "#F5F5F5",
      },
    },
  },
  plugins: [
    // ...
  ],
};
