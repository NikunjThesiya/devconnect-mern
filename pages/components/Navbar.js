import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.svg";
import Profile from "../../images/default-profile-pic.jpg";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiSearch, FiPlus } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = ({ home, profile, userprofile, search, upload }) => {
	return (
		<div>
			<div className="bg-dc-gray w-full px-4 py-3 sm:px-10 sm:py-3 flex items-center justify-between space-x-2 sm:space-x-0 fixed top-0 z-50">
				<Link to="/">
					<Image
						src={Logo}
						width={48}
						height={48}
						object="contain"
						alt="logo"
						className="w-12"
					/>
				</Link>

				<div className="space-x-4 sm:space-x-6 hidden sm:flex text-xl">
					<Link to="/">
						<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
							<AiFillHome className="" />
						</div>
					</Link>

					<Link to="/search">
						<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
							<FiSearch className="" />
						</div>
					</Link>

					<Link to="/upload">
						<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
							<FiPlus className="" />
						</div>
					</Link>

					<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
						<BsHeart className="" />
					</div>

					<div className="dropdown realtive">
						<div className="w-12 h-12 rounded-2xl cursor-pointer flex items-center justify-center overflow-hidden">
							<Image
								src={Profile}
								width="100%"
								height="100%"
								alt="profile icon"
								className="rounded-2xl hidden sm:flex"
							/>
						</div>
						<ul class="dropdown-menu absolute hidden text-gray-700 text-sm right-10 border shadow-xl border-gray-300 rounded-lg">
							<li class="">
								<Link
									className="rounded-t-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/profile"
								>
									Profile
								</Link>
							</li>
							<li class="">
								<Link
									className="bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/profile"
								>
									Logout
								</Link>
							</li>
							<li class="">
								<Link
									className="rounded-b-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/register"
								>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex space-x-4 sm:hidden">
					<div className="dropdown realtive">
						<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
							<AiOutlineCaretDown className="" />
						</div>
						<ul class="dropdown-menu absolute hidden text-gray-700 text-sm right-7 border border-gray-300 rounded-lg shadow-xl">
							<li class="">
								<Link
									className="rounded-t-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/profile"
								>
									Profile
								</Link>
							</li>
							<li class="">
								<Link
									className="bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/"
								>
									Logout
								</Link>
							</li>
							<li class="">
								<Link
									className="rounded-b-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap"
									to="/register"
								>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="shadow-top overflow-hidden bg-dc-gray filter w-full px-4 py-2 flex items-center justify-between space-x-3 sm:space-x-10 fixed bottom-0 sm:hidden text-xl">
				<Link to="/">
					<div className="p-4 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
						<AiFillHome className="" />
					</div>
				</Link>

				<Link to="/search">
					<div className="p-4 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
						<FiSearch className="" />
					</div>
				</Link>

				<Link to="/upload">
					<div className="p-4 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
						<FiPlus className="" />
					</div>
				</Link>

				<div className="p-4 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer">
					<BsHeart className="" />
				</div>

				<Link to="/profile">
					<div className="w-[52px] h-[52px] rounded-2xl cursor-pointer flex items-center justify-center overflow-hidden">
						<Image
							src={Profile}
							width="100%"
							height="100%"
							alt="profile icon"
							className="rounded-2xl hidden sm:flex"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
