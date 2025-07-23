import router from "@adonisjs/core/services/router";
import { middleware } from "#start/kernel";

const LoginController = () => import("#controllers/auth/login.controller");
const LogoutController = () => import("#controllers/auth/logout.controller");

router
	.group(() => {
		router.post("/login", [LoginController]).middleware(middleware.guest());
		router.delete("/logout", [LogoutController]).middleware(middleware.auth({ guards: ["web"] }));
	})
	.prefix("/auth");
