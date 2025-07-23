"use client";

import { Field } from "@kit/ui/components/field";
import { useLoginForm, type LoginFormData } from "@/features/auth/login/hooks/use-form";
import { Input } from "@kit/ui/components/input";
import { PasswordInput } from "@kit/ui/components/password-input";
import { Button } from "@kit/ui/components/button";
import { useLoginMutation } from "@/features/auth/login/hooks/use-login-mutation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type LoginFormProps = {
	redirectUrl?: string;
};

export function LoginForm(props: LoginFormProps) {
	const { redirectUrl } = props;

	const router = useRouter();
	const {
		register,
		handleSubmit: handleValidation,
		formState: { isSubmitting },
		reset,
	} = useLoginForm();
	const { mutateAsync: login, error: submitError } = useLoginMutation();

	const handleSubmit = async (data: LoginFormData) => {
		await login(data);
		router.push(redirectUrl ?? "/");
	};

	useEffect(() => {
		if (submitError) {
			reset();
		}
	}, [submitError, reset]);

	return (
		<form onSubmit={handleValidation(handleSubmit)} noValidate>
			<Field>
				<Field.Label>Email</Field.Label>
				<Input type="email" autoComplete="email" {...register("email")} />
			</Field>

			<Field>
				<Field.Label>Password</Field.Label>
				<PasswordInput autoComplete="current-password" {...register("password")} />
			</Field>

			<Button type="submit" loading={isSubmitting}>
				Login
			</Button>
		</form>
	);
}
