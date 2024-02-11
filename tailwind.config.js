/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				customGray: "#64422F",
			},
			fontFamily: {
				"lucida": [
					"Lucida Console",
					"Lucida Sans Typewriter",
					"monaco",
					"Bitstream Vera Sans Mono",
					"monospace",
				],
			},
		},
	},
	plugins: [
		function ({ addUtilities, addVariant, e }) {
			// Add a custom variant for hover state
			addVariant("hover", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`hover${separator}${className}`)}:hover`;
				});
			});

			// Add custom utilities for dashed underline
			addUtilities(
				{
					".underline-dashed": {
						textDecoration: "underline",
						textDecorationStyle: "dashed",
					},
				},
				["hover"]
			); // Apply this utility on hover
		},
	],
};
/*font-family: "Brush Script MT", cursive; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; */
