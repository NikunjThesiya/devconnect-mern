import ScrollContainer from "react-indiana-drag-scroll";

function Skills() {
	return (
		<div className="w-full flex flex-col items-start mt-10 space-y-8">
			<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">Skills</h3>
			<div className="w-full flex px-6 py-5 md:px-8 md:py-6 rounded-2xl bg-dc-gray  text-gray-700 hover:border-dc-blue border border-transparent hover:border-opacity-5 cursor-pointer text-sm md:text-base">
				<ScrollContainer className="w-full flex items-center space-x-4">
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						ReactJS
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						NodeJS
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						JavaScript
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						TailwindCSS
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						Figma
					</span>
				</ScrollContainer>
			</div>
		</div>
	);
}

export default Skills;
