import { toast } from "@kit/ui/components/toaster";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { api } from "@/lib/api/client";

export function useLogoutMutation() {
	const t = useTranslations("features.auth.logout.hooks.use-logout-mutation");
	const router = useRouter();

	return useMutation({
		mutationKey: ["logout"],
		mutationFn: () => api.auth.logout.$delete().unwrap(),
		onSuccess: () => {
			toast.success(t("messages.success"));
			router.push("/login");
		},
		onError: () => {
			toast.error(t("messages.error"));
		},
	});
}
