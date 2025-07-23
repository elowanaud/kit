import clsx from "clsx";
import ReactSelect, {
	type ClassNamesConfig,
	type GroupBase,
	components as ReactSelectComponents,
	type Props as ReactSelectProps,
	type SelectComponentsConfig,
} from "react-select";
import ReactAsyncSelect, { type AsyncProps } from "react-select/async";
import { ChevronDownIcon, SearchIcon } from "../icons";

export type SelectProps<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<
	ReactSelectProps<Option, IsMulti, Group>,
	| "unstyled"
	| "isClearable"
	| "backspaceRemovesValue"
	| "closeMenuOnSelect"
	| "blurInputOnSelect"
	| "components"
	| "classNames"
>;

export function Select<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
	props: SelectProps<Option, IsMulti, Group>,
) {
	const { isSearchable = false, isMulti, ...otherProps } = props;

	return (
		<ReactSelect
			isMulti={isMulti}
			unstyled
			isClearable
			backspaceRemovesValue
			closeMenuOnSelect={!isMulti}
			blurInputOnSelect={!isMulti}
			isSearchable={isSearchable}
			menuPortalTarget={document.body}
			classNames={classNames<Option, IsMulti, Group>()}
			components={components<Option, IsMulti, Group>({ isSearchable })}
			{...otherProps}
		/>
	);
}

export type AsyncSelectProps<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<
	AsyncProps<Option, IsMulti, Group>,
	| "unstyled"
	| "isClearable"
	| "backspaceRemovesValue"
	| "closeMenuOnSelect"
	| "blurInputOnSelect"
	| "components"
	| "classNames"
	| "options"
	| "cacheOptions"
>;

export function AsyncSelect<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(props: AsyncSelectProps<Option, IsMulti, Group>) {
	const { isSearchable = false, defaultOptions = true, isMulti, ...otherProps } = props;

	return (
		<ReactAsyncSelect
			isMulti={isMulti}
			unstyled
			isClearable
			backspaceRemovesValue
			closeMenuOnSelect={!isMulti}
			blurInputOnSelect={!isMulti}
			menuPortalTarget={document.body}
			cacheOptions
			defaultOptions={defaultOptions}
			isSearchable={isSearchable}
			classNames={classNames<Option, IsMulti, Group>()}
			components={components<Option, IsMulti, Group>({ isSearchable })}
			{...otherProps}
		/>
	);
}

function classNames<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(): ClassNamesConfig<Option, IsMulti, Group> {
	return {
		control: ({ isFocused, isDisabled }) =>
			clsx(
				"min-h-9! rounded-lg border border-neutral-7 bg-neutral-1 px-1.5 py-1 text-base text-neutral-12 transition-all hover:border-neutral-8 hover:bg-neutral-2 sm:text-sm",
				{
					"border-primary-7 ring-2 ring-primary-7 hover:border-primary-7": isFocused,
					"opacity-50": isDisabled,
				},
			),
		placeholder: () => "text-neutral-9",
		valueContainer: () => "gap-1 text-neutral-12",
		menu: () => "mt-1 p-1 rounded-lg shadow border border-neutral-7 bg-neutral-1 text-base sm:text-sm ",
		menuList: () => "max-h-40!",
		option: ({ isSelected }) =>
			clsx("transistion-colors rounded-sm px-3 py-1 text-neutral-12 text-sm/normal hover:bg-neutral-4", {
				"bg-primary-3 hover:bg-primary-4": isSelected,
			}),
		dropdownIndicator: () => "size-6 flex items-center justify-center text-neutral-11 [&>svg]:size-4",
		multiValue: () => "gap-1 rounded-md bg-primary-9 text-primary-contrast text-sm px-2 py-0.5",
		multiValueRemove: () => "cursor-pointer",
	};
}

function components<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
	isSearchable,
}: {
	isSearchable: boolean | undefined;
}): SelectComponentsConfig<Option, IsMulti, Group> {
	return {
		DropdownIndicator: ({ children, ...props }) => (
			<ReactSelectComponents.DropdownIndicator {...props}>
				{props.isFocused && isSearchable ? <SearchIcon /> : <ChevronDownIcon />}
			</ReactSelectComponents.DropdownIndicator>
		),
		ClearIndicator: () => null,
		LoadingIndicator: () => null,
		IndicatorSeparator: () => null,
	};
}
