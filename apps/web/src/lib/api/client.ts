import type { ApiDefinition } from "@kit/backend/api";
import { createTuyau } from "@tuyau/client";
import { superjson } from "@tuyau/superjson/plugin";

export const useApi = createTuyau<{ definition: ApiDefinition }>({
	baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
	credentials: "include",
	plugins: [
		superjson({
			stringifyRequest: false,
		}),
	],
});
