"use client";

import { Dialog } from "@base-ui-components/react";
import { useMediaQuery } from "@base-ui-components/react/unstable-use-media-query";
import { Button } from "@kit/ui/components/button";
import { XIcon } from "@kit/ui/icons";
import cn from "@kit/ui/utils/cn";
import { AnimatePresence, domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
	isOpen: boolean;
};
const ModalContext = createContext<ModalContextType>({
	isOpen: false,
});

export function Modal(props: Dialog.Root.Props) {
	const { onOpenChange, ...otherProps } = props;
	const [isOpen, setIsOpen] = useState(props.defaultOpen ?? props.open ?? false);

	const handleOpenChange = (open: boolean, event?: Event, reason?: Dialog.Root.OpenChangeReason) => {
		setIsOpen(open);
		onOpenChange?.(open, event, reason);
	};

	return (
		<ModalContext value={{ isOpen }}>
			<Dialog.Root onOpenChange={handleOpenChange} {...otherProps} />
		</ModalContext>
	);
}

function ModalContent(props: Omit<Dialog.Popup.Props, "render">) {
	const { children, className, ...otherProps } = props;
	const { isOpen } = useContext(ModalContext);
	const isMobile = useMediaQuery("(max-width: 640px)", {});

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				{isOpen && (
					<Dialog.Portal keepMounted>
						<Dialog.Backdrop
							className="fixed inset-0 bg-black/50"
							render={
								<m.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										type: "tween",
										ease: "easeOut",
										duration: isMobile ? 0.2 : 0.15,
									}}
								/>
							}
						/>
						<Dialog.Popup
							className={cn(
								"fixed inset-0 sm:m-auto mt-auto max-w-2xl h-fit w-full sm:w-[calc(100%-2rem)] bg-neutral-1 rounded-t-lg sm:rounded-lg p-4 border border-neutral-7",
								className,
							)}
							render={
								<m.div
									initial={{
										y: isMobile ? "100%" : 0,
										opacity: isMobile ? 1 : 0,
										scale: isMobile ? 1 : 0.95,
									}}
									animate={{
										y: 0,
										opacity: 1,
										scale: 1,
									}}
									exit={{
										y: isMobile ? "100%" : 0,
										opacity: isMobile ? 0.99 : 0,
										scale: isMobile ? 1 : 0.95,
									}}
									transition={{
										type: "tween",
										ease: "easeOut",
										duration: isMobile ? 0.2 : 0.15,
									}}
								/>
							}
							{...otherProps}
						>
							<Dialog.Close
								className="absolute top-2 right-2"
								render={<Button size={isMobile ? "icon-sm" : "icon-md"} variant="ghost" />}
							>
								<XIcon strokeWidth={3} />
							</Dialog.Close>
							{children}
						</Dialog.Popup>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</LazyMotion>
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

function ModalClose(props: Dialog.Close.Props) {
	return <Dialog.Close {...props} />;
}
Modal.Close = ModalClose;
