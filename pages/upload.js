import Head from "next/head";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";

const Upload = () => {
	const [{ alt, src }, setImg] = useState({
		src: null,
		alt: null,
	});
	const onHandleImgChange = (e) => {
		if (e.target.files[0]) {
			setImg({
				src: URL.createObjectURL(e.target.files[0]),
				alt: e.target.files[0].name,
			});
		}
	};
	return (
		<div className="flex flex-col items-center w-full p-10 sm:px-12 sm:py-12 mb-16">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Upload Post</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
			<div className="flex w-full flex-col items-center">
				<motion.h1
					className="text-dc-blue font-bold text-3xl lg:text-4xl"
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
				>
					Upload Post
				</motion.h1>

				<motion.div
					className="bg-dc-gray p-5 rounded-3xl my-6"
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
				>
					<img
						src={src}
						alt={alt}
						width={400}
						height={400}
						className="rounded-2xl object-cover sm:rounded-3xl w-60 h-60 md:w-72 md:h-72 sm:w-64 sm:h-64 lg:w-96 lg:h-96"
					/>
				</motion.div>
				<motion.label
					className="p-4 text-xl sm:text-3xl bg-dc-blue rounded-xl text-dc-gray shadow-md hover:bg-white hover:text-dc-blue border border-transparent hover:border-dc-blue transition duration-200 cursor-pointer hover:shadow-lg ease-in-out mb-4"
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
				>
					<input
						id="hidden-input"
						type="file"
						multiple
						className="hidden"
						onChange={onHandleImgChange}
					/>
					<FaCamera className="" />
				</motion.label>

				<motion.textarea
					placeholder="Write about post.."
					rows="4"
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
					className="dc-input w-full md:w-4/5 lg:w-1/2"
				/>

				<motion.button
					className="dashboard-btn-blue mt-5 md:mt-8"
					onClick={(e) => e.preventDefault()}
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
				>
					<FiUpload className="text-xl" />
					<span>Upload</span>
				</motion.button>
			</div>
		</div>
	);
};

export default Upload;
