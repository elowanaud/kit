import { Button } from "@kit/ui/components/button";
import { BoxIcon } from "@kit/ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

const variants = [
	"primary",
	"outline",
	"ghost",
	"destructive",
	"link",
] as const;
const sizes = ["sm", "md", "lg", "icon-sm", "icon-md", "icon-lg"] as const;
const states = ["default", "loading", "disabled"] as const;

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
			options: variants,
		},
		size: {
			name: "Size",
			description: "The size of the button",
			type: "string",
			control: {
				type: "radio",
			},
			options: sizes,
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
			description:
				"The render function of the button if you want to use a custom component",
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

export const Playground: Story = {
	args: {
		children: "Button",
		variant: "primary",
		size: "md",
	},
};

export const Preview: Story = {
	render: () => {
		return (
			<main className="grid gap-16">
				{variants.map((variant) => (
					<section key={variant} className="grid gap-4">
						<h1 className="font-bold text-2xl">
							{variant.charAt(0).toUpperCase() + variant.slice(1)}
						</h1>
						{sizes.map((size) => (
							<article key={`${variant}_${size}`} className="flex gap-2">
								{states.map((state) => (
									<Button
										key={`${variant}_${size}_{${state}}`}
										variant={variant}
										size={size}
										loading={state === "loading"}
										disabled={state === "disabled"}
									>
										{size.startsWith("icon") ? (
											<BoxIcon />
										) : (
											<>
												<BoxIcon />{" "}
												{variant.charAt(0).toUpperCase() + variant.slice(1)}
											</>
										)}
									</Button>
								))}
							</article>
						))}
					</section>
				))}
			</main>
		);
	},
};
