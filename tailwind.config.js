/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      
    },
  },
  daisyui: {
    themes: [
      {
        mycustomtheme: {
          primary: "#FF971D", // Example primary color
          secondary: "#6d28d9", // Example secondary color
          accent: "#f43f5e", // Example accent color
          neutral: "#202020", // You can use your gray scale here
          "base-100": "#151515", // Background color for your app
          info: "#3b82f6", // Optional info color
          success: "#10b981", // Optional success color
          warning: "#f59e0b", // Optional warning color
          error: "#ef4444", // Optional error color
          // Use your custom gray palette as the neutral background
          "neutral-focus": "#111111", // Darker shade for focus states
          "neutral-content": "#ffffff", // Lighter content on neutral backgrounds
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
