/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			main: {
				50: "#FFF9E5",
				100: "#FFF4CC",
				200: "#FFE999",
				300: "#FFDE66",
				400: "#FFD333",
				500: "#FFC700",
				600: "#CCA000",
				700: "#997800",
				800: "#665000",
				900: "#332800",
				950: "#191400",
			},
			gray: {
				50: "#E8E8E8",
				100: "#DEDEDE",
				200: "#C7C7C7",
				300: "#B0B0B0",
				400: "#9C9C9C",
				500: "#858585",
				600: "#6E6E6E",
				700: "#575757",
				800: "#424242",
				900: "#2B2B2B",
				950: "#202020",
			},
		},
		fontFamily: {
			nun: ["Nunito", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
