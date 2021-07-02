import React, { useState } from "react";
import Profile from "../../images/profile.jpg";
import { BsHeart, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import PostComment from "./PostComment";
import Image from "next/image";

const ReadMore = ({ description }) => {
	const router = useRouter();
	const text = description;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<span className="text w-11/12">
			{isReadMore ? text?.slice(0, 150) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide text-blue-500 hover:underline cursor-pointer"
			>
				{text.length >= 100
					? isReadMore
						? "...read more"
						: " show less"
					: null}
			</span>
		</span>
	);
};

const Post = ({ profile, image, description, likes, comments }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="sm:w-[500px] w-5/6 rounded-3xl bg-dc-gray my-4 p-4 sm:p-7 ">
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
						{profile}
					</span>
				</div>
				<div className="dropdown realtive">
					<div className="bg-white rounded-full p-2 shadow-xl text-gray-600 cursor-pointer hover:shadow-none">
						<BsThreeDotsVertical className="text-lg" />
					</div>
					<ul class="dropdown-menu absolute hidden text-gray-700 text-xs sm:text-sm border border-gray-300 shadow-lg rounded-lg">
						<li class="">
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
					src={image}
					alt="post img"
					className="rounded-3xl w-full shadow-xl my-4 sm:my-5"
				/>
			</div>

			<div className="flex items-start justify-start my-4 sm:my-5">
				<p className="text-xs sm:text-sm  text-gray-600 text-left space-x-2">
					<span className="font-semibold truncate">{profile}</span>
					<ReadMore description={description} />
				</p>
			</div>

			<div className="flex items-center justify-between text-xl sm:text-2xl mt-5 mb-3">
				<div className="flex items-center space-x-5">
					<div className="flex items-center space-x-2 rounded-full bg-white text-gray-600 shadow-xl py-2 px-3 cursor-pointer sm:px-4">
						<BsHeart className="" />
						<p className="text-xs sm:text-sm">{likes}</p>
					</div>
					<div
						className="flex items-center space-x-2 rounded-full bg-white text-gray-600 shadow-xl py-2 px-3 sm:px-4 cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						<FaRegComment className="" />
						<p className="text-xs sm:text-sm">{comments}</p>
					</div>
					{showModal ? (
						<div className="bg-white">
							<div className="justify-center bg-dc-gray bg-opacity-40 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-xl backdrop-filter backdrop-blur-md">
								<div className="relative w-auto my-6 mx-auto max-w-3xl">
									{/*content*/}
									<div className="border-0 rounded-3xl  relative flex flex-col w-80 sm:w-96 md:w-96 lg:w-full bg-white outline-none focus:outline-none shadow-xl">
										{/*header*/}
										<div className="flex items-center justify-between px-7 py-4 border-b border-solid border-blueGray-200 rounded-t">
											<h3 className="text-lg sm:text-xl text-gray-800 font-semibold">
												Comments
											</h3>
											<button
												className="p-1 ml-auto flex items-center justify-center border-0 text-white rounded-xl bg-dc-blue  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
												onClick={() => setShowModal(false)}
											>
												<IoCloseOutline />
											</button>
										</div>
										{/*body*/}
										<div className="p-6 flex flex-col max-h-96 overflow-y-scroll space-y-4 shadow-inner">
											<PostComment />
											<PostComment />
											<PostComment />
										</div>
										{/*footer*/}
										<form className="flex items-center justify-between p-4 sm:p-6 border-t border-solid border-blueGray-200 rounded-b space-x-2 sm:space-x-4">
											<input
												type="text"
												placeholder="write a comment"
												className="w-full text-sm focus:outline-none bg-gray-200 px-4 py-3 rounded-xl"
											/>

											<button
												className="text-white rounded-xl background-transparent font-bold uppercase p-3 bg-dc-blue text-xl outline-none focus:outline-none ease-linear transition-all duration-150"
												type="submit"
												onClick={() => setShowModal(false)}
											>
												<RiSendPlaneFill />
											</button>
										</form>
									</div>
								</div>
							</div>
							<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Post;
