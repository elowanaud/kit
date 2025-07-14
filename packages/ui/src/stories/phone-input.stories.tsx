import { PhoneInput } from "@kit/ui/components/phone-input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Phone Input",
	component: PhoneInput,
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultCountry: "fr",
	},
};
