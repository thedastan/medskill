"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, className, ...props }: Props) {
	const baseStyles =
		"px-4 py-3  rounded-[10px] font-semibold text-[18xp] cursor-pointer  transition-all duration-300  bg-[#16AEC0] text-black shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1";

	return (
		<button {...props} className={twMerge(baseStyles, className)}>
			{children}
		</button>
	);
}
