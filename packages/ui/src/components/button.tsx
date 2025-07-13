import { mergeProps, useRender } from "@base-ui-components/react";
import { LoaderCircleIcon } from "@kit/ui/icons";
import cn from "@kit/ui/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

const buttonVariants = cva(
	"relative inline-flex w-fit items-center justify-center gap-2 overflow-hidden font-medium outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				primary:
					"bg-primary-9 text-primary-contrast hover:not-disabled:bg-primary-10 focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:ring-offset-1",
				outline:
					"border border-neutral-7 bg-neutral-1 text-black hover:not-disabled:border-neutral-8 hover:not-disabled:bg-neutral-2 focus-visible:ring-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-1",
				ghost: "bg-transparent text-black hover:not-disabled:bg-neutral-3 focus-visible:bg-neutral-3",
				destructive:
					"bg-red-9 text-white hover:not-disabled:bg-red-10 focus-visible:ring-2 focus-visible:ring-red-7 focus-visible:ring-offset-1",
				link: "text-primary-9 hover:not-disabled:text-primary-10 hover:not-disabled:underline focus-visible:underline",
			},
			size: {
				md: "h-8 rounded-md px-3 text-sm [&_svg]:size-4",
				"icon-sm": "size-6 rounded-sm text-xs [&_svg]:size-3",
				"icon-md": "size-8 rounded-md text-sm [&_svg]:size-4",
			},
			loading: {
				true: "disabled:cursor-progress disabled:opacity-100",
				false: null,
			},
		},
	},
);

export type ButtonProps = useRender.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {};

export function Button(props: ButtonProps) {
	const {
		type = "button",
		render = <button type={type} />,
		variant = "primary",
		size = "md",
		disabled,
		loading,
		className,
		children,
		...otherProps
	} = props;

	const defaultProps: useRender.ComponentProps<"button"> = {
		className: cn(buttonVariants({ variant, size, loading, className })),
		disabled: loading || disabled,
		children: (
			<LazyMotion features={domAnimation}>
				<m.span
					className="inline-flex items-center justify-center gap-2 whitespace-nowrap"
					initial={false}
					animate={{
						opacity: loading ? 0 : 1,
						y: loading ? "-100%" : 0,
					}}
				>
					{children}
				</m.span>
				<AnimatePresence initial={false}>
					{loading && (
						<m.span
							className="absolute"
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "100%", opacity: 0 }}
						>
							<LoaderCircleIcon className="animate-spin" />
						</m.span>
					)}
				</AnimatePresence>
			</LazyMotion>
		),
	};

	return useRender({
		props: mergeProps<"button">(defaultProps, otherProps),
		render,
	});
}
