import { Menu } from "@base-ui-components/react";
import { CheckIcon, ChevronRightIcon } from "@kit/ui/icons";
import cn from "@kit/ui/utils/cn";
import { AnimatePresence, domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { createContext, useContext, useState } from "react";

type DropdownMenuContextType = {
	isOpen: boolean;
};

const DropdownMenuContext = createContext<DropdownMenuContextType>({
	isOpen: false,
});

export function DropdownMenu(props: Menu.Root.Props) {
	const { onOpenChange, ...otherProps } = props;
	const [isOpen, setIsOpen] = useState(props.defaultOpen ?? props.open ?? false);

	const handleOpenChange = (open: boolean, event?: Event, reason?: Menu.Root.OpenChangeReason) => {
		setIsOpen(open);
		onOpenChange?.(open, event, reason);
	};

	return (
		<LazyMotion features={domAnimation}>
			<DropdownMenuContext value={{ isOpen }}>
				<Menu.Root onOpenChange={handleOpenChange} {...otherProps} />
			</DropdownMenuContext>
		</LazyMotion>
	);
}

function Trigger(props: Menu.Trigger.Props) {
	return <Menu.Trigger {...props} />;
}
DropdownMenu.Trigger = Trigger;

function Content(props: Menu.Positioner.Props) {
	const { children, sideOffset = 4, ...otherProps } = props;
	const { isOpen } = useContext(DropdownMenuContext);

	return (
		<AnimatePresence>
			{isOpen && (
				<Menu.Portal keepMounted>
					<Menu.Positioner sideOffset={sideOffset} {...otherProps}>
						<Menu.Popup
							render={
								<m.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.1 }}
								/>
							}
							className="rounded-lg border border-neutral-6 bg-neutral-1 p-1 shadow outline-none"
						>
							{children}
						</Menu.Popup>
					</Menu.Positioner>
				</Menu.Portal>
			)}
		</AnimatePresence>
	);
}
DropdownMenu.Content = Content;

function Item(props: Menu.Item.Props & { destructive?: boolean }) {
	const { className, destructive, ...otherProps } = props;

	return (
		<Menu.Item
			className={cn(
				"flex cursor-default items-center gap-2 rounded-md px-3 py-1 text-neutral-12 text-sm/normal outline-none transition-colors focus-within:bg-neutral-4 hover:bg-neutral-4 [&_svg]:size-4",
				{
					"text-red-9 focus-within:bg-red-3 hover:bg-red-3": destructive,
				},
				className,
			)}
			{...otherProps}
		/>
	);
}
DropdownMenu.Item = Item;

function CheckboxItem(props: Menu.CheckboxItem.Props) {
	const { className, children, ...otherProps } = props;

	return (
		<Menu.CheckboxItem
			className={cn(
				"flex cursor-default items-center gap-2 rounded-md px-3 py-1 text-neutral-12 text-sm/normal outline-none transition-colors focus-within:bg-neutral-4 hover:bg-neutral-4 [&_svg]:size-4",
				className,
			)}
			{...otherProps}
		>
			{children}
			<Menu.CheckboxItemIndicator
				keepMounted
				className="ml-auto pl-2 [&_svg]:scale-0 [&_svg]:transition-transform data-[checked]:[&_svg]:scale-none"
			>
				<CheckIcon />
			</Menu.CheckboxItemIndicator>
		</Menu.CheckboxItem>
	);
}
DropdownMenu.CheckboxItem = CheckboxItem;

function RadioGroup(props: Menu.RadioGroup.Props) {
	return <Menu.RadioGroup {...props} />;
}
DropdownMenu.RadioGroup = RadioGroup;

function RadioItem(props: Menu.RadioItem.Props) {
	const { className, children, ...otherProps } = props;

	return (
		<Menu.RadioItem
			className={cn(
				"flex cursor-default items-center gap-2 rounded-md px-3 py-1 text-neutral-12 text-sm/normal outline-none transition-colors focus-within:bg-neutral-4 hover:bg-neutral-4 [&_svg]:size-4",
				className,
			)}
			{...otherProps}
		>
			{children}
			<Menu.RadioItemIndicator
				keepMounted
				className="ml-auto pl-2 [&_svg]:scale-0 [&_svg]:transition-transform data-[checked]:[&_svg]:scale-none"
			>
				<CheckIcon />
			</Menu.RadioItemIndicator>
		</Menu.RadioItem>
	);
}
DropdownMenu.RadioItem = RadioItem;

function SubMenu(props: Menu.SubmenuRoot.Props) {
	return <Menu.SubmenuRoot {...props} />;
}
DropdownMenu.SubMenu = SubMenu;

function SubMenuTrigger(props: Omit<Menu.SubmenuTrigger.Props, "render">) {
	const { children, ...otherProps } = props;

	return (
		<Menu.SubmenuTrigger render={<Item />} {...otherProps}>
			{children}
			<span className="ml-auto pl-2">
				<ChevronRightIcon />
			</span>
		</Menu.SubmenuTrigger>
	);
}
DropdownMenu.SubMenuTrigger = SubMenuTrigger;

function SubMenuContent(props: Menu.Positioner.Props) {
	const { children, sideOffset = 4, ...otherProps } = props;

	return (
		<Menu.Portal>
			<Menu.Positioner sideOffset={sideOffset} {...otherProps}>
				<Menu.Popup
					render={
						<m.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.1 }}
						/>
					}
					className="rounded-lg border border-neutral-6 bg-neutral-1 p-1 shadow outline-none"
				>
					{children}
				</Menu.Popup>
			</Menu.Positioner>
		</Menu.Portal>
	);
}
DropdownMenu.SubMenuContent = SubMenuContent;

DropdownMenu.SubMenuItem = Item;

function Group(props: Menu.Group.Props) {
	const { className, ...otherProps } = props;

	return <Menu.Group className={cn("", className)} {...otherProps} />;
}
DropdownMenu.Group = Group;

function GroupLabel(props: Menu.GroupLabel.Props) {
	const { className, ...otherProps } = props;

	return <Menu.GroupLabel className={cn("px-3 py-1 text-neutral-11 text-sm/normal", className)} {...otherProps} />;
}
DropdownMenu.GroupLabel = GroupLabel;

function Separator(props: Menu.Separator.Props) {
	const { className, ...otherProps } = props;

	return <Menu.Separator className={cn("mx-3 my-1.5 h-px bg-neutral-6", className)} {...otherProps} />;
}
DropdownMenu.Separator = Separator;
