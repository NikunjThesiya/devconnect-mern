import Image from "next/image";
import ProfileImg from "../images/profile.jpg";
import ScrollContainer from "react-indiana-drag-scroll";
import Github from "../images/github.svg";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import Head from "next/head";

const Profile = () => {
	return (
        <div className="w-full flex flex-col items-center">

		<div className="flex w-10/12 flex-col items-center justify-center mt-4 mb-24">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Nikunj Thesiya</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
			<div className="flex flex-col md:flex-row px-12 md:px-8 py-8 items-center justify-center">
				<Image
					src={ProfileImg}
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
			<div className="flex items-center mt-5 space-x-4">
				<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
					<h1 className="text-lg sm:text-xl font-bold">956</h1>
					<h1 className="text-sm md:text-lg">Followers</h1>
				</div>
				<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
					<h1 className="text-lg sm:text-xl font-bold">203</h1>
					<h1 className="text-sm md:text-lg">Following</h1>
				</div>
			</div>
			<span className="btn-sm mt-5">Edit Profile</span>

			<div className="w-full flex flex-col items-start mt-10 space-y-8">
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

			{/* Experience */}

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

			{/* Education */}

			<div className="w-full flex flex-col items-start mt-10 space-y-8">
				<h3 className="text-2xl md:text-3xl text-dc-blue font-bold">
					Education
				</h3>
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
							<span className="text-base md:text-lg font-medium">
								Bachelors
							</span>
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

			{/* Github Repo */}
			<div className="w-full flex flex-col items-start mt-10 space-y-8">
				<h3 className="text-xl flex items-center space-x-4 md:text-3xl text-dc-blue font-bold">
					<Image
						src={Github}
						className="object-cover rounded-3xl"
						width={40}
						height={40}
						quality={100}
						objectFit="cover"
					/>
					<span>Github Repositories</span>
				</h3>
				<div className="w-full grid grid-cols-1 gap-6">
					<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
						<h4 className="font-bold text-xl md:text-2xl">Amazone Clone</h4>
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
						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-center">
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<AiOutlineStar className="text-lg" />
								<span>Stars : 107</span>
							</p>
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<AiOutlineEye className="text-lg" />
								<span>Views : 218</span>
							</p>
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<VscRepoForked className="text-lg" />
								<span>Forks : 80</span>
							</p>
						</div>
					</div>
					<div className="px-8 py-6 md:px-10 md:py-8 border border-transparent hover:border-opacity-5 cursor-pointer rounded-3xl bg-dc-gray text-gray-500 hover:border-dc-blue flex flex-col space-y-3">
						<h4 className="font-bold text-xl md:text-2xl">Music Player</h4>
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
						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-center">
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<AiOutlineStar className="text-lg" />
								<span>Stars : 107</span>
							</p>
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<AiOutlineEye className="text-lg" />
								<span>Views : 218</span>
							</p>
							<p className="bg-white px-4 py-2 self-start rounded-lg md:rounded-xl border border-gray-50 text-sm md:text-base flex items-center space-x-1">
								<VscRepoForked className="text-lg" />
								<span>Forks : 80</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
                    </div>
	);
};

export default Profile;
