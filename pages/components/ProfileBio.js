import Image from "next/image";
import Profile from "../../images/profile.jpg";
import ScrollContainer from "react-indiana-drag-scroll";

const ProfileBio = () => {
	return (
		<div className="flex w-3/4 flex-col items-center justify-center mt-4 mb-24">
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
				<h1 className="text-3xl md:text-4xl text-dc-blue text-center font-bold">
					Nikunj Thesiya
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					Front End Developer at Microsoft.
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					From Gujarat, India
				</h1>
			</div>
			<span className="btn-sm mt-5">Edit Profile</span>
		</div>
	);
};

export default ProfileBio;
