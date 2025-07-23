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
				"font-medium text-neutral-12 text-sm/normal",
				{
					"before:pr-0.5 before:text-destructive-9 before:content-['*']": required,
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

	return <span className={cn("text-neutral-11 text-sm", className)} {...otherProps} />;
}
Field.Description = FieldDescription;

function FieldError(props: ComponentProps<"span">) {
	const { className, ...otherProps } = props;

	return <span className={cn("text-destructive-9 text-sm", className)} {...otherProps} />;
}
Field.Error = FieldError;
