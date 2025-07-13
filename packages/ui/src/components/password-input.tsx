"use client";

import { Button } from "@kit/ui/components/button";
import { Input, type InputProps } from "@kit/ui/components/input";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icons";

export type PasswordInputProps = Omit<InputProps, "type" | "rightIcon">;

export function PasswordInput(props: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<Input
			type={showPassword ? "text" : "password"}
			rightIcon={
				<Button
					variant="ghost"
					size="icon-sm"
					disabled={props.disabled}
					className="pointer-events-auto left-0.5"
					onClick={handleTogglePasswordVisibility}
					tabIndex={-1}
				>
					{showPassword ? <EyeOffIcon /> : <EyeIcon />}
				</Button>
			}
			{...props}
		/>
	);
}
