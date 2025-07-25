import { BaseSeeder } from "@adonisjs/lucid/seeders";
import { UserFactory } from "#database/factories/user_factory";

export default class extends BaseSeeder {
	static environment = ["development", "testing"];

	async run() {
		await UserFactory.createMany(100);
	}
}
