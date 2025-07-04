import hash from "@adonisjs/core/services/hash";
import { test } from "@japa/runner";
import { UserFactory } from "#database/factories/user_factory";

test.group("User", () => {
	test("should hashes user password when creating a new user", async ({ assert }) => {
		const password = "supersecret";
		const user = await UserFactory.merge({ password }).create();

		assert.isTrue(hash.isValidHash(user.password));
		assert.isTrue(await hash.verify(user.password, password));
	});
});
