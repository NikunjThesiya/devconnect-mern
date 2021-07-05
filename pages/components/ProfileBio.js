import Image from "next/image";
import Profile from "../../images/profile.jpg";
import ScrollContainer from "react-indiana-drag-scroll";

const ProfileBio = () => {
	return (
		<div className="flex w-10/12 flex-col items-center justify-center mt-4 mb-24">
			<div className="flex flex-col md:flex-row px-12 md:px-8 py-8 items-center justify-center">
				<Image
					src={Profile}
					className="object-cover rounded-3xl"
					width={180}
					height={180}
					quality={100}
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col items-center space-y-3">
				<h1 className="text-3xl md:text-4xl text-dc-blue text-center font-bold filter drop-shadow-lg">
					Nikunj Thesiya
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					Front End Developer at Microsoft.
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					From Gujarat, India
				</h1>
			</div>
			<span className="btn-sm mt-5">Follow</span>

			<div className="w-full flex flex-col items-start mt-8 space-y-4">
				<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
					Introduction
				</h3>
				<p className="w-full text-base text-justify md:text-lg rounded-2xl bg-dc-gray px-8 py-6 text-gray-500 hover:border-dc-blue border border-transparent hover:border-opacity-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="w-full flex flex-col items-start mt-8 space-y-4">
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
		</div>
	);
};

export default ProfileBio;
