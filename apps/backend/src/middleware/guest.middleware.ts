import type { Authenticators } from "@adonisjs/auth/types";
import type { HttpContext } from "@adonisjs/core/http";
import type { NextFn } from "@adonisjs/core/types/http";

/**
 * Guest middleware is used to deny access to routes that should
 * be accessed by unauthenticated users.
 *
 * For example, the login page should not be accessible if the user
 * is already logged-in
 */
export default class GuestMiddleware {
	async handle(ctx: HttpContext, next: NextFn, options: { guards?: (keyof Authenticators)[] } = {}) {
		for (const guard of options.guards || [ctx.auth.defaultGuard]) {
			if (await ctx.auth.use(guard).check()) {
				return ctx.response.unauthorized();
			}
		}

		return next();
	}
}
