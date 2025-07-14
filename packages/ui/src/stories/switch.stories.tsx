import { Switch } from "@kit/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry / Switch",
	component: Switch,
	argTypes: {
		checked: {
			name: "Checked",
			description: "Whether the switch is checked",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
		disabled: {
			name: "Disabled",
			description: "Whether the switch is disabled",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
	},
} satisfies Meta<typeof Switch>;

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
