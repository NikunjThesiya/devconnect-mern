import Head from "next/head";
import Navbar from "./components/layout/Navbar";
import HomeBanner from "./home";

export default function Home() {
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
			<HomeBanner />
		</div>
	);
}
