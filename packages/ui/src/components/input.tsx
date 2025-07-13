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
			<span className="absolute left-1.5 pointer-events-none text-neutral-9 [&>svg]:size:5">{leftIcon}</span>
			<input
				className={cn(
					"h-8 flex-1 rounded-sm border border-neutral-7 disabled:cursor-not-allowed bg-neutral-1 px-1.5 text-base text-neutral-12 focus-visible:outline-2 outline-primary-8 transition-colors placeholder:text-neutral-9 hover:not-disabled:border-neutral-8 sm:text-sm",
					{
						"pl-7": leftIcon,
						"pr-7": rightIcon,
					},
					className,
				)}
				{...otherProps}
			/>
			<span className="absolute right-1.5 pointer-events-none text-neutral-9 [&>svg]:size:5">{rightIcon}</span>
		</div>
	);
}
