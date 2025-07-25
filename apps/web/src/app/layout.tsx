import "@/assets/styles/globals.css";
import { getLocale } from "next-intl/server";
import Providers from "@/providers";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<body className="bg-neutral-2 antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
