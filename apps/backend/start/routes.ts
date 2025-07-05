import router from "@adonisjs/core/services/router";
import { middleware } from "#start/kernel";

router.get("/health", "#controllers/health_checks_controller");

router
	.group(() => {
		router.post("/login", "#controllers/auth/login_controller").middleware(middleware.guest());
		router.delete("/logout", "#controllers/auth/logout_controller").middleware(middleware.auth({ guards: ["web"] }));
	})
	.prefix("/auth");
