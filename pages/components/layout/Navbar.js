import React, { useEffect, useState } from "react";
import Logo from "../../../images/logo.svg";
import { useRouter } from "next/router";
import Profile from "../../../images/profile.jpg";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiSearch, FiPlus } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
	const router = useRouter();
	return (
		<div className="sticky top-0 z-50">
			<div className="bg-dc-gray w-full px-4 py-3 sm:px-10 sm:py-3 flex items-center justify-between space-x-2 sm:space-x-0 border-b border-gray-100">
				<Link href="/">
					<Image
						src={Logo}
						width={48}
						height={48}
						objectFit="contain"
						alt="logo"
						className="cursor-pointer"
					/>
				</Link>

				<div className="space-x-4 sm:space-x-6 hidden sm:flex text-xl">
					<Link href="/posts">
						<div
							className={
								router.pathname == "/posts" ? `NavLinkActive` : `navLink`
							}
						>
							<AiFillHome className="" />
						</div>
					</Link>

					<Link href="/search">
						<div
							className={
								router.pathname == "/search" ? `NavLinkActive` : `navLink`
							}
						>
							<FiSearch className="" />
						</div>
					</Link>

					<Link href="/upload">
						<div
							className={
								router.pathname == "/upload" ? `NavLinkActive` : `navLink`
							}
						>
							<FiPlus className="" />
						</div>
					</Link>

					<div
						className={
							router.pathname == "/activities" ? `NavLinkActive` : `navLink`
						}
					>
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
							<li className="rounded-t-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap text-center">
								<Link href="/profile">Profile</Link>
							</li>
							<li className="bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap text-center">
								<Link href="/profile">Logout</Link>
							</li>
							<li className="rounded-b-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap text-center">
								<Link href="/register">Register</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex space-x-4 sm:hidden">
					<div className="dropdown realtive">
						<div className="p-3.5 bg-white rounded-xl text-gray-500 hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer border border-gray-100">
							<AiOutlineCaretDown className="" />
						</div>
						<ul class="dropdown-menu absolute hidden text-gray-700 text-sm right-7 border border-gray-300 rounded-lg shadow-xl">
							<li className="rounded-t-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap">
								<Link href="/profile">Profile</Link>
							</li>
							<li className="bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap">
								<Link href="/">Logout</Link>
							</li>
							<li className="rounded-b-lg bg-white hover:bg-dc-blue hover:text-white transition duration-200 ease-in-out cursor-pointer py-2 px-4 block whitespace-no-wrap">
								<Link href="/register">Register</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="shadow-top overflow-hidden bg-dc-gray filter w-full px-4 py-2 flex items-center justify-between space-x-3 sm:space-x-10 fixed bottom-0 sm:hidden text-xl">
				<Link href="/posts">
					<span
						className={
							router.pathname == "/posts" ? `NavLinkActive` : `navLink`
						}
					>
						<AiFillHome className="" />
					</span>
				</Link>

				<Link href="/search">
					<span
						className={
							router.pathname == "/search" ? `NavLinkActive` : `navLink`
						}
					>
						<FiSearch className="" />
					</span>
				</Link>

				<Link href="/upload">
					<span
						className={
							router.pathname == "/upload" ? `NavLinkActive` : `navLink`
						}
					>
						<FiPlus className="" />
					</span>
				</Link>

				<span
					className={
						router.pathname == "/activities" ? `NavLinkActive` : `navLink`
					}
				>
					<BsHeart className="" />
				</span>

				<Link href="/profile">
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
