import logo from "@/assets/img/image 8.png";
import logo2 from "@/assets/img/Med Skill.png";
import circle from "@/assets/img/Frame 1 (2).png";
import ambulance from "@/assets/img/sjebrohbfui 1.png";
import Image from "next/image";

 

import fone from "@/assets/img/bg.png";
import Svg1 from "@/assets/svg/svg";
import Svg2 from "@/assets/svg/svg2";
import Svg3 from "@/assets/svg/svg3";
import Svg4 from "@/assets/svg/svg4";
import Link from "next/link";

const Hero = () => {
	const data = [
		{
			img:  <Svg1/>,
			title: "Работаем день и ночь",
		},
		{
			img: <Svg2/>,
			title: "Профессиональная команда",
		},
		{
			img: <Svg3/>,
			title: "Гарантия на качество сделанной работы",
		},
		{
			img: <Svg4/>,
			title: "Мы любим пунктуальность",
		},
	];
	return (
		<section
			style={{
				backgroundImage: `url(${fone.src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="bg-[#00BCD4] md:py-[40px] py-[20px] min-h-[100vh] w-full">
			<div className="container">
				<div className="flex md:flex-row flex-col justify-between   items-center">
					<div className="flex flex-col gap-[30px] md:gap-[50px] pt-5 w-full items-center md:items-start">
						<div className="flex items-center md:flex-row flex-col">
							<Image src={logo} alt="img" />
							<Image src={logo2} alt="img" />
						</div>
						<h1 className="text-white font-[600] w-full md:max-w-[520px] max-w-[350px] text-center md:text-start md:text-[60px] text-[35px] leading-[50px] md:leading-[60px]">
							Скорая помощь <br /> в Бишкеке
						</h1>
						<Link href={"tel:+996700333636"} target={"_blank"} className="bg-[#f0f0f0] md:flex justify-center items-center hidden w-full max-w-[210px] h-[70px] text-[20px] text-[#00a1b4] font-[600] rounded-[15px] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_inset_3px_4px_10px_#ffffff] ">
							Вызвать
						</Link>
					</div>

					<div className="w-full md:mt-0 mt-10 relative flex items-center overflow-hidden">
						<Image
							src={circle}
							alt="img"
							className="animate-spin-right z-1  "
						/>
						<div className="absolute flex justify-center">
							<div className="flex gap-[30px] absolute mr-[50px]">
								<div className="md:w-[80px] w-[60px] md:h-[30px] h-[20px] rounded-xl bg-[#0044ff] shadow-[0_0_20px_8px_#0044ff] animate-blink"></div>
								<div className="md:w-[80px] w-[60px] md:h-[30px] h-[20px] rounded-xl bg-[#0044ff] shadow-[0_0_20px_8px_#0044ff] animate-blink"></div>
							</div>

							<Image src={ambulance} className="" alt="img" />
						</div>
					</div>
					<Link href={"tel:+996700333636"} target={"_blank"} className="bg-[#f0f0f0] flex justify-center items-center md:hidden mt-10 w-full max-w-[210px] h-[70px] text-[20px] text-[#00a1b4] font-[600] rounded-[15px] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_inset_3px_4px_10px_#ffffff] ">
						Вызвать
					</Link>
				</div>

				<div className="md:flex hidden flex-col md:flex-row gap-6 mt-[40px]">
					{data.map((el, index) => (
						<div
							key={index}
							className="bg-white rounded-[30px] flex flex-col justify-center gap-3 items-center p-4 w-full">
							 <h1>{el.img}</h1>

							<p className="text-[#16aec0] text-[18px] text-center leading-6">
								{el.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
