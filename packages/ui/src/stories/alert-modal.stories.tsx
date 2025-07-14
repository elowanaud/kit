import { AlertModal } from "@kit/ui/components/alert-modal";
import { Button } from "@kit/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Feedback/Alert Modal",
	component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		return (
			<AlertModal>
				<AlertModal.Trigger render={<Button />}>Open AlertModal</AlertModal.Trigger>
				<AlertModal.Content className="grid gap-9">
					<div className="grid gap-2">
						<AlertModal.Title className="font-bold text-2xl">Lorem ipsum dolor sit amet.</AlertModal.Title>
						<AlertModal.Description className="text-neutral-10 text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, beatae. Nihil, pariatur! Sequi iste
							officiis quos omnis perferendis, adipisci eos repudiandae est delectus blanditiis unde enim aut magnam
							nemo iure!
						</AlertModal.Description>
					</div>

					<div className="flex flex-col justify-end gap-2 sm:flex-row">
						<AlertModal.Close render={<Button variant="outline" className="w-full sm:w-auto" />}>
							Cancel
						</AlertModal.Close>
						<AlertModal.Close render={<Button variant="destructive" className="w-full sm:w-auto" />}>
							Delete
						</AlertModal.Close>
					</div>
				</AlertModal.Content>
			</AlertModal>
		);
	},
};
