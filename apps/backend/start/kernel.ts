/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import router from "@adonisjs/core/services/router";
import server from "@adonisjs/core/services/server";

/**
 * The error handler is used to convert an exception
 * to an HTTP response.
 */
server.errorHandler(() => import("#exceptions/handler"));

/**
 * The server middleware stack runs middleware on all the HTTP
 * requests, even if there is no route registered for
 * the request URL.
 */
server.use([
	() => import("#middleware/container_bindings.middleware"),
	() => import("#middleware/force_json_response.middleware"),
	() => import("@adonisjs/cors/cors_middleware"),
]);

/**
 * The router middleware stack runs middleware on all the HTTP
 * requests with a registered route.
 */
router.use([
	() => import("@adonisjs/core/bodyparser_middleware"),
	() => import("@adonisjs/session/session_middleware"),
	() => import("@adonisjs/auth/initialize_auth_middleware"),
	() => import("@rlanz/sentry/middleware"),
	() => import("@tuyau/superjson/superjson_middleware"),
]);

/**
 * Named middleware collection must be explicitly assigned to
 * the routes or the routes group.
 */
export const middleware = router.named({
	guest: () => import("#middleware/guest.middleware"),
	auth: () => import("#middleware/auth.middleware"),
});
