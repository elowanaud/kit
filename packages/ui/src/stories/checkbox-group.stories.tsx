import { CheckboxGroup } from "@kit/ui/components/checkbox-group";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry / Checkbox Group",
	component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		return (
			<CheckboxGroup>
				<CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
				<CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
				<CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
			</CheckboxGroup>
		);
	},
};
