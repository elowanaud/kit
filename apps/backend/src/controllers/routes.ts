import router from "@adonisjs/core/services/router";
import "#controllers/auth/routes";

const HealthChecksController = () => import("#controllers/health_checks.controller");

router.get("/health", [HealthChecksController]);
