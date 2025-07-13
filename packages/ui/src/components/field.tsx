import cn from "@kit/ui/utils/cn";
import type { ComponentProps } from "react";

export function Field(props: ComponentProps<"div">) {
	const { className, ...otherProps } = props;

	return <div className={cn("grid gap-1", className)} {...otherProps} />;
}

function FieldLabel(props: ComponentProps<"label"> & { required?: boolean }) {
	const { className, required, ...otherProps } = props;

	return (
		<label
			className={cn(
				"font-medium text-sm text-neutral-12",
				{
					"before:pr-0.5 before:text-red-9 before:content-['*']": required,
				},
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
