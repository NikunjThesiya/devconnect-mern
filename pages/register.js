import Image from "next/image";
import { useRouter } from "next/router";
import RegisterImg from "../images/register.jpeg";

function Register() {
	const router = useRouter();
	return (
		<div className="w-full flex relative">
			<div className="w-1/2 p-12 hidden lg:flex items-center justify-center bg-dc-gray">
				<Image
					src={RegisterImg}
					width={1000}
					height={1000}
					className="object-cover rounded-3xl"
				/>
			</div>
			<div className="flex flex-col items-start w-full lg:w-1/2 bg-white rounded-2xl p-10 sm:px-12 sm:py-12 border border-transparent text-sm sm:text-base">
				<h2 className="text-dc-blue text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
					Sign Up
				</h2>

				<form className="w-full flex flex-col space-y-8 mb-7">
					<div className="flex flex-col items-start text-gray-500">
						<label for="name" className="text-base sm:text-lg sr-only">
							Your Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Your Name *"
							className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-dc-gray focus:outline-none border border-transparent focus:shadow-inner focus:border-gray-200"
						/>
					</div>
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
					<div className="flex flex-col items-start text-gray-500">
						<label for="name" className="text-base sm:text-lg sr-only">
							Confirm Password
						</label>
						<input
							type="text"
							name="name"
							placeholder="Confirm Password *"
							className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-dc-gray focus:outline-none border border-transparent focus:shadow-inner focus:border-gray-200"
						/>
					</div>

					<button type="submit" className="btn">
						Submit
					</button>
				</form>

				<div className="flex w-full mb-12 md:mb-0 items-center justify-center md:text-lg space-x-2">
					<p className="text-gray-600">Already Member?</p>
					<span
						className="text-dc-purple cursor-pointer"
						onClick={() => router.push("./login")}
					>
						Sign In
					</span>
				</div>
			</div>
		</div>
	);
}

export default Register;
