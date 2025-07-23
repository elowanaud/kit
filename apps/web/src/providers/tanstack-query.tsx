"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { getQueryClient } from "@/lib/tanstack-query";

export function TanstackQueryProvider({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={getQueryClient()}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	);
}
