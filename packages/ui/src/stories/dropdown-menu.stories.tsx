import { Button } from "@kit/ui/components/button";
import { DropdownMenu } from "@kit/ui/components/dropdown-menu";
import { LaptopMinimalIcon, LogOutIcon, MoonIcon, SunIcon } from "@kit/ui/icons";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof DropdownMenu> = {
	title: "Navigation/Dropdown Menu",
	component: DropdownMenu,
	subcomponents: {
		Trigger: DropdownMenu.Trigger,
		Content: DropdownMenu.Content,
		Item: DropdownMenu.Item,
		Separator: DropdownMenu.Separator,
		Group: DropdownMenu.Group,
		GroupLabel: DropdownMenu.GroupLabel,
		SubMenu: DropdownMenu.SubMenu,
		SubMenuTrigger: DropdownMenu.SubMenuTrigger,
		SubMenuContent: DropdownMenu.SubMenuContent,
		SubMenuItem: DropdownMenu.SubMenuItem,
		CheckboxItem: DropdownMenu.CheckboxItem,
		RadioGroup: DropdownMenu.RadioGroup,
		RadioItem: DropdownMenu.RadioItem,
	},
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenu.Trigger render={<Button variant={"default"} />}>Dropdown Menu</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>Item 1</DropdownMenu.Item>
				<DropdownMenu.Item>Item 2</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.GroupLabel>Group</DropdownMenu.GroupLabel>
					<DropdownMenu.Item>Group Item 1</DropdownMenu.Item>
					<DropdownMenu.Item>Group Item 2</DropdownMenu.Item>
					<DropdownMenu.Item>Group Item 3</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.SubMenu>
					<DropdownMenu.SubMenuTrigger>Sub Menu</DropdownMenu.SubMenuTrigger>
					<DropdownMenu.SubMenuContent>
						<DropdownMenu.SubMenuItem>Sub Menu Item 1</DropdownMenu.SubMenuItem>
						<DropdownMenu.SubMenuItem>Sub Menu Item 2</DropdownMenu.SubMenuItem>
						<DropdownMenu.SubMenuItem>Sub Menu Item 3</DropdownMenu.SubMenuItem>
					</DropdownMenu.SubMenuContent>
				</DropdownMenu.SubMenu>
				<DropdownMenu.SubMenu>
					<DropdownMenu.SubMenuTrigger>Theme</DropdownMenu.SubMenuTrigger>
					<DropdownMenu.SubMenuContent>
						<DropdownMenu.RadioGroup defaultValue="system">
							<DropdownMenu.RadioItem value="light">
								<SunIcon />
								Light
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="dark">
								<MoonIcon />
								Dark
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="system">
								<LaptopMinimalIcon />
								System
							</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.SubMenuContent>
				</DropdownMenu.SubMenu>
				<DropdownMenu.SubMenu>
					<DropdownMenu.SubMenuTrigger>Checkbox</DropdownMenu.SubMenuTrigger>
					<DropdownMenu.SubMenuContent>
						<DropdownMenu.CheckboxItem>Checkbox Item 1</DropdownMenu.CheckboxItem>
						<DropdownMenu.CheckboxItem>Checkbox Item 2</DropdownMenu.CheckboxItem>
						<DropdownMenu.CheckboxItem>Checkbox Item 3</DropdownMenu.CheckboxItem>
					</DropdownMenu.SubMenuContent>
				</DropdownMenu.SubMenu>
				<DropdownMenu.Separator />
				<DropdownMenu.Item destructive>
					<LogOutIcon />
					Log out
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu>
	),
};
