import app from "@adonisjs/core/services/app";
import { defineConfig, stores } from "@adonisjs/session";
import env from "#config/env";

const sessionConfig = defineConfig({
	enabled: true,
	cookieName: "kit-session",
	clearWithBrowser: false,
	age: "2h",

	cookie: {
		domain: env.get("COOKIE_DOMAIN", "localhost"),
		path: "/",
		httpOnly: true,
		secure: app.inProduction,
		sameSite: "lax",
	},

	store: env.get("SESSION_DRIVER"),
	stores: {
		cookie: stores.cookie(),
	},
});

export default sessionConfig;
