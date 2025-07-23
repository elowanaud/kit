"use client";

import { LoginForm } from "@/features/auth/login/components/form";
import type { LoginFormData } from "@/features/auth/login/hooks/use-form";
import { useLoginMutation } from "@/features/auth/login/hooks/use-login-mutation";
import { useRouter } from "next/navigation";

type FormProps = {
	redirectUrl?: string;
};

export function Form(props: FormProps) {
	const { redirectUrl } = props;

	const router = useRouter();
	const { mutateAsync: login } = useLoginMutation();

	const handleSubmit = async (data: LoginFormData) => {
		await login(data);
		router.push(redirectUrl ?? "/");
	};

	return <LoginForm onSubmit={handleSubmit} />;
}
