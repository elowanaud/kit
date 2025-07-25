import { BoxIcon } from "@kit/ui/icons";
import { LoginForm } from "@/features/auth/login/components/form";

type LoginProps = {
	searchParams: Promise<{
		redirectUrl?: string;
	}>;
};

export default async function Login(props: LoginProps) {
	const { redirectUrl } = await props.searchParams;

	return (
		<main className="flex min-h-screen items-center justify-center px-4">
			<div className="mx-auto grid w-full max-w-sm gap-10 rounded-2xl border border-neutral-7 bg-neutral-1 px-6 py-12">
				<h1 className="flex items-center justify-center gap-2 text-center font-bold text-2xl">
					<BoxIcon className="size-9" />
					Acme
				</h1>
				<LoginForm redirectUrl={redirectUrl} />
			</div>
		</main>
	);
}
