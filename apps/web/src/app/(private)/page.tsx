"use client";

import { Button } from "@kit/ui/components/button";
import { useLogoutMutation } from "@/features/auth/logout/hooks/use-logout-mutation";

export default function Home() {
	const { mutateAsync: logout, isPending } = useLogoutMutation();

	return (
		<Button onClick={async () => await logout()} loading={isPending}>
			Logout
		</Button>
	);
}
