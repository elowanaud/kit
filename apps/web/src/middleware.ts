import { type NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/api/server";

const GUEST_ROUTES = ["/login", "/forgot-password", "/reset-password"];

export async function middleware(request: NextRequest) {
	const isGuestRoute = GUEST_ROUTES.includes(request.nextUrl.pathname);
	const { data: currentUser } = await api(request.headers).auth.me.$get();

	if (currentUser && isGuestRoute) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	if (currentUser || isGuestRoute) {
		return NextResponse.next();
	}

	return NextResponse.redirect(
		new URL(`/login?redirectUrl=${request.nextUrl.pathname + request.nextUrl.search}`, request.url),
	);
}

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
	],
};
