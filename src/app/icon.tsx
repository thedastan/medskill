import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					background: "linear-gradient(135deg, #16AEC0, #0a9bb4)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}>
				{/* White medical cross */}
				<div
					style={{
						position: "absolute",
						width: "70%",
						height: "20%",
						background: "white",
						borderRadius: 32,
					}}
				/>
				<div
					style={{
						position: "absolute",
						width: "20%",
						height: "70%",
						background: "white",
						borderRadius: 32,
					}}
				/>
			</div>
		),
		size
	);
}
