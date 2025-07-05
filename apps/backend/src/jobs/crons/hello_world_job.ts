import logger from "@adonisjs/core/services/logger";
import { Job } from "@rlanz/bull-queue";
import { UserFactory } from "#database/factories/user_factory";
import User from "#models/user";

type HelloWorldJobPayload = {};

export default class HelloWorldJob extends Job {
	// This is the path to the file that is used to create the job
	static get $$filepath() {
		return import.meta.url;
	}

	/**
	 * Base Entry point
	 */
	async handle(_payload: HelloWorldJobPayload) {
		logger.info(`${(await User.all()).length} Total users before job`);
		await UserFactory.create();
		logger.info(`${(await User.all()).length} Total users after job`);
	}

	/**
	 * This is an optional method that gets called when the retries has exceeded and is marked failed.
	 */
	async rescue(_payload: HelloWorldJobPayload) {}
}
