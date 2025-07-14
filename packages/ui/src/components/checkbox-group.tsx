import { CheckboxGroup as BaseUiCheckboxGroup } from "@base-ui-components/react";
import { Checkbox, type CheckboxProps } from "@kit/ui/components/checkbox";
import { Field } from "@kit/ui/components/field";
import cn from "@kit/ui/utils/cn";

export type CheckboxGroupProps = BaseUiCheckboxGroup.Props;

export function CheckboxGroup(props: CheckboxGroupProps) {
	const { className, ...otherProps } = props;

	return <BaseUiCheckboxGroup className={cn("grid gap-1", className)} {...otherProps} />;
}

function CheckboxGroupItem(props: CheckboxProps) {
	const { children, ...otherProps } = props;

	return (
		<Field.Label className="flex items-center gap-2">
			<Checkbox {...otherProps} />
			{children}
		</Field.Label>
	);
}
CheckboxGroup.Item = CheckboxGroupItem;
