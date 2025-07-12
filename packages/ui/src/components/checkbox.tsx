import { Checkbox as BaseUiCheckbox } from "@base-ui-components/react";
import { CheckIcon } from "@kit/ui/icons";
import cn from "@kit/ui/utils/cn";

export type CheckboxProps = BaseUiCheckbox.Root.Props;

export function Checkbox(props: CheckboxProps) {
	const { className, ...otherProps } = props;

	return (
		<BaseUiCheckbox.Root
			className={cn(
				"flex items-center justify-center border border-neutral-7 bg-white transition-colors hover:not-disabled:border-neutral-8 hover:not-disabled:bg-neutral-2 outline-none focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:bg-primary-9 aria-checked:border-primary-9 aria-checked:hover:not-disabled:border-primary-10 aria-checked:hover:not-disabled:bg-primary-10 text-transparent aria-checked:text-primary-contrast size-4 rounded-sm [&_svg]:size-3",
				className,
			)}
			{...otherProps}
		>
			<BaseUiCheckbox.Indicator render={<CheckIcon strokeWidth={3} />} />
		</BaseUiCheckbox.Root>
	);
}
