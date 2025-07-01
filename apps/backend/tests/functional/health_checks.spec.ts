import { DiskSpaceCheck, MemoryHeapCheck } from "@adonisjs/core/health";
import { test } from "@japa/runner";
import { healthChecks } from "#start/health";

test.group("Health checks", () => {
	test("should return 200 if the server is healthy", async ({ client }) => {
		healthChecks.register([new DiskSpaceCheck(), new MemoryHeapCheck()]);
		const response = await client.get("/health");
		response.assertStatus(200);
	});

	test("should return 503 if the server is not healthy", async ({ client }) => {
		healthChecks.register([new DiskSpaceCheck().failWhenExceeds(0)]);
		const response = await client.get("/health");
		response.assertStatus(503);
	});
});
