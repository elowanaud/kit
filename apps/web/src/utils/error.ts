import { TuyauHTTPError } from "@tuyau/client";
import { forbidden, notFound, unauthorized } from "next/navigation";

export function handleHTTPError(error: Error) {
	if (error instanceof TuyauHTTPError) {
		switch (error.status) {
			case 401:
				unauthorized();
				break;
			case 403:
				forbidden();
				break;
			case 404:
				notFound();
				break;
			default:
				throw error;
		}
	}

	throw error;
}
