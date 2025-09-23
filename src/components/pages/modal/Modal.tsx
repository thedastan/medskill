"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMessageSquareText, LuPhone } from "react-icons/lu";

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed right-[50px] bottom-[50px] z-50">
			{/* WhatsApp Button */}
			<Link
				href="https://wa.me/+996700333636"
				target="_blank"
				rel="noopener noreferrer"
				className={`bg-[#3fdf17] w-[50px] h-[50px] flex justify-center items-center text-[30px] rounded-full text-white fixed transition-all duration-300 ease-out z-10
          ${
						isOpen
							? "bottom-[50px] right-[110px]"
							: "bottom-[50px] right-[50px] scale-0 opacity-0"
					}
        `}
				style={{ transformOrigin: "bottom left" }}>
				<FaWhatsapp />
			</Link>

			{/* Phone Button */}
			<Link
				target={"_blank"}
				href="tel:+996 (552) 333 636"
				className={`bg-[#0a9bb4] w-[50px] h-[50px] flex justify-center items-center text-[30px] rounded-full text-white fixed transition-all duration-300 ease-out z-10
          ${
						isOpen
							? "bottom-[110px] right-[50px]"
							: "bottom-[50px] right-[50px] scale-0 opacity-0"
					}
        `}
				style={{ transformOrigin: "bottom right" }}>
				<LuPhone />
			</Link>

			{/* Main Toggle Button */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="bg-[#0a0db4] w-[50px] h-[50px] flex justify-center items-center text-[30px] rounded-full text-white cursor-pointer z-20 relative"
				style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
				<LuMessageSquareText />
			</div>
		</div>
	);
};

export default Modal;
