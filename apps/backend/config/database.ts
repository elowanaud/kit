import { defineConfig } from "@adonisjs/lucid";
import env from "#config/env";

const dbConfig = defineConfig({
	connection: "postgres",
	connections: {
		postgres: {
			client: "pg",
			connection: {
				host: env.get("DB_HOST"),
				port: env.get("DB_PORT"),
				user: env.get("DB_USER"),
				password: env.get("DB_PASSWORD"),
				database: env.get("DB_DATABASE"),
			},
			migrations: {
				naturalSort: true,
				paths: ["database/migrations"],
			},
			seeders: {
				paths: ["database/seeders/main"],
			},
		},
	},
});

export default dbConfig;
