import { Button } from "@kit/ui/components/button";
import { BoxIcon } from "@kit/ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

const VARIANTS = ["primary", "default", "ghost", "destructive", "link"] as const;
const SIZES = ["md", "icon-sm", "icon-md"] as const;

const meta = {
	title: "General/Button",
	component: Button,
	argTypes: {
		children: {
			name: "Children",
			description: "The content of the button",
			// @ts-expect-error - Storybook doesn't support ReactNode type
			type: "ReactNode",
			control: {
				type: "text",
			},
		},
		variant: {
			name: "Variant",
			description: "The variant of the button",
			type: "string",
			control: {
				type: "radio",
			},
			options: VARIANTS,
		},
		size: {
			name: "Size",
			description: "The size of the button",
			type: "string",
			control: {
				type: "radio",
			},
			options: SIZES,
		},
		disabled: {
			name: "Disabled",
			description: "Whether the button is disabled",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
		loading: {
			name: "Loading",
			description: "Whether the button is loading",
			type: "boolean",
			control: {
				type: "boolean",
			},
		},
		render: {
			name: "Render",
			description: "The render function of the button if you want to use a custom component",
			// @ts-expect-error - Storybook doesn't support ReactNode type
			type: "ReactNode",
			control: {
				type: "text",
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
	},
};

export const Outline: Story = {
	args: {
		children: "Button",
		variant: "default",
	},
};

export const Ghost: Story = {
	args: {
		children: "Button",
		variant: "ghost",
	},
};

export const Destructive: Story = {
	args: {
		children: "Button",
		variant: "destructive",
	},
};

export const Link: Story = {
	args: {
		children: "Button",
		variant: "link",
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<BoxIcon /> Button
			</>
		),
		variant: "primary",
	},
};

export const IconSize: Story = {
	args: {
		children: <BoxIcon />,
		variant: "primary",
		size: "icon-md",
	},
};

export const SmallIconSize: Story = {
	args: {
		children: <BoxIcon />,
		variant: "primary",
		size: "icon-sm",
	},
};

export const Disabled: Story = {
	args: {
		children: "Button",
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		children: "Button",
		loading: true,
	},
};
