import Head from "next/head";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

function AddExperience() {
	const router = useRouter();
	return (
		<motion.div
			className="flex flex-col items-center w-full p-10 sm:px-12 sm:py-12 mb-16"
			initial={{ scale: 0.7 }}
			animate={{ scale: 1 }}
		>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Add Experience</title>
				<link rel="icon" href="./logo.svg" />
			</Head>

			<div className="w-full flex flex-col space-y-2 md:space-y-4">
				<h1 className="text-dc-blue font-bold text-3xl lg:text-4xl">
					Add Experience
				</h1>
				<h1 className="text-gray-500 font-light text-sm md:text-xl lg:text-2xl">
					Add any developer/programming positions that you currently have or had
					in Past.
				</h1>
			</div>

			<div className="w-full flex flex-col space-y-2 md:space-y-4 mt-5 md:mt-8">
				<h1 className="text-red-500 font-light text-sm md:text-lg lg:text-xl">
					* required fields.
				</h1>

				<form className="flex flex-col space-y-4">
					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Job Title *" className="dc-input" />
					</div>

					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Company *" className="dc-input" />
					</div>
					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Location" className="dc-input" />
					</div>
					<div className="w-full grid grid-cols-2 gap-x-4">
						<div className="flex flex-col space-y-2">
							<span className="text-base md:text-lg text-gray-500">
								From Date
							</span>
							<input type="date" className="form-input dc-input" />
						</div>
						<div className="flex flex-col space-y-2">
							<span className="text-base md:text-lg text-gray-500">
								To Date
							</span>
							<input type="date" className="form-input dc-input" />
						</div>
					</div>
					<div className="flex w-full space-x-3">
						<input
							type="checkbox"
							className="form-checkbox text-dc-blue w-7 h-7 rounded-md border-2 border-dc-blue"
						/>
						<span className="text-base md:text-lg text-gray-500">
							Currently Working Here{" "}
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<textarea
							placeholder="Job Description"
							rows="4"
							className="dc-input"
						/>
					</div>

					<div className="w-full flex flex-col gap-4 md:flex-row md:justify-end mt-8 md:mt-10">
						<button
							type="submit"
							className="dashboard-btn-blue self-end md:self-start"
						>
							Submit
						</button>
						<span
							className="dashboard-btn-white md:self-start"
							onClick={() => router.push("/dashboard")}
						>
							<BsArrowLeft className="text-lg" />
							<span>Go back to dashboard</span>
						</span>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default AddExperience;
