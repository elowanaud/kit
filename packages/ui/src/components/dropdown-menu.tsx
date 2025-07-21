import { Menu } from "@base-ui-components/react";

export function DropdownMenu(props: Menu.Root.Props) {
	return <Menu.Root {...props} />;
}

function Trigger(props: Menu.Trigger.Props) {
	return <Menu.Trigger {...props} />;
}
DropdownMenu.Trigger = Trigger;

function Content(props: Menu.Positioner.Props) {
	return (
		<Menu.Portal>
			<Menu.Positioner {...props}>
				<Menu.Popup />
			</Menu.Positioner>
		</Menu.Portal>
	);
}
DropdownMenu.Content = Content;

function Item(props: Menu.Item.Props) {
	return <Menu.Item {...props} />;
}
DropdownMenu.Item = Item;

function CheckboxItem(props: Menu.CheckboxItem.Props) {
	return <Menu.CheckboxItem {...props} />;
}
DropdownMenu.CheckboxItem = CheckboxItem;

function RadioGroup(props: Menu.RadioGroup.Props) {
	return <Menu.RadioGroup {...props} />;
}
DropdownMenu.RadioGroup = RadioGroup;

function RadioItem(props: Menu.RadioItem.Props) {
	return <Menu.RadioItem {...props} />;
}
DropdownMenu.RadioItem = RadioItem;

function SubMenu(props: Menu.SubmenuRoot.Props) {
	return <Menu.SubmenuRoot {...props} />;
}
DropdownMenu.SubMenu = SubMenu;

function SubMenuTrigger(props: Menu.SubmenuTrigger.Props) {
	return <Menu.SubmenuTrigger {...props} />;
}
DropdownMenu.SubMenuTrigger = SubMenuTrigger;
DropdownMenu.SubMenuContent = Content;

function Group(props: Menu.Group.Props) {
	return <Menu.Group {...props} />;
}
DropdownMenu.Group = Group;

function GroupLabel(props: Menu.GroupLabel.Props) {
	return <Menu.GroupLabel {...props} />;
}
DropdownMenu.GroupLabel = GroupLabel;

function Separator(props: Menu.Separator.Props) {
	return <Menu.Separator {...props} />;
}
DropdownMenu.Separator = Separator;
