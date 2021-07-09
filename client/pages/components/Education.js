function Education() {
	return (
		<div className="w-full flex flex-col items-start mt-10 space-y-8">
			<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">Education</h3>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
					<h4 className="font-bold text-xl md:text-2xl">
						Veer Narmad South Gujarat University
					</h4>
					<h6 className="text-base md:text-lg font-medium">
						July 2017 - Mar 2020
					</h6>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Degree
						</span>
						<span className="text-base md:text-lg font-medium">Bachelors</span>
					</h5>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Field of Study
						</span>
						<span className="text-base md:text-lg font-medium">
							Computer Science
						</span>
					</h5>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Description
						</span>
						<span className="text-sm md:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</span>
					</h5>
				</div>
				<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
					<h4 className="font-bold text-xl md:text-2xl">Parul University</h4>
					<h6 className="text-base md:text-lg font-medium">
						Aug 2020 - Mar 2022
					</h6>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Degree
						</span>
						<span className="text-base md:text-lg font-medium">Masters</span>
					</h5>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Field of Study
						</span>
						<span className="text-base md:text-lg font-medium">
							Computer Science
						</span>
					</h5>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Description
						</span>
						<span className="text-sm md:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</span>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default Education;
