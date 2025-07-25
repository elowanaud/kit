import app from "@adonisjs/core/services/app";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class extends BaseSeeder {
	private async seed(Seeder: { default: typeof BaseSeeder }) {
		if (
			!Seeder.default.environment ||
			(!Seeder.default.environment.includes("development") && app.inDev) ||
			(!Seeder.default.environment.includes("testing") && app.inTest) ||
			(!Seeder.default.environment.includes("production") && app.inProduction)
		) {
			return;
		}

		await new Seeder.default(this.client).run();
	}

	async run() {
		await this.seed(await import("#database/seeders/user"));
		await this.seed(await import("#database/seeders/dev_user"));
	}
}
