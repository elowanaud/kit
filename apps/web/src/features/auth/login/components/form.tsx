import { Field } from "@kit/ui/components/field";
import { useLoginForm, type LoginFormData, type UseLoginFormProps } from "../hooks/use-form";
import { Input } from "@kit/ui/components/input";
import { PasswordInput } from "@kit/ui/components/password-input";
import { Button } from "@kit/ui/components/button";

type LoginFormProps = {
	onSubmit: (data: LoginFormData) => void;
} & UseLoginFormProps;

export function LoginForm(props: LoginFormProps) {
	const { onSubmit, ...otherProps } = props;
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useLoginForm(otherProps);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
