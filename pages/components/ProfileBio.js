import Image from "next/image";
import Profile from "../../images/profile.jpg";
import ScrollContainer from "react-indiana-drag-scroll";

const ProfileBio = () => {
	return (
		<div className="flex md:w-full flex-col md:flex-row items-center my-2 sm:my-4 px-4 sm:px-10 py-2 sm:py-4 justify-center space-x-5 sm:space-x-8 md:space-x-10 lg:space-x-11 overflow-hidden">
			<div className="rounded-3xl sm:rounded-3xl bg-gray-100 p-3 sm:p-4 overflow-hidden flex-grow-0 h-28 w-28 sm:h-40 sm:w-40 lg:w-52 lg:h-52 md:w-52 md:h-52">
				<Image
					src={Profile}
					alt="profile icon"
					className="object-cover rounded-2xl sm:rounded-3xl"
					width={800}
					height={800}
					quality={100}
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col p-2 sm:p-4 space-y-0 sm:space-y-3 md:space-y-3 self-start items-center md:items-start">
				<div className="flex items-center md:w-96 space-x-5 whitespace-nowrap">
					<ScrollContainer className="text-lg sm:text-xl md:text-2xl text-gray-600 whitespace-nowrap cursor-pointer overflow-scroll hide-scrollbar font-semibold">
						Nikunj Thesiya Nikunj Thesiya Nikunj Thesiya Nikunj Thesiya
					</ScrollContainer>

					<button className="hidden md:inline sm:p-2 text-xs bg-dc-blue rounded-lg text-white focus:outline-none">
						Edit Profile
					</button>
				</div>
				<div className="flex flex-col items-start text-sm sm:text-sm md:text-base space-y-1 whitespace-nowrap">
					<ScrollContainer className="text-gray-500  w-80 whitespace-nowrap overflow-scroll hide-scrollbar cursor-pointer">
						Front End Developer Front End Developer Front End DeveloperFront End
						DeveloperFront End DeveloperFront End DeveloperFront End Developer
					</ScrollContainer>

					<h3 className=" text-gray-500">Gujarat, India</h3>
					<button className="inline sm:hidden p-2 text-xs bg-dc-blue rounded-md text-white focus:outline-none whitespace-nowrap">
						Edit Profile
					</button>
				</div>
				<div className="hidden sm:flex space-x-5 sm:text-xs md:text-sm">
					<div className="flex flex-col sm:p-3 md:px-5 md:py-4 bg-dc-gray rounded-xl text-gray-500  text-center">
						<span className="font-semibold text-lg">1028</span>
						<span>Followers</span>
					</div>
					<div className="flex flex-col sm:p-3 md:px-5 md:py-4 bg-dc-gray rounded-xl text-gray-500  text-center">
						<span className="font-semibold text-lg">457</span>
						<span>Followings</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileBio;
