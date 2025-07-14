import { Checkbox } from "@kit/ui/components/checkbox";
import { CheckboxGroup } from "@kit/ui/components/checkbox-group";
import { Field } from "@kit/ui/components/field";
import { Input } from "@kit/ui/components/input";
import { PasswordInput } from "@kit/ui/components/password-input";
import { Radio } from "@kit/ui/components/radio";
import { Switch } from "@kit/ui/components/switch";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhoneInput } from "../components/phone-input";

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
				<Field.Label htmlFor="input">Email</Field.Label>
				<Input type="email" id="input" />
				<Field.Description>Enter your email</Field.Description>
				<Field.Error>Invalid email</Field.Error>
			</Field>
		);
	},
};

export const PasswordField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="password">Password</Field.Label>
				<PasswordInput id="password" />
				<Field.Description>Enter your password</Field.Description>
				<Field.Error>Invalid password</Field.Error>
			</Field>
		);
	},
};

export const PhoneField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label htmlFor="phoneNumber">Phone Number</Field.Label>
				<PhoneInput id="phoneNumber" defaultCountry="fr" />
				<Field.Description>Enter your phone number</Field.Description>
				<Field.Error>Invalid phone number</Field.Error>
			</Field>
		);
	},
};

export const CheckboxField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label className="flex items-center gap-2">
					<Checkbox />
					Accept terms and conditions
				</Field.Label>
				<Field.Description className="ml-6">
					By clicking on the button, you agree to the terms and conditions
				</Field.Description>
				<Field.Error className="ml-6">You must accept the terms and conditions</Field.Error>
			</Field>
		);
	},
};

export const CheckboxGroupField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label>Select your favorite colors</Field.Label>
				<CheckboxGroup>
					<CheckboxGroup.Item value="1">Red</CheckboxGroup.Item>
					<CheckboxGroup.Item value="2">Green</CheckboxGroup.Item>
					<CheckboxGroup.Item value="3">Blue</CheckboxGroup.Item>
				</CheckboxGroup>
				<Field.Description>Select your favorite colors</Field.Description>
				<Field.Error>You must select at least one color</Field.Error>
			</Field>
		);
	},
};

export const RadioField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label>Select your favorite fruit</Field.Label>
				<Radio>
					<Radio.Item value="1">Apple</Radio.Item>
					<Radio.Item value="2">Banana</Radio.Item>
					<Radio.Item value="3">Orange</Radio.Item>
				</Radio>
				<Field.Description>Select your favorite fruit</Field.Description>
				<Field.Error>You must select a fruit</Field.Error>
			</Field>
		);
	},
};

export const SwitchField: Story = {
	render: () => {
		return (
			<Field>
				<Field.Label className="flex items-center gap-2">
					<Switch />
					Enable notifications
				</Field.Label>
			</Field>
		);
	},
};
