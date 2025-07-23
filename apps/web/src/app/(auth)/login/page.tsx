import { Form } from "./client";

type LoginProps = {
	searchParams: Promise<{
		redirectUrl?: string;
	}>;
};

export default async function Login(props: LoginProps) {
	const { redirectUrl } = await props.searchParams;

	return (
		<div>
			<Form redirectUrl={redirectUrl} />
		</div>
	);
}
