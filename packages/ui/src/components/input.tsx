import cn from "@kit/ui/utils/cn";
import type { ComponentProps, ReactNode } from "react";

export type InputProps = ComponentProps<"input"> & {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
};

export function Input(props: InputProps) {
	const { leftIcon, rightIcon, className, ...otherProps } = props;

	return (
		<div
			className={cn("relative flex items-center", {
				"opacity-50": props.disabled,
			})}
		>
			<span className="pointer-events-none absolute left-1.5 flex size-6 items-center justify-center text-neutral-11 [&>svg]:size-4">
				{leftIcon}
			</span>
			<input
				className={cn(
					"h-9 flex-1 rounded-lg border border-neutral-7 bg-neutral-1 px-1.5 text-base text-neutral-12 outline-none ring-0 ring-primary-7 transition-all placeholder:text-neutral-9 hover:not-disabled:border-neutral-8 hover:bg-neutral-2 focus-visible:border-primary-7 focus-visible:ring-2 focus-visible:hover:border-primary-8 disabled:cursor-not-allowed sm:text-sm",
					{
						"pl-8": leftIcon,
						"pr-8": rightIcon,
					},
					className,
				)}
				{...otherProps}
			/>
			<span className="pointer-events-none absolute right-1.5 flex size-6 items-center justify-center text-neutral-11 [&>svg]:size-4">
				{rightIcon}
			</span>
		</div>
	);
}
