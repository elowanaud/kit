import { Secret } from "@adonisjs/core/helpers";
import { defineConfig } from "@adonisjs/core/http";
import app from "@adonisjs/core/services/app";
import env from "#config/env";

export const appKey = new Secret(env.get("APP_KEY"));

export const http = defineConfig({
	generateRequestId: true,
	allowMethodSpoofing: false,

	useAsyncLocalStorage: false,

	cookie: {
		domain: env.get("COOKIE_DOMAIN", "localhost"),
		path: "/",
		maxAge: "2h",
		httpOnly: true,
		secure: app.inProduction,
		sameSite: "lax",
	},
});
