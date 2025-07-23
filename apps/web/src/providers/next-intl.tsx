import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

export function NextIntlProvider({ children }: { children: ReactNode }) {
	return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
