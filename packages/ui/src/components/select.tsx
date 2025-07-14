import ReactSelect, { type GroupBase, type Props as ReactSelectProps } from "react-select";

export type Option = {
	label: string;
	value: string;
};

export type SelectProps = Omit<ReactSelectProps<Option, true, GroupBase<Option>>, "isMulti">;

export function Select({ ...props }: SelectProps) {
	return <ReactSelect {...props} />;
}
