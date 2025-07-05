import logger from "@adonisjs/core/services/logger";
import queue from "@rlanz/bull-queue/services/main";
import HelloWorldJob from "#jobs/crons/hello_world_job";
import env from "#start/env";

function start() {
	if (env.get("NODE_ENV") === "test") {
		return logger.warn("Crons are disabled in test environment");
	}

	queue.dispatch(
		HelloWorldJob,
		{},
		{
			queueName: "cron",
			repeat: {
				every: 1000,
				count: 10,
			},
		},
	);
}

start();
