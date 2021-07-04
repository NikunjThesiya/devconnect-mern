import Image from "next/image";
import HomeBannerImg from "../images/homebanner.jpg";
import LogoLg from "../images/biglogo.svg";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function HomeBanner() {
	const router = useRouter();
	return (
		<div className="w-full h-[100vh]">
			<div className="homeBanner bg-cover">
				<div className="absolute bg-dc-gray backdrop-filter backdrop-blur-xl top-0 left-0 w-full h-full bg-opacity-80 flex flex-col items-center justify-center p-12 space-y-8">
					<motion.h1
						className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-600 filter drop-shadow-md"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
					>
						Create developer Profile/Portfolio, Share posts and get help from
						other Developers.
					</motion.h1>

					<motion.button
						type="submit"
						className="btn flex space-x-3 items-center"
						onClick={() => router.push("./register")}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 1, type: "spring", stiffness: 120 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<span>Get Started</span>
						<BsArrowRight className="text-lg md:text-2xl" />
					</motion.button>
				</div>
			</div>
		</div>
	);
}

export default HomeBanner;
