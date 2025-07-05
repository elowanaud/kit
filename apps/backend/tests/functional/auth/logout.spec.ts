import testUtils from "@adonisjs/core/services/test_utils";
import { test } from "@japa/runner";
import { UserFactory } from "#database/factories/user_factory";

test.group("Auth / Logout", (group) => {
	group.each.setup(() => testUtils.db().withGlobalTransaction());

	test("should successfully logout if user is authenticated", async ({ client }) => {
		const user = await UserFactory.create();

		const response = await client.delete("/auth/logout").withGuard("web").loginAs(user);

		response.assertNoContent();
	});

	test("should return 401 if user is not authenticated", async ({ client }) => {
		const response = await client.delete("/auth/logout");

		response.assertUnauthorized();
	});
});
