import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../components/checkbox";

const SIZES = ["md", "lg"] as const;
const STATES = ["default", "checked", "disabled", "checked-disabled"] as const;

const meta = {
	title: "Data Entry / Checkbox",
	component: Checkbox,
	argTypes: {
		size: {
			name: "Size",
			description: "The size of the checkbox",
			type: "string",
			control: {
				type: "radio",
			},
			options: SIZES,
		},
		checked: {
			name: "Checked",
			description: "Whether the checkbox is checked",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
		disabled: {
			name: "Disabled",
			description: "Whether the checkbox is disabled",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		size: "md",
	},
};

export const Preview: Story = {
	render: () => {
		return (
			<main className="grid gap-8">
				{SIZES.map((size) => (
					<section key={size} className="flex gap-4">
						{STATES.map((state) => (
							<Checkbox
								key={state}
								size={size}
								checked={state.includes("checked")}
								disabled={state.includes("disabled")}
							/>
						))}
					</section>
				))}
			</main>
		);
	},
};
