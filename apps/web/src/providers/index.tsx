import { Toaster } from "@kit/ui/components/toaster";
import type { ReactNode } from "react";
import { NextIntlProvider } from "@/providers/next-intl";
import { NuqsProvider } from "@/providers/nuqs";
import { TanstackQueryProvider } from "@/providers/tanstack-query";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<NuqsProvider>
			<TanstackQueryProvider>
				<NextIntlProvider>{children}</NextIntlProvider>
				<Toaster />
			</TanstackQueryProvider>
		</NuqsProvider>
	);
}
