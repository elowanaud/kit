import { Radio } from "@kit/ui/components/radio";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry / Radio",
	component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => {
		return (
			<Radio>
				<Radio.Item value="1">Option 1</Radio.Item>
				<Radio.Item value="2">Option 2</Radio.Item>
				<Radio.Item value="3">Option 3</Radio.Item>
			</Radio>
		);
	},
};
