import { Dialog } from "@base-ui-components/react";
import { Button } from "@kit/ui/components/button";
import cn from "@kit/ui/utils/cn";
import { XIcon } from "lucide-react";

export function Modal(props: Dialog.Root.Props) {
	return <Dialog.Root {...props} />;
}

function ModalContent(props: Dialog.Popup.Props) {
	const { children, className, ...otherProps } = props;

	return (
		<Dialog.Portal>
			<Dialog.Backdrop className="fixed inset-0 bg-black/50" />
			<Dialog.Popup
				className={cn(
					"fixed inset-0 sm:m-auto mt-auto max-w-2xl h-fit w-full sm:w-[calc(100%-2rem)] bg-neutral-1 rounded-lg p-4 border border-neutral-7",
					className,
				)}
				{...otherProps}
			>
				<Dialog.Close className="absolute top-2 right-2" render={<Button size="icon-sm" variant="ghost" />}>
					<XIcon strokeWidth={3} />
				</Dialog.Close>
				{children}
			</Dialog.Popup>
		</Dialog.Portal>
	);
}
Modal.Content = ModalContent;

function ModalTrigger(props: Dialog.Trigger.Props) {
	return <Dialog.Trigger {...props} />;
}
Modal.Trigger = ModalTrigger;

function ModalTitle(props: Dialog.Title.Props) {
	return <Dialog.Title {...props} />;
}
Modal.Title = ModalTitle;

function ModalDescription(props: Dialog.Description.Props) {
	return <Dialog.Description {...props} />;
}
Modal.Description = ModalDescription;
