/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./index.html",
    "./src/**/*.{html,ts,md,analog}",
    "./src/app/components/**/*.{html,ts,analog}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
