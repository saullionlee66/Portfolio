import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
	fonts: {
		heading: "Open Sans",
	},
	colors: {
		primary: { 100: "#0089BA", 200: "#2C73D2" },

		secondary: "#00C9A7",
		title: "FF9671",
	},
	component: {
		Divider: {
			size: "3xl",
		},
	},
});

export default myTheme;
