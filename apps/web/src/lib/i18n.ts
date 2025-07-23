import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import merge from "deepmerge-json";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
	const locale = "fr";

	return {
		locale,
		messages: _loadI18nTranslations("./locales", locale),
	};
});

const _loadI18nTranslations = (dictionariesPath: string, locale: string) => {
	const absolutePath = path.join(process.cwd(), dictionariesPath);

	let translations = {};

	try {
		const files = readdirSync(absolutePath, { recursive: true });

		for (const file of files) {
			if (typeof file === "string" && file.endsWith(`${locale}.json`)) {
				const filePath = path.join(absolutePath, file);
				const fileTranslations = JSON.parse(readFileSync(filePath, "utf-8"));

				translations = merge(translations, fileTranslations);
			}
		}
	} catch (error) {
		throw new Error("The following error occurred in loader in next-intl-split.", {
			cause: error,
		});
	}

	return translations;
};
