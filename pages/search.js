import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import UserCard from "./components/UserCard";
import profile from "../images/profile.jpg";
import profile2 from "../images/register.jpeg";

const Search = () => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="mb-24">
			<div className="flex flex-col items-center">
				<div className="mt-5 w-5/6 md:w-3/4 flex flex-col">
					<div className="flex items-center px-3 py-2 sm:py-0 sm:px-5 my-5 space-x-4 hover:shadow-inner text-sm md:text-xl bg-gray-100 rounded-xl sm:rounded-2xl text-gray-500">
						<FiSearch className="text-lg" />
						<input
							type="text"
							placeholder="Search"
							className="bg-transparent w-full focus:outline-none text-xs sm:text-sm md:text-base py-2 sm:py-4"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col space-y-6 items-center">
					<UserCard
						image={profile2}
						name="Milan Thesiya"
						job="Ui Designer"
						address="Gujarat, India"
						skill1="Adobe XD"
						skill2="Figma"
						skill3="Photoshop"
						skill4="TailwindCSS"
						skill5="React"
					/>
					<UserCard
						image={profile}
						name="Nikunj Thesiya"
						job="Front End Developer"
						address="Gujarat, India"
						skill1="React"
						skill2="NextJS"
						skill3="Redux"
						skill4="TailwindCSS"
						skill5="Firebase"
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
