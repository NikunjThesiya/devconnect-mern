import Head from "next/head";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

function NotFound() {
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
			<h1 className="text-6xl md:text-7xl lg:text-9xl font-bold filter drop-shadow-xl my-4">
				404
			</h1>
			<h3 className="text-xl md:text-2xl lg:text-3xl font-light">
				Oops! Page Not Found.
			</h3>
			<Link href="/posts">
				<span className="flex items-center space-x-2 btn-white my-8">
					<BsArrowLeft className="text-base md:text-xl lg:text-2xl" />
					<span>Go to Home</span>
				</span>
			</Link>
		</div>
	);
}

export default NotFound;
