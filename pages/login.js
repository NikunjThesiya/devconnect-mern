import Image from "next/image";
import { useRouter } from "next/router";
import RegisterImg from "../images/login.jpeg";

function Login() {
	const router = useRouter();
	return (
		<div className="w-full flex relative">
			<div className="flex flex-col items-start w-full lg:w-1/2 bg-white rounded-2xl p-10 sm:px-12 sm:py-12 border border-transparent text-sm sm:text-base">
				<h2 className="text-dc-blue text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
					Sign In
				</h2>

				<form className="w-full flex flex-col space-y-8 mb-7">
					<div className="flex flex-col items-start text-gray-500">
						<label for="name" className="text-base sm:text-lg sr-only">
							Email Address
						</label>
						<input
							type="text"
							name="name"
							placeholder="Email *"
							className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-dc-gray focus:outline-none border border-transparent focus:shadow-inner focus:border-gray-200"
						/>
					</div>
					<div className="flex flex-col items-start text-gray-500">
						<label for="name" className="text-base sm:text-lg sr-only">
							Password
						</label>
						<input
							type="text"
							name="name"
							placeholder="Password *"
							className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-dc-gray focus:outline-none border border-transparent focus:shadow-inner focus:border-gray-200"
						/>
					</div>

					<button
						type="submit"
						className="bg-gradient-to-r from-dc-purple to-dc-blue hover:from-dc-blue hover:to-dc-purple text-white text-sm md:text-sm lg:text-base xl:text-lg x-5 py-4 sm:px-6 sm:py-5 rounded-xl shadow-2xl hover:shadow-xl focus:outline-none transition-all duration-200 ease-in-out"
					>
						Sign In
					</button>
				</form>

				<div className="flex w-full mb-12 md:mb-0 items-center justify-center md:text-lg space-x-2">
					<p className="text-gray-600">Create a new account.</p>
					<span
						className="text-dc-purple cursor-pointer hover:underline"
						onClick={() => router.push("./register")}
					>
						Register
					</span>
				</div>
			</div>
			<div className="w-1/2 p-10 hidden lg:flex items-center bg-dc-gray">
				<Image
					src={RegisterImg}
					width={1000}
					height={1000}
					className="object-cover rounded-3xl"
				/>
			</div>
		</div>
	);
}

export default Login;
