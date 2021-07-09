function Experience() {
	return (
		<div className="w-full flex flex-col items-start mt-10 space-y-8">
			<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
				Experience
			</h3>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
					<h4 className="font-bold text-xl md:text-2xl">Microsoft</h4>
					<h6 className="text-base md:text-lg font-medium">
						Oct 2018 - Current
					</h6>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Position
						</span>
						<span className="text-base md:text-lg font-medium">
							Front End Developer
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
					<h4 className="font-bold text-xl md:text-2xl">Wipro</h4>
					<h6 className="text-base md:text-lg font-medium">2015 - 2018</h6>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Position
						</span>
						<span className="text-base md:text-lg font-medium">
							UI Designer
						</span>
					</h5>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl shadow-md text-sm md:text-base">
							Description
						</span>
						<span className="text-sm md:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore.
						</span>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default Experience;
