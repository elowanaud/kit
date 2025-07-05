import factory from "@adonisjs/lucid/factories";
import { DateTime } from "luxon";
import User from "#models/user";

export const UserFactory = factory
	.define(User, async ({ faker }) => {
		return {
			email: faker.internet.email(),
			password: faker.internet.password(),
			createdAt: DateTime.now(),
			updatedAt: DateTime.now(),
		};
	})
	.build();
