import type { InferErrorType, InferRequestType, InferResponseType } from "@tuyau/client";
import type { api } from "@/lib/api/client";

export type MeRequest = InferRequestType<typeof api.auth.me.$get>;
export type MeResponse = InferResponseType<typeof api.auth.me.$get>;
export type MeError = NonNullable<InferErrorType<typeof api.auth.me.$get>>;
