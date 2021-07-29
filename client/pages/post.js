import React, { useState } from "react";
import Profile from "../images/profile.jpg";
import { BsHeart, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Post = () => {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="w-full flex flex-col items-center justify-items-center justify-center mb-20 mt-6">
			<motion.div
				className="md:w-[600px] w-5/6 rounded-3xl bg-dc-gray my-4 p-4 sm:p-7"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<div className="rounded-full w-7 h-7 sm:w-9 sm:h-9 overflow-hidden">
							<Image
								src={Profile}
								alt="profile icon"
								className="rounded-full shadow-lg w-7 sm:w-9"
							/>
						</div>
						<span
							to="/userprofile"
							className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold"
						>
							Milan Thesiya
						</span>
					</div>
					<div className="dropdown realtive">
						<div className="bg-white rounded-full p-2 shadow-xl text-gray-600 cursor-pointer hover:shadow-none">
							<BsThreeDotsVertical className="text-lg" />
						</div>
						<ul className="dropdown-menu absolute hidden text-gray-700 text-xs sm:text-sm border border-gray-300 shadow-lg rounded-lg">
							<li className="">
								<span
									className="rounded-md bg-white hover:bg-dc-blue hover:text-white py-2 sm:py-2 px-2 sm:px-4 block whitespace-no-wrap cursor-pointer"
									to="/"
								>
									Delete
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
						alt="post img"
						className="rounded-3xl w-full shadow-xl my-4 sm:my-5"
					/>
				</div>

				<div className="flex flex-col items-start justify-start my-4 sm:my-5 text-xs sm:text-sm  text-gray-600 text-left">
					<ReactReadMoreReadLess
						charLimit={200}
						readMoreText={"Read more ▼"}
						readLessText={"Read less ▲"}
						readMoreClassName="text-blue-500"
						readLessClassName="text-blue-500"
					>
						Adding a slight bottom-border allows the harsh color to contrast the
						blurry background of the navbar, visually identifying the end of the
						element. It’s subtle, but adds a whole new layer to the overall
						presentation.
					</ReactReadMoreReadLess>
				</div>

				<div className="flex items-center justify-between text-xl sm:text-2xl mt-5 mb-3">
					<div className="flex items-center space-x-5">
						<div className="flex items-center space-x-2 rounded-full bg-white text-gray-600 shadow-xl py-2 px-3 cursor-pointer sm:px-4">
							<BsHeart className="" />
							<p className="text-xs sm:text-sm">289</p>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="flex flex-col md:w-[600px] w-5/6 items-start">
				<h1 className="font-bold text-2xl text-gray-600 p-4">Discussion</h1>

				<motion.textarea
					placeholder="Discuss here..."
					rows="4"
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
					className="dc-input"
				/>
				<span className="dashboard-btn-blue my-4 self-end">Submit</span>
			</div>
			<motion.div
				className="md:w-[600px] w-5/6 rounded-3xl bg-dc-gray my-4 p-4 sm:p-7"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<div className="rounded-full w-7 h-7 sm:w-9 sm:h-9 overflow-hidden">
							<Image
								src={Profile}
								alt="profile icon"
								className="rounded-full shadow-lg w-7 sm:w-9"
							/>
						</div>
						<span
							to="/userprofile"
							className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold"
						>
							Milan Thesiya
						</span>
					</div>
					<div className="dropdown realtive">
						<div className="bg-white rounded-full p-2 shadow-xl text-gray-600 cursor-pointer hover:shadow-none">
							<BsThreeDotsVertical className="text-lg" />
						</div>
						<ul className="dropdown-menu absolute hidden text-gray-700 text-xs sm:text-sm border border-gray-300 shadow-lg rounded-lg">
							<li className="">
								<span
									className="rounded-md bg-white hover:bg-dc-blue hover:text-white py-2 sm:py-2 px-2 sm:px-4 block whitespace-no-wrap cursor-pointer"
									to="/"
								>
									Delete
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-start justify-start my-4 sm:my-5 text-xs sm:text-sm  text-gray-600 text-left">
					<ReactReadMoreReadLess
						charLimit={200}
						readMoreText={"Read more ▼"}
						readLessText={"Read less ▲"}
						readMoreClassName="text-blue-500"
						readLessClassName="text-blue-500"
					>
						Adding a slight bottom-border allows the harsh color to contrast the
						blurry background of the navbar, visually identifying the end of the
						element. It’s subtle, but adds a whole new layer to the overall
						presentation. Adding a slight bottom-border allows the harsh color
						to contrast the blurry background of the navbar, visually
						identifying the end of the element.
					</ReactReadMoreReadLess>
				</div>
			</motion.div>
			<motion.div
				className="md:w-[600px] w-5/6 rounded-3xl bg-dc-gray my-4 p-4 sm:p-7"
				initial={{ scale: 0.5 }}
				animate={{ scale: 1 }}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<div className="rounded-full w-7 h-7 sm:w-9 sm:h-9 overflow-hidden">
							<Image
								src={Profile}
								alt="profile icon"
								className="rounded-full shadow-lg w-7 sm:w-9"
							/>
						</div>
						<span
							to="/userprofile"
							className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold"
						>
							Milan Thesiya
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start justify-start my-4 sm:my-5 text-xs sm:text-sm  text-gray-600 text-left">
					<ReactReadMoreReadLess
						charLimit={200}
						readMoreText={"Read more ▼"}
						readLessText={"Read less ▲"}
						readMoreClassName="text-blue-500"
						readLessClassName="text-blue-500"
					>
						Adding a slight bottom-border allows the harsh color to contrast the
						blurry background of the navbar, visually identifying the end of the
						element. It’s subtle, but adds a whole new layer to the overall
						presentation.
					</ReactReadMoreReadLess>
				</div>
			</motion.div>
		</div>
	);
};

export default Post;
