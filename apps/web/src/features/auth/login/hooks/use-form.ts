import { type UseFormProps, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validator = z.object({
	email: z.any().optional(),
	password: z.any().optional(),
});

export type LoginFormData = z.infer<typeof validator>;

export type UseLoginFormProps = Omit<UseFormProps<LoginFormData>, "resolver">;

export const useLoginForm = (props?: UseLoginFormProps) =>
	useForm<LoginFormData>({
		resolver: zodResolver(validator),
		...props,
	});
