import { Input } from "@kit/ui/components/input";
import { CalendarIcon, MailIcon, SearchIcon } from "@kit/ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Input",
	component: Input,
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
				Search: <SearchIcon className="h-4 w-4" />,
				Letter: <MailIcon className="h-4 w-4" />,
				Calendar: <CalendarIcon className="h-4 w-4" />,
			},
		},
		rightIcon: {
			name: "Right Icon",
			description: "Icon to display on the right side of the input",
			// @ts-expect-error - Storybook doesn't support ReactNode type
			type: "ReactNode",
			control: {
				type: "select",
			},
			options: ["Search", "Letter", "Calendar"],
			mapping: {
				Search: <SearchIcon className="size-4" />,
				Letter: <MailIcon className="size-4" />,
				Calendar: <CalendarIcon className="size-4" />,
			},
		},
	},
} satisfies Meta<typeof Input>;

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

export const WithRightIcon: Story = {
	args: {
		rightIcon: "Calendar",
	},
};
