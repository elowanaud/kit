import router from "@adonisjs/core/services/router";

router.get("/health", "#controllers/health_checks_controller");
router.get("/", async () => {
	return {
		hello: "world",
	};
});
