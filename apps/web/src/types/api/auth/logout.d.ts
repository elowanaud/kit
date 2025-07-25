import type { InferErrorType, InferRequestType, InferResponseType } from "@tuyau/client";
import type { api } from "@/lib/api/client";

export type LogoutRequest = InferRequestType<typeof api.auth.logout.$delete>;
export type LogoutResponse = InferResponseType<typeof api.auth.logout.$delete>;
export type LogoutError = NonNullable<InferErrorType<typeof api.auth.logout.$delete>>;
