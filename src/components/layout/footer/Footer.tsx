import logo from "@/assets/img/image 8.png";
import logo2 from "@/assets/img/Med Skill.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-[#16AEC0] py-6">
			<div className="container">
				<div className="flex md:flex-row flex-col pb-4 justify-between items-center">
					<div className="flex items-center">
						<Image src={logo} alt="img" />
						<Image src={logo2} alt="img" />
					</div>
					<h3 className="md:text-[30px] text-[18px] text-center font-[600] leading-[38px] md:w-[250px] w-full text-white">
						Скорая медицинская помощь
					</h3>

					<Link
						href="tel:+996700333636"
						target={"_blank"}
						className="md:text-[32px] text-[18px] text-white">
						+996 (700) 333 636
					</Link>
				</div>

				<div className="  border-t border-white flex items-center justify-between pt-4">
					<p className="text-white text-[16px]">ОсОО &quot;МедСкилл&quot;</p>

					<p className="text-white text-[16px]">ИНН 02608202110272</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
