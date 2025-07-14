import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";

export const isPhoneValid = (phone: string) => {
	const phoneUtil = PhoneNumberUtil.getInstance();

	try {
		return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
	} catch (_error) {
		return false;
	}
};

export const formatPhone = (
	phone: string,
	format: "INTERNATIONAL" | "NATIONAL" | "E164" | "RFC3966" = "INTERNATIONAL",
) => {
	const phoneUtil = PhoneNumberUtil.getInstance();

	try {
		const phoneNumber = phoneUtil.parseAndKeepRawInput(phone);
		return phoneUtil.format(phoneNumber, PhoneNumberFormat[format]);
	} catch (_error) {
		return phone;
	}
};
