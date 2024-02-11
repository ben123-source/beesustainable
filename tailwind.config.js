/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: '#64422F',
      },
    },
  },
  plugins: [
    function ({ addUtilities, addVariant, e }) {
      // Add a custom variant for hover state
      addVariant('hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`hover${separator}${className}`)}:hover`;
        });
      });

      // Add custom utilities for dashed underline
      addUtilities({
        '.underline-dashed': {
          textDecoration: 'underline',
          textDecorationStyle: 'dashed',
        }
      }, ['hover']); // Apply this utility on hover
    }
  ],
}
