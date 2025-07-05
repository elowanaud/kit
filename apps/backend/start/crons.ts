import queue from "@rlanz/bull-queue/services/main";
import HelloWorldJob from "#jobs/crons/hello_world_job";

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
