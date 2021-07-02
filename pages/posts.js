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
			<Post
				profile="Nikunj Thesiya"
				image="https://images.unsplash.com/photo-1619782087505-e1544bc70e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=466&q=80"
				description="If you scroll down the page at this point, nothing seems to have changed. Although the utility classes are at work, we need to adjust the background-opacity of the navbar for them to be revealed."
				likes="1038"
				comments="53"
			/>
			<Post
				profile="Milan Thesiya"
				image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				description="If you scroll down the page at this point, nothing seems to have changed. Although the utility classes are at work, we need to adjust the background-opacity of the navbar for them to be revealed."
				likes="1038"
				comments="53"
			/>
		</div>
	);
}

export default Posts;
