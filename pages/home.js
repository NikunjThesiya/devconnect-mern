import Image from "next/image";
import HomeBannerImg from "../images/homebanner.jpg";
import LogoLg from "../images/biglogo.svg";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

function HomeBanner() {
	const router = useRouter();
	return (
		<div className="w-full h-screen">
			<div className="homeBanner bg-cover">
				<div className="absolute bg-dc-gray backdrop-filter backdrop-blur-xl top-0 left-0 w-full h-full bg-opacity-80 flex flex-col items-center justify-center p-12 space-y-8">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-600 filter drop-shadow-md">
						Create developer Profile/Portfolio, Share posts and get help from
						other Developers.
					</h1>

					<button
						type="submit"
						className="btn flex space-x-3 items-center"
						onClick={() => router.push("./register")}
					>
						<span>Get Started</span>
						<BsArrowRight className="text-lg md:text-2xl" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default HomeBanner;
