/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./index.html",
    "./src/**/*.{html,ts,md,ng}",
    "./src/app/components/**/*.{html,ts,ng}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
