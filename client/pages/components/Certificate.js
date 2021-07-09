function Certificate() {
	return (
		<div className="w-full flex flex-col items-start mt-10 space-y-8">
			<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
				Certificates
			</h3>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
					<h4 className="font-bold text-xl md:text-2xl hover:text-dc-blue transition-all duration-200 line-clamp-3">
						Google UX Design.
					</h4>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl text-sm md:text-base shadow-lg whitespace-nowrap line-clamp-1">
							Coursera
						</span>
					</h5>
				</div>
				<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
					<h4 className="font-bold text-xl md:text-2xl hover:text-dc-blue transition-all duration-200 line-clamp-3">
						Complete React Master.
					</h4>
					<h5 className="flex flex-col space-y-2">
						<span className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl text-sm md:text-base shadow-lg whitespace-nowrap line-clamp-1">
							Udemy
						</span>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default Certificate;
