import { Checkbox as BaseUiCheckbox } from "@base-ui-components/react";
import { CheckIcon } from "@kit/ui/icons";
import cn from "@kit/ui/utils/cn";

export type CheckboxProps = BaseUiCheckbox.Root.Props;

export function Checkbox(props: CheckboxProps) {
	const { className, ...otherProps } = props;

	return (
		<BaseUiCheckbox.Root
			className={cn(
				"group/checkbox flex size-4 items-center justify-center rounded-sm border border-neutral-7 bg-neutral-1 text-transparent outline-none transition-all hover:not-disabled:border-neutral-8 hover:not-disabled:bg-neutral-2 focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-primary-9 aria-checked:bg-primary-9 aria-checked:text-primary-contrast aria-checked:hover:not-disabled:border-primary-10 aria-checked:hover:not-disabled:bg-primary-10",
				className,
			)}
			{...otherProps}
		>
			<BaseUiCheckbox.Indicator
				keepMounted
				className="size-3 scale-0 transition-transform group-aria-checked/checkbox:scale-none"
				render={<CheckIcon strokeWidth={3} />}
			/>
		</BaseUiCheckbox.Root>
	);
}
