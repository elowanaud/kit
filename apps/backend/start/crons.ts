import app from "@adonisjs/core/services/app";

function start() {
	// queue.dispatch(
	// 	HelloWorldJob,
	// 	{},
	// 	{
	// 		queueName: HelloWorldJob.$$queueName,
	// 		jobId: "hello-world",
	// 		repeat: {
	// 			pattern: "* * * * * *", // every second
	// 		},
	// 	},
	// );
}

if (app.getEnvironment() === "web") {
	start();
}
