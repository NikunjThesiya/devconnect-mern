import Post from "./components/Post";

function Posts() {
	return (
		<div
			className="w-full flex flex-col items-center justify-items-center justify-center mb-20 mt-6"
			id="posts"
		>
			<Post />
		</div>
	);
}

export default Posts;
