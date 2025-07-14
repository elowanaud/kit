"use client";

import { AlertDialog } from "@base-ui-components/react";
import { useMediaQuery } from "@base-ui-components/react/unstable-use-media-query";
import { Button } from "@kit/ui/components/button";
import cn from "@kit/ui/utils/cn";
import { XIcon } from "lucide-react";
import { AnimatePresence, domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { createContext, useContext, useState } from "react";

type AlertModalContextType = {
	isOpen: boolean;
};

const AlertModalContext = createContext<AlertModalContextType>({
	isOpen: false,
});

export function AlertModal(props: AlertDialog.Root.Props) {
	const { onOpenChange, ...otherProps } = props;
	const [isOpen, setIsOpen] = useState(props.defaultOpen ?? props.open ?? false);

	const handleOpenChange = (open: boolean, event?: Event, reason?: AlertDialog.Root.OpenChangeReason) => {
		setIsOpen(open);
		onOpenChange?.(open, event, reason);
	};

	return (
		<AlertModalContext value={{ isOpen }}>
			<AlertDialog.Root onOpenChange={handleOpenChange} {...otherProps} />
		</AlertModalContext>
	);
}

function AlertModalContent(props: Omit<AlertDialog.Popup.Props, "render">) {
	const { children, className, ...otherProps } = props;
	const { isOpen } = useContext(AlertModalContext);
	const isMobile = useMediaQuery("(max-width: 640px)", {});

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				{isOpen && (
					<AlertDialog.Portal keepMounted>
						<AlertDialog.Backdrop
							className="fixed inset-0 bg-black/50"
							render={
								<m.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: isMobile ? 0.2 : 0.15 }}
								/>
							}
						/>
						<AlertDialog.Popup
							className={cn(
								"fixed inset-0 mt-auto h-fit w-full rounded-t-lg border border-neutral-7 bg-neutral-1 p-4 sm:m-auto sm:w-[calc(100%-2rem)] sm:max-w-lg sm:rounded-lg",
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
										opacity: isMobile ? 1 : 1,
										scale: isMobile ? 1 : 1,
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
							<AlertDialog.Close
								className="absolute top-2 right-2"
								render={<Button size={isMobile ? "icon-sm" : "icon-md"} variant="ghost" />}
							>
								<XIcon strokeWidth={3} />
							</AlertDialog.Close>
							{children}
						</AlertDialog.Popup>
					</AlertDialog.Portal>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
AlertModal.Content = AlertModalContent;

function AlertModalTrigger(props: AlertDialog.Trigger.Props) {
	return <AlertDialog.Trigger {...props} />;
}
AlertModal.Trigger = AlertModalTrigger;

function AlertModalTitle(props: AlertDialog.Title.Props) {
	return <AlertDialog.Title {...props} />;
}
AlertModal.Title = AlertModalTitle;

function AlertModalDescription(props: AlertDialog.Description.Props) {
	return <AlertDialog.Description {...props} />;
}
AlertModal.Description = AlertModalDescription;

function AlertModalClose(props: AlertDialog.Close.Props) {
	return <AlertDialog.Close {...props} />;
}
AlertModal.Close = AlertModalClose;
