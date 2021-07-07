import Head from "next/head";
import { FaRegEdit } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/router";

function Dashbord() {
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
				<title>Dashboard</title>
				<link rel="icon" href="./logo.svg" />
			</Head>

			<div className="w-full flex flex-col space-y-2 md:space-y-4">
				<h1 className="text-dc-blue font-bold text-3xl lg:text-4xl">
					Dashboard
				</h1>
				<h1 className="text-gray-500 font-light text-lg md:text-xl lg:text-2xl">
					Hello! Nikunj Thesiya
				</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 sm:gap-y-5 lg:flex w-full items-center mt-5 md:mt-8">
				<div
					className="dashboard-btn-white"
					onClick={() => router.push("/create-profile")}
				>
					<FaRegEdit className="text-xl" />
					<span>Edit Profile</span>
				</div>
				<div className="dashboard-btn-white">
					<BsPlus className="text-xl" />
					<span>Add Experience</span>
				</div>
				<div className="dashboard-btn-white">
					<BsPlus className="text-xl" />
					<span>Add Education</span>
				</div>
				<div className="dashboard-btn-white">
					<BsPlus className="text-xl" />
					<span>Add Certificate</span>
				</div>
			</div>

			<div className="w-full flex flex-col mt-5 md:mt-8">
				<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
					Experience
				</h3>

				{/* Experience Table */}

				<div class="overflow-auto">
					<div className="mt-5 text-center  flex flex-col space-y-3">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-header">
								<span className="p-1">Company</span>
							</span>
							<span className="dc-table-header hidden sm:flex">
								<span className="p-1">Title</span>
							</span>
							<span className="dc-table-header hidden lg:flex">
								<span className="p-1">Years</span>
							</span>
							<span className="dc-table-header">
								<span className="p-1">Remove</span>
							</span>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-data">
								<span className="px-3 line-clamp-1">Microsoft</span>
							</span>

							<span className="dc-table-data hidden sm:flex">
								<span className="px-3 line-clamp-1">
									Front End Developer Front End Developer
								</span>
							</span>

							<span className="dc-table-data hidden lg:flex">
								<span className="px-3 line-clamp-1">2018 - Current</span>
							</span>

							<span className="dc-table-data flex flex-col items-center justify-center">
								<span className="dc-btn-delete">
									<MdDelete />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col mt-5 md:mt-8">
				<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
					Education
				</h3>

				{/* Education Table */}

				<div class="overflow-auto">
					<div className="mt-5 text-center  flex flex-col space-y-3">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-header">
								<span className="p-1">School / College</span>
							</span>
							<span className="dc-table-header hidden sm:flex">
								<span className="p-1">Degree</span>
							</span>
							<span className="dc-table-header hidden lg:flex">
								<span className="p-1">Years</span>
							</span>
							<span className="dc-table-header">
								<span className="p-1">Remove</span>
							</span>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-data">
								<span className="px-3 line-clamp-1">Parul University</span>
							</span>

							<span className="dc-table-data hidden sm:flex">
								<span className="px-3 line-clamp-1">Masters</span>
							</span>

							<span className="dc-table-data hidden lg:flex">
								<span className="px-3 line-clamp-1">2020 - Current</span>
							</span>

							<span className="dc-table-data flex flex-col items-center justify-center">
								<span className="dc-btn-delete">
									<MdDelete />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col mt-5 md:mt-8">
				<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
					Certificate
				</h3>

				{/* Certificate Table */}

				<div class="overflow-auto">
					<div className="mt-5 text-center  flex flex-col space-y-3">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-header">
								<span className="p-1">Title</span>
							</span>
							<span className="dc-table-header hidden sm:flex">
								<span className="p-1">Organization</span>
							</span>
							<span className="dc-table-header hidden lg:flex">
								<span className="p-1">Certificate ID</span>
							</span>
							<span className="dc-table-header">
								<span className="p-1">Remove</span>
							</span>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
							<span className="dc-table-data">
								<span className="px-3 line-clamp-2">
									Google UX Design Google UX Design
								</span>
							</span>

							<span className="dc-table-data hidden sm:flex">
								<span className="px-3 line-clamp-1">Coursera</span>
							</span>
							<span className="dc-table-data hidden lg:flex">
								<span className="px-3 line-clamp-1">XXXXXX-XX-XXXX</span>
							</span>
							<span className="dc-table-data flex flex-col items-center justify-center">
								<span className="dc-btn-delete">
									<MdDelete />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col mt-8 md:mt-10">
				<span className="btn self-start">Delete My Account</span>
			</div>
		</div>
	);
}

export default Dashbord;
