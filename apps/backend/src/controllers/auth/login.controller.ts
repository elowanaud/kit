import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";
import UserPresenter from "#presenters/user.presenter";

@inject()
export default class LoginController {
	constructor(protected userPresenter: UserPresenter) {}

	async handle({ request, auth }: HttpContext) {
		const { email, password } = request.only(["email", "password"]);

		const user = await User.verifyCredentials(email, password);
		await auth.use("web").login(user);

		return this.userPresenter.toJSON(user);
	}
}
