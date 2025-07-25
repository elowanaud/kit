import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import UserPresenter from "#presenters/user.presenter";

@inject()
export default class MeController {
	constructor(private readonly userPresenter: UserPresenter) {}

	async handle({ auth }: HttpContext) {
		const user = auth.user!;

		return this.userPresenter.toJSON(user);
	}
}
