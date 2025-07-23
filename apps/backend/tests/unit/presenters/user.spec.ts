import { test } from "@japa/runner";
import { UserFactory } from "#database/factories/user_factory";
import UserPresenter from "#presenters/user.presenter";

test.group("Presenters / User", () => {
	test("should return user data in JSON format", async ({ assert }) => {
		const user = await UserFactory.makeStubbed();

		const presenter = new UserPresenter();
		const json = presenter.toJSON(user);

		assert.deepEqual(json, {
			id: user.id,
			email: user.email,
			createdAt: user.createdAt.toJSDate(),
			updatedAt: user.updatedAt.toJSDate(),
		});
	});
});
