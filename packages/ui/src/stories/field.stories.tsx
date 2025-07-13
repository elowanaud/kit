import { Checkbox } from "@kit/ui/components/checkbox";
import { Field } from "@kit/ui/components/field";
import { Input } from "@kit/ui/components/input";
import { PasswordInput } from "@kit/ui/components/password-input";
import { Switch } from "@kit/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Field",
	component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-input">Label</Field.Label>
				<Input id="field-input" />
				<Field.Description>Description</Field.Description>
				<Field.Error>Error</Field.Error>
			</Field>
		);
	},
};

export const PasswordField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-password">Label</Field.Label>
				<PasswordInput id="field-password" />
				<Field.Description>Description</Field.Description>
				<Field.Error>Error</Field.Error>
			</Field>
		);
	},
};

export const CheckboxField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-checkbox" className="flex items-center gap-2">
					<Checkbox id="field-checkbox" />
					Label
				</Field.Label>
			</Field>
		);
	},
};

export const CheckboxGroupField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-checkbox-group">Label</Field.Label>
				<div className="grid gap-1">
					<Field.Label className="flex items-center gap-2">
						<Checkbox id="field-checkbox-group-1" />
						Option 1
					</Field.Label>
					<Field.Label className="flex items-center gap-2">
						<Checkbox id="field-checkbox-group-2" />
						Option 2
					</Field.Label>
					<Field.Label className="flex items-center gap-2">
						<Checkbox id="field-checkbox-group-3" />
						Option 3
					</Field.Label>
				</div>
				<Field.Description>Description</Field.Description>
				<Field.Error>Error</Field.Error>
			</Field>
		);
	},
};

export const SwitchField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="field-switch" className="flex items-center gap-2">
					<Switch id="field-switch" />
					Label
				</Field.Label>
			</Field>
		);
	},
};
