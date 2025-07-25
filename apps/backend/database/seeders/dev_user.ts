import { createInterface } from "node:readline/promises";
import { BaseSeeder } from "@adonisjs/lucid/seeders";
import { UserFactory } from "#database/factories/user_factory";

export default class extends BaseSeeder {
	static environment = ["development"];

	async run() {
		const { email, password } = await this.#askForDevUserCredentials();
		await UserFactory.merge({ email, password }).create();
	}

	async #askForDevUserCredentials() {
		const prompt = createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		const email = await prompt.question("Enter email for your dev User: ");
		const password = await prompt.question("Enter password for your dev User: ");

		if (!email || !password) {
			throw new Error("Email and password are required");
		}

		return { email, password };
	}
}
