import { Checkbox } from "@kit/ui/components/checkbox";
import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Default: Story = {};

export const Checked: Story = {
	args: {
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const CheckedDisabled: Story = {
	args: {
		checked: true,
		disabled: true,
	},
};
