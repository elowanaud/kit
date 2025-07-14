"use client";

import {
	CountrySelector as ReactInternationalPhoneCountrySelector,
	type CountrySelectorProps as ReactInternationalPhoneCountrySelectorProps,
	type UsePhoneInputConfig,
	usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "@kit/ui/components/button";
import { Input, type InputProps } from "@kit/ui/components/input";

export type PhoneInputProps = Omit<InputProps, "type" | "leftIcon" | "defaultValue" | "ref"> & UsePhoneInputConfig;

export function PhoneInput(props: PhoneInputProps) {
	const {
		value,
		charAfterDialCode,
		countries,
		defaultCountry,
		defaultMask,
		disableCountryGuess,
		disableDialCodeAndPrefix,
		disableDialCodePrefill,
		disableFormatting,
		forceDialCode,
		historySaveDebounceMS,
		onChange,
		preferredCountries,
		prefix,
		inputRef: ref,
		...otherProps
	} = props;

	const { country, handlePhoneValueChange, inputValue, setCountry, inputRef } = usePhoneInput({
		value,
		charAfterDialCode,
		countries,
		defaultCountry,
		defaultMask,
		disableCountryGuess,
		disableDialCodeAndPrefix,
		disableDialCodePrefill,
		disableFormatting,
		forceDialCode,
		historySaveDebounceMS,
		inputRef: ref,
		onChange,
		preferredCountries,
		prefix,
	});

	return (
		<Input
			ref={inputRef}
			type="tel"
			leftIcon={
				<CountrySelector
					selectedCountry={country.iso2}
					onSelect={(country) => setCountry(country.iso2)}
					disabled={otherProps.disabled}
					countries={countries}
				/>
			}
			value={inputValue}
			onChange={handlePhoneValueChange}
			{...otherProps}
		/>
	);
}

const CountrySelector = (props: ReactInternationalPhoneCountrySelectorProps) => (
	<ReactInternationalPhoneCountrySelector
		className="pointer-events-auto flex"
		flagStyle={{
			width: "1rem",
			height: "1rem",
		}}
		dropdownArrowStyle={{
			display: "none",
		}}
		renderButtonWrapper={({ children, rootProps }) => (
			<Button variant="ghost" size="icon-sm" className="right-0.5" {...rootProps}>
				{children}
			</Button>
		)}
		{...props}
	/>
);
