import Head from "next/head";
import Post from "./components/Post";

function Posts() {
	return (
		<div
			className="w-full flex flex-col items-center justify-items-center justify-center mb-20 mt-6"
			id="posts"
		>
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
			<Post />
		</div>
	);
}

export default Posts;
