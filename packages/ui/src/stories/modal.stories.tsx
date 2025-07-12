import { Button } from "@kit/ui/components/button";
import { Modal } from "@kit/ui/components/modal";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Modal",
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: () => {
		return (
			<Modal>
				<Modal.Trigger render={<Button />}>Open Modal</Modal.Trigger>
				<Modal.Content className="grid gap-9">
					<div className="grid gap-2">
						<Modal.Title className="text-2xl font-bold">Lorem ipsum dolor sit amet.</Modal.Title>
						<Modal.Description className="text-sm text-neutral-10">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, beatae. Nihil, pariatur! Sequi iste
							officiis quos omnis perferendis, adipisci eos repudiandae est delectus blanditiis unde enim aut magnam
							nemo iure!
						</Modal.Description>
					</div>

					<Modal.Close render={<Button />}>Submit</Modal.Close>
				</Modal.Content>
			</Modal>
		);
	},
};
