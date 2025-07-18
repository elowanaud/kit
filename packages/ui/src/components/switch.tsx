import { Switch as BaseUiSwitch } from "@base-ui-components/react";
import cn from "@kit/ui/utils/cn";

export type SwitchProps = BaseUiSwitch.Root.Props;

export function Switch(props: SwitchProps) {
	const { className, ...otherProps } = props;

	return (
		<BaseUiSwitch.Root
			className={cn(
				"group/switch flex h-5 w-9 rounded-full border border-neutral-6 bg-neutral-3 transition-all hover:not-disabled:bg-neutral-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-primary-11 aria-checked:bg-primary-9 aria-checked:hover:not-disabled:bg-primary-10",
				className,
			)}
			{...otherProps}
		>
			<BaseUiSwitch.Thumb className="aspect-square h-full rounded-full bg-neutral-1 ring ring-neutral-6 transition-all group-aria-checked/switch:right-0 group-aria-checked/switch:translate-x-4 group-aria-checked/switch:ring-primary-11" />
		</BaseUiSwitch.Root>
	);
}
