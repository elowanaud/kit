import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";
import type { MeError, MeRequest, MeResponse } from "@/types/api/auth/me";

export function useCurrentUser(params: MeRequest = {}) {
	return useQuery<MeResponse, MeError>({
		queryKey: ["current-user"],
		queryFn: () => api.auth.me.$get(params).unwrap(),
	});
}
