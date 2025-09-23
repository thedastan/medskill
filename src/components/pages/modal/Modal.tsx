"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const Modal = () => {
	return (
		<div className="fixed right-[50px] bottom-[50px] z-50">
			{/* WhatsApp Button */}
			<Link
				href="https://wa.me/+996700333636"
				target="_blank"
				rel="noopener noreferrer"
				className={`bg-[#3fdf17] w-[50px] h-[50px] flex z-50 right-8 bottom-8 justify-center items-center text-[30px] rounded-full text-white fixed  
          
        `}>
				<FaWhatsapp />
			</Link>

			{/* Phone Button */}
			<Link
				target={"_blank"}
				href="tel:+996 (552) 333 636"
				className={`bg-[#0a9bb4] w-[50px] h-[50px] flex z-50 right-8 bottom-24 justify-center items-center text-[30px] rounded-full text-white fixed  
          
        `}>
				<LuPhone />
			</Link>

			{/* Main Toggle Button */}
		</div>
	);
};

export default Modal;
