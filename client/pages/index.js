import Head from "next/head";
import Image from "next/image";
import LogoLg from "../images/biglogo.svg";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
	const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>DevConnect</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
			<div className="w-full h-[80vh]">
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
						>
							<span>Get Started</span>
							<BsArrowRight className="text-lg md:text-2xl" />
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
}
