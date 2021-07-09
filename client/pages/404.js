import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

function NotFound() {
	const router = useRouter();

	return (
		<div className="w-full h-screen bg-gradient-to-r from-dc-purple to-dc-blue flex flex-col items-center justify-center justify-items-center text-white">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>DevConnect | 404</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
			<motion.h1
				className="text-6xl md:text-7xl lg:text-9xl font-bold filter drop-shadow-xl my-4"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				404
			</motion.h1>
			<motion.h3
				className="text-xl md:text-2xl lg:text-3xl font-light"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				Oops! Page Not Found.
			</motion.h3>
			<motion.span
				onClick={() => router.push("/posts")}
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.8 }}
			>
				<span className="flex items-center space-x-2 btn-white my-8">
					<BsArrowLeft className="text-base md:text-xl lg:text-2xl" />
					<span>Go to Home</span>
				</span>
			</motion.span>
		</div>
	);
}

export default NotFound;
