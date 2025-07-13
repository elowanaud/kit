import cn from "@kit/ui/utils/cn";
import type { ComponentProps } from "react";

export function Field(props: ComponentProps<"div">) {
	const { className, ...otherProps } = props;

	return <div className={cn("grid gap-1 group/field", className)} {...otherProps} />;
}

function FieldLabel(props: ComponentProps<"label">) {
	const { className, ...otherProps } = props;

	return (
		<label
			className={cn(
				"group-has-required/field:before:pr-0.5 group-has-required/field:before:text-red-9 group-has-required/field:before:content-['*'] font-medium text-sm text-neutral-12",
				className,
			)}
			{...otherProps}
		/>
	);
}
Field.Label = FieldLabel;

function FieldDescription(props: ComponentProps<"span">) {
	const { className, ...otherProps } = props;

	return <span className={cn("text-sm text-neutral-11", className)} {...otherProps} />;
}
Field.Description = FieldDescription;

function FieldError(props: ComponentProps<"span">) {
	const { className, ...otherProps } = props;

	return <span className={cn("text-sm text-red-9", className)} {...otherProps} />;
}
Field.Error = FieldError;
