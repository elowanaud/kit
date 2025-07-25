import type { InferErrorType, InferRequestType, InferResponseType } from "@tuyau/client";
import type { api } from "@/lib/api/client";

export type LoginRequest = InferRequestType<typeof api.auth.login.$post>;
export type LoginResponse = InferResponseType<typeof api.auth.login.$post>;
export type LoginError =
	| NonNullable<InferErrorType<typeof api.auth.login.$post>>
	| {
			status: 400;
			value: {
				errors: {
					message: string;
				}[];
			};
	  };
