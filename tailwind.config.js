module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dc: {
					purple: "#DA22FF",
					blue: "#9733EE",
					gray: "#F6F8FB",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/custom-forms"),
		require("@tailwindcss/line-clamp"),
	],
};
