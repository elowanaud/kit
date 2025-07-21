import { Toaster, toast } from "@kit/ui/components/toaster";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/button";

const meta = {
	title: "Feedback/Toaster",
	component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<Button variant="outline" onClick={() => toast.message("Hello this is a toast message")}>
					Default
				</Button>
			</>
		);
	},
};

export const Success: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<Button variant="outline" onClick={() => toast.success("Hello this is a success toast message")}>
					Success
				</Button>
			</>
		);
	},
};

export const Errors: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<Button variant="outline" onClick={() => toast.error("Hello this is an error toast message")}>
					Error
				</Button>
			</>
		);
	},
};

export const Warnings: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<Button variant="outline" onClick={() => toast.warning("Hello this is a warning toast message")}>
					Warning
				</Button>
			</>
		);
	},
};

export const Loading: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<Button variant="outline" onClick={() => toast.loading("Hello this is a loading toast message")}>
					Loading
				</Button>
			</>
		);
	},
};
