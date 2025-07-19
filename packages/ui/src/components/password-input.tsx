import { Toggle } from "@base-ui-components/react";
import { Button } from "@kit/ui/components/button";
import { Input, type InputProps } from "@kit/ui/components/input";
import { EyeIcon, EyeOffIcon } from "@kit/ui/icons";
import { useState } from "react";

export type PasswordInputProps = Omit<InputProps, "type" | "rightIcon">;

export function PasswordInput(props: PasswordInputProps) {
	const [isPasswordReadable, setIsPasswordReadable] = useState(false);

	return (
		<Input
			type={isPasswordReadable ? "text" : "password"}
			rightIcon={
				<Toggle
					pressed={isPasswordReadable}
					onPressedChange={(pressed) => setIsPasswordReadable(pressed)}
					disabled={props.disabled}
					className="pointer-events-auto"
					render={
						<Button variant="ghost" size="icon-sm">
							{isPasswordReadable ? <EyeOffIcon /> : <EyeIcon />}
						</Button>
					}
				/>
			}
			{...props}
		/>
	);
}
