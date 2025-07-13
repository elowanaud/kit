import { Field } from "@kit/ui/components/field";
import { Input } from "@kit/ui/components/input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Field",
	component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-input">Label</Field.Label>
				<Input id="field-input" required />
				<Field.Description>Description</Field.Description>
				<Field.Error>Error</Field.Error>
			</Field>
		);
	},
};
