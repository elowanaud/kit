import { LoginForm } from "@/features/auth/login/components/form";

type LoginProps = {
	searchParams: Promise<{
		redirectUrl?: string;
	}>;
};

export default async function Login(props: LoginProps) {
	const { redirectUrl } = await props.searchParams;

	return (
		<div>
			<LoginForm redirectUrl={redirectUrl} />
		</div>
	);
}
