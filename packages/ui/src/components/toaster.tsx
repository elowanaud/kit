import { Toaster as SonnerToaster, type ToasterProps as SonnerToasterProps, toast } from "sonner";

export type ToasterProps = Omit<SonnerToasterProps, "richColors">;

export function Toaster(props: ToasterProps) {
	return <SonnerToaster richColors {...props} />;
}

export { toast };
