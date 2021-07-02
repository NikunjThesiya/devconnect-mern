import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

function UserCard({
	image,
	name,
	job,
	address,
	skill1,
	skill2,
	skill3,
	skill4,
	skill5,
}) {
	return (
		<div className="flex flex-col space-y-4 justify-center md:space-y-0 md:flex-row items-center md:space-x-6 lg:space-x-10 bg-dc-gray w-3/4 md:w-3/4 lg:w-3/5 h-auto rounded-3xl px-8 py-8 overflow-hidden">
			<div className="w-full flex items-center justify-center md:w-1/5">
				<Image
					src={image}
					className="object-cover rounded-3xl"
					width={800}
					height={800}
					quality={100}
					objectFit="cover"
				/>
			</div>
			<div className="w-full md:w-4/5 flex flex-col space-y-3">
				<div className="flex flex-col space-y-1">
					<h1 className="text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl text-dc-blue font-bold cursor-pointer">
						{name}
					</h1>
					<h4 className="text-xs sm:text-sm text-gray-500">{job}</h4>
					<h4 className="text-xs sm:text-sm text-gray-500">{address}</h4>
				</div>
				<ScrollContainer className="flex text-xs md:text-xs xl:text-sm font-light space-x-3 cursor-pointer overflow-scroll hide-scrollbar">
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						{skill1}
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						{skill2}
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						{skill3}
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						{skill4}
					</span>
					<span className="bg-dc-blue text-white px-3 py-1.5 bg-opacity-50 rounded-lg whitespace-nowrap">
						{skill5}
					</span>
				</ScrollContainer>
			</div>
		</div>
	);
}

export default UserCard;
