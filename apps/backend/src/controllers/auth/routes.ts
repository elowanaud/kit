import router from "@adonisjs/core/services/router";
import { middleware } from "#start/kernel";

const LoginController = () => import("#controllers/auth/login.controller");
const LogoutController = () => import("#controllers/auth/logout.controller");
const MeController = () => import("#controllers/auth/me.controller");

router
	.group(() => {
		router.get("/me", [MeController]).middleware(middleware.auth({ guards: ["web"] }));
		router.post("/login", [LoginController]).middleware(middleware.guest());
		router.delete("/logout", [LogoutController]).middleware(middleware.auth({ guards: ["web"] }));
	})
	.prefix("/auth");
