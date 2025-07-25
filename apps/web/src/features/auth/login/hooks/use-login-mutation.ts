import { toast } from "@kit/ui/components/toaster";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { api } from "@/lib/api/client";
import type { LoginError, LoginRequest, LoginResponse } from "@/types/api/auth/login";

type UseLoginMutationProps = {
	redirectUrl?: string;
};

export function useLoginMutation(props: UseLoginMutationProps = {}) {
	const { redirectUrl } = props;

	const t = useTranslations("features.auth.login.hooks.use-login-mutation");
	const router = useRouter();

	return useMutation<LoginResponse, LoginError, LoginRequest>({
		mutationFn: (data) => api.auth.login.$post(data).unwrap(),
		onSuccess: () => {
			toast.success(t("messages.success"));
			router.push(redirectUrl ?? "/");
		},
		onError: (error) => {
			switch (error.status) {
				case 400:
					return toast.error(t("messages.error.400"));
				default:
					return toast.error(t("messages.error.default"));
			}
		},
	});
}
