import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import User from "#models/user";
import UserPresenter from "#presenters/user.presenter";

@inject()
export default class LoginController {
	constructor(protected userPresenter: UserPresenter) {}

	async handle({ request, auth }: HttpContext) {
		const { email, password } = await request.validateUsing(validator);

		const user = await User.verifyCredentials(email, password);
		await auth.use("web").login(user);

		return this.userPresenter.toJSON(user);
	}
}

export const validator = vine.compile(
	vine.object({
		email: vine.any().optional(),
		password: vine.any().optional(),
	}),
);
