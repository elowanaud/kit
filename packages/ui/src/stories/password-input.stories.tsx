import { PasswordInput } from "@kit/ui/components/password-input";
import { CalendarIcon, MailIcon, SearchIcon } from "@kit/ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Password Input",
	component: PasswordInput,
	argTypes: {
		placeholder: {
			name: "Placeholder",
			description: "The placeholder text of the input",
			type: "string",
			control: {
				type: "text",
			},
		},
		value: {
			name: "Value",
			description: "The value of the input",
			type: "string",
			control: {
				type: "text",
			},
		},
		disabled: {
			name: "Disabled",
			description: "Whether the input is disabled",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
		leftIcon: {
			name: "Left Icon",
			description: "Icon to display on the left side of the input",
			// @ts-expect-error - Storybook doesn't support ReactNode type
			type: "ReactNode",
			control: {
				type: "select",
			},
			options: ["Search", "Letter", "Calendar"],
			mapping: {
				Search: <SearchIcon className="w-4 h-4" />,
				Letter: <MailIcon className="w-4 h-4" />,
				Calendar: <CalendarIcon className="w-4 h-4" />,
			},
		},
	},
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
	args: {
		placeholder: "Placeholder",
	},
};

export const Filled: Story = {
	args: {
		value: "Value",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const WithLeftIcon: Story = {
	args: {
		leftIcon: "Search",
	},
};
