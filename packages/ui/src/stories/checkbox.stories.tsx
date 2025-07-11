import { Checkbox } from "@kit/ui/components/checkbox";
import type { Meta, StoryObj } from "@storybook/react-vite";

const STATES = ["default", "checked", "disabled", "checked-disabled"] as const;

const meta = {
	title: "Data Entry / Checkbox",
	component: Checkbox,
	argTypes: {
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

export const Playground: Story = {};

export const Preview: Story = {
	render: () => {
		return (
			<section className="flex gap-4">
				{STATES.map((state) => (
					<Checkbox key={state} checked={state.includes("checked")} disabled={state.includes("disabled")} />
				))}
			</section>
		);
	},
};
