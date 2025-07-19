import { AsyncSelect, Select } from "@kit/ui/components/select";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Data Entry/Select",
	component: Select,
	args: {
		className: "w-64",
		options: [
			{ label: "Option 1", value: "option1" },
			{ label: "Option 2", value: "option2" },
			{ label: "Option 3", value: "option3" },
			{ label: "Option 4", value: "option4" },
			{ label: "Option 5", value: "option5" },
			{ label: "Option 6", value: "option6" },
			{ label: "Option 7", value: "option7" },
			{ label: "Option 8", value: "option8" },
			{ label: "Option 9", value: "option9" },
		],
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const fetchOptions = async (input: string): Promise<{ userId: number; id: number; title: string; body: string }[]> => {
	return await fetch(`https://jsonplaceholder.typicode.com/posts?q=${input}`).then((res) => res.json());
};

export const Default: Story = {};

export const Mutli: Story = {
	args: {
		isMulti: true,
	},
};

export const Async: Story = {
	render: () => {
		return (
			<AsyncSelect
				className="w-64"
				isSearchable
				loadOptions={fetchOptions}
				getOptionLabel={(option) => option.title}
				getOptionValue={(option) => option.id.toString()}
			/>
		);
	},
};

export const AsyncMulti: Story = {
	render: () => {
		return (
			<AsyncSelect
				isMulti
				className="w-64"
				isSearchable
				loadOptions={fetchOptions}
				getOptionLabel={(option) => option.title}
				getOptionValue={(option) => option.id.toString()}
			/>
		);
	},
};
