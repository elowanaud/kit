import { useApi } from "@/lib/api/client";
import { useMutation } from "@tanstack/react-query";
import type { LoginRequest, LoginResponse, LoginError } from "@/types/api/auth/login";
import { toast } from "@kit/ui/components/toaster";

export const useLoginMutation = () =>
	useMutation<LoginResponse, LoginError, LoginRequest>({
		mutationFn: (data) => useApi.auth.login.$post(data).unwrap(),
		onSuccess: () => toast.success("Login successful"),
		onError: (error) => {
			switch (error.status) {
				case 400:
					return toast.error("Invalid credentials");
				default:
					return toast.error("An error occurred");
			}
		},
	});
