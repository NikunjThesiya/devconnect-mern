import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../images/profile.jpg";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 150) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide text-blue-500 hover:underline cursor-pointer"
			>
				{text.length >= 150
					? isReadMore
						? "...read more"
						: " show less"
					: null}
			</span>
		</p>
	);
};

const PostComment = () => {
	return (
		<div className="flex space-x-4">
			<div className="h-24 w-24 lg:w-12 lg:h-12 rounded-full overflow-hidden">
				<Image
					src={Profile}
					alt="comment"
					className="object-cover rounded-full"
				/>
			</div>
			<div className="flex flex-col items-start justify-start">
				<h4 className="text-sm sm:text-base font-medium">
					ll_nikunj.thesiya_ll
				</h4>

				<p className="text-left text-xs sm:text-sm mt-1">
					<ReadMore>
						A Computer Science portal for geeks. It contains well written, well
						thought and well explained computer science, programming articles
						and quizzes. It provides a variety of services for you to learn, so
						thrive and also have fun! Free Tutorials, Millions of Articles,
						Live, Online and Classroom Courses ,Frequent Coding Competitions,
						Webinars by Industry Experts, Internship opportunities, and Job
						Opportunities. Knowledge is power!
					</ReadMore>
				</p>

				<p className="text-left text-xs mt-2 text-gray-500 ">2 hours ago..</p>
			</div>
		</div>
	);
};

export default PostComment;
