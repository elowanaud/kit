import { Radio as BaseUiRadio, RadioGroup as BaseUiRadioGroup } from "@base-ui-components/react";
import { Field } from "@kit/ui/components/field";
import cn from "@kit/ui/utils/cn";

export function Radio(props: BaseUiRadioGroup.Props) {
	const { className, ...otherProps } = props;

	return <BaseUiRadioGroup className={cn("grid gap-1", className)} {...otherProps} />;
}

function RadioItem(props: BaseUiRadio.Root.Props) {
	const { className, children, ...otherProps } = props;

	return (
		<Field.Label className="flex items-center gap-2">
			<BaseUiRadio.Root
				className={cn(
					"group/radio flex size-4 items-center justify-center rounded-full border border-neutral-7 bg-neutral-1 outline-none transition-all hover:not-disabled:border-neutral-8 hover:not-disabled:bg-neutral-2 focus-visible:ring-2 focus-visible:ring-primary-7 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-primary-9 aria-checked:bg-primary-9 aria-checked:hover:not-disabled:border-primary-10 aria-checked:hover:not-disabled:bg-primary-10",
					className,
				)}
				{...otherProps}
			>
				<BaseUiRadio.Indicator
					keepMounted
					className="size-2 scale-0 rounded-full bg-neutral-1 transition-transform group-aria-checked/radio:scale-none"
				/>
			</BaseUiRadio.Root>
			{children}
		</Field.Label>
	);
}
Radio.Item = RadioItem;
