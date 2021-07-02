import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

function NotFound() {
	return (
		<div className="w-full h-screen bg-gradient-to-r from-dc-purple to-dc-blue flex flex-col items-center justify-center justify-items-center text-white">
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
