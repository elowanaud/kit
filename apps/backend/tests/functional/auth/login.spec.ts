import testUtils from "@adonisjs/core/services/test_utils";
import { test } from "@japa/runner";
import { UserFactory } from "#database/factories/user_factory";

test.group("Auth / Login", (group) => {
	group.each.setup(() => testUtils.db().withGlobalTransaction());

	test("should successfully login with valid credentials", async ({ client }) => {
		const password = "supersecret";
		const user = await UserFactory.merge({ password }).create();

		const response = await client.post("/auth/login").json({
			email: user.email,
			password,
		});

		response.assertOk();
		response.assertBodyContains({
			id: user.id,
			email: user.email,
		});
	});

	test("should return 400 with invalid credentials", async ({ client }) => {
		const user = await UserFactory.create();

		const response = await client.post("/auth/login").json({
			email: user.email,
			password: "invalid",
		});

		response.assertBadRequest();
		response.assertBodyContains({
			errors: [
				{
					message: "Invalid user credentials",
				},
			],
		});
	});

	test("should return 401 if already logged in", async ({ client }) => {
		const user = await UserFactory.create();

		const response = await client
			.post("/auth/login")
			.json({
				email: user.email,
				password: "supersecret",
			})
			.withGuard("web")
			.loginAs(user);

		response.assertUnauthorized();
	});
});
