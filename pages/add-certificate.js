import Head from "next/head";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

function AddCertificate() {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center w-full p-10 sm:px-12 sm:py-12 mb-16">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Add Certificate</title>
				<link rel="icon" href="./logo.svg" />
			</Head>

			<div className="w-full flex flex-col space-y-2 md:space-y-4">
				<h1 className="text-dc-blue font-bold text-3xl lg:text-4xl">
					Add Certificate
				</h1>
				<h1 className="text-gray-500 font-light text-lg md:text-xl lg:text-2xl">
					Add any certificate that you achieve from courses or exams completion.
				</h1>
			</div>

			<div className="w-full flex flex-col space-y-2 md:space-y-4 mt-5 md:mt-8">
				<h1 className="text-red-500 font-light text-base md:text-lg lg:text-xl">
					* required fields.
				</h1>

				<form className="flex flex-col space-y-4">
					<div className="flex flex-col space-y-2">
						<input
							type="text"
							placeholder="Certificate Title *"
							className="dc-input"
						/>
					</div>

					<div className="flex flex-col space-y-2">
						<input
							type="text"
							placeholder="Issued Organization Name *"
							className="dc-input"
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<input
							type="text"
							placeholder="Certificate Link *"
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
		</div>
	);
}

export default AddCertificate;
