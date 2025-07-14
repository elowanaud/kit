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
			<span className="pointer-events-none absolute left-1.5 text-neutral-11 [&>svg]:size-5">{leftIcon}</span>
			<input
				className={cn(
					"h-8 flex-1 rounded-sm border border-neutral-7 bg-neutral-1 px-1.5 text-base text-neutral-12 outline-none transition-all placeholder:text-neutral-9 hover:not-disabled:border-neutral-8 focus-visible:border-primary-7 focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:hover:border-primary-8 disabled:cursor-not-allowed sm:text-sm",
					{
						"pl-7": leftIcon,
						"pr-7": rightIcon,
					},
					className,
				)}
				{...otherProps}
			/>
			<span className="pointer-events-none absolute right-1.5 text-neutral-11 [&>svg]:size-5">{rightIcon}</span>
		</div>
	);
}
