import { Switch } from "@kit/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const STATES = ["default", "checked", "disabled", "checked-disabled"] as const;

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

export const Playground: Story = {};

export const Preview: Story = {
	render: () => {
		return (
			<section className="flex gap-4">
				{STATES.map((state) => (
					<Switch key={state} checked={state.includes("checked")} disabled={state.includes("disabled")} />
				))}
			</section>
		);
	},
};
