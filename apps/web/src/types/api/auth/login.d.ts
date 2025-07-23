import { InferRequestType, InferResponseType, InferErrorType } from "@tuyau/client";
import { useApi } from "@/lib/api/client";

export type LoginRequest = InferRequestType<typeof useApi.auth.login.$post>;
export type LoginResponse = InferResponseType<typeof useApi.auth.login.$post>;
export type LoginError =
	| NonNullable<InferErrorType<typeof useApi.auth.login.$post>>
	| {
			status: 400;
			value: {
				errors: {
					message: string;
				}[];
			};
	  };
