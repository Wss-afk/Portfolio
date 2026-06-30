/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        cyan: "var(--cyan)",
        amber: "var(--amber)",
        violet: "var(--violet)",
      },
      boxShadow: {
        glow: "0 18px 48px rgba(119, 228, 255, 0.16)",
      },
    },
  },
  plugins: [],
};
