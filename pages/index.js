import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
		</div>
	);
}
