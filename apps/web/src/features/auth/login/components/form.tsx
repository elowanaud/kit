"use client";

import { Button } from "@kit/ui/components/button";
import { Field } from "@kit/ui/components/field";
import { Input } from "@kit/ui/components/input";
import { PasswordInput } from "@kit/ui/components/password-input";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useLoginForm } from "@/features/auth/login/hooks/use-form";
import { useLoginMutation } from "@/features/auth/login/hooks/use-login-mutation";

type LoginFormProps = {
	redirectUrl?: string;
};

export function LoginForm(props: LoginFormProps) {
	const { redirectUrl } = props;

	const t = useTranslations("features.auth.login.components.form");
	const {
		register,
		handleSubmit: handleValidation,
		formState: { isSubmitting },
		reset,
	} = useLoginForm();
	const { mutateAsync: login, error: submitError } = useLoginMutation({ redirectUrl });

	useEffect(() => {
		if (submitError) {
			reset();
		}
	}, [submitError, reset]);

	return (
		<form className="space-y-4" onSubmit={handleValidation((data) => login(data))} noValidate>
			<Field>
				<Input placeholder={t("fields.email.label")} type="email" autoComplete="email" {...register("email")} />
			</Field>

			<Field>
				<PasswordInput
					placeholder={t("fields.password.label")}
					autoComplete="current-password"
					{...register("password")}
				/>
			</Field>

			<Button type="submit" loading={isSubmitting} className="w-full">
				{t("actions.submit")}
			</Button>
		</form>
	);
}
