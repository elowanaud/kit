import type { ApiDefinition } from "@kit/backend/api";
import { createTuyau } from "@tuyau/client";
import { superjson } from "@tuyau/superjson/plugin";
import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const getApi = (headers: Headers | ReadonlyHeaders) =>
	createTuyau<{ definition: ApiDefinition }>({
		baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
		credentials: "include",
		headers: Object.fromEntries(headers.entries()),
		plugins: [
			superjson({
				stringifyRequest: false,
			}),
		],
	});
