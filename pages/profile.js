import Image from "next/image";
import ProfileImg from "../images/profile.jpg";
import Head from "next/head";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import GithubRepo from "./components/GithubRepo";
import Post from "./components/Post";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialMedia from "./components/SocialMedia";
import { useRouter } from "next/router";
import Certificate from "./components/Certificate";

const Profile = () => {
	const [profileTab, setProfileTab] = useState(true);
	const [postTab, setPostTab] = useState(false);
	const router = useRouter();
	return (
		<motion.div
			className="w-full flex flex-col items-center"
			initial={{ scale: 0.7 }}
			animate={{ scale: 1 }}
		>
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
				<div className="flex flex-col md:flex-row px-20 md:px-8 py-8 items-center justify-center">
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
					<h1 className="text-2xl md:text-4xl text-dc-blue text-center font-bold filter drop-shadow-lg">
						Nikunj Thesiya
					</h1>
					<h1 className="text-sm md:text-xl text-gray-500 text-center font-light">
						Front End Developer at Microsoft.
					</h1>
					<h1 className="text-sm md:text-xl text-gray-500 text-center font-light">
						From Gujarat, India
					</h1>
				</div>

				<SocialMedia />

				<div className="flex items-center mt-5 space-x-4">
					<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-5 md:py-4 md:px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
						<h1 className="text-base sm:text-xl font-bold">956</h1>
						<h1 className="text-xs md:text-lg">Followers</h1>
					</div>
					<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-5 md:py-4 md:px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
						<h1 className="text-base sm:text-xl font-bold">203</h1>
						<h1 className="text-xs md:text-lg">Following</h1>
					</div>
				</div>
				<motion.span
					className="btn-sm mt-5"
					onClick={() => router.push("/dashboard")}
					whileHover={{ scale: 0.8 }}
				>
					Edit Profile
				</motion.span>

				<div className="mt-16">
					<div className="flex w-full items-center justify-center justify-items-center">
						<div className="bg-dc-gray flex space-x-4 rounded-3xl px-6 py-4 md:px-8 md:py-5">
							<motion.span
								className={profileTab ? "tab-active" : "tab-inactive"}
								onClick={() => {
									setPostTab(false);
									setProfileTab(true);
								}}
								whileTap={{ scale: 0.8 }}
							>
								Profile
							</motion.span>
							<motion.span
								className={postTab ? "tab-active" : "tab-inactive"}
								onClick={() => {
									setPostTab(true);
									setProfileTab(false);
								}}
								whileTap={{ scale: 0.8 }}
							>
								Posts
							</motion.span>
						</div>
					</div>
				</div>

				{profileTab && (
					<motion.div
						className="flex w-full flex-col items-center justify-center mt-7"
						initial={{ scale: 0.5 }}
						animate={{ scale: 1 }}
					>
						<Introduction />
						<Skills />
						<Experience />
						<Education />
						<Certificate />
						<GithubRepo />
					</motion.div>
				)}
				{postTab && (
					<motion.div
						className="w-screen md:w-full flex flex-col items-center justify-items-center justify-center mt-7"
						initial={{ scale: 0.5 }}
						animate={{ scale: 1 }}
					>
						<Post
							profile="Nikunj Thesiya"
							image="https://images.unsplash.com/photo-1619782087505-e1544bc70e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=466&q=80"
							description="If you scroll down the page at this point, nothing seems to have changed. Although the utility classes are at work, we need to adjust the background-opacity of the navbar for them to be revealed."
							likes="1038"
							comments="53"
						/>
						<Post
							profile="Milan Thesiya"
							image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
							description="Adding a slight bottom-border allows the harsh color to contrast the blurry background of the navbar, visually identifying the end of the element. It’s subtle, but adds a whole new layer to the overall presentation."
							likes="1038"
							comments="53"
						/>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default Profile;
