import type { Preview } from "@storybook/react-vite";
import "../src/global.css";

const preview: Preview = {
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default preview;
