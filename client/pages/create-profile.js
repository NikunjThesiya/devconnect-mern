import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Github from "../images/github.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedin.svg";
import Website from "../images/website.svg";
import { useRouter } from "next/router";
import { useState } from "react";

function CreateProfile() {
	const router = useRouter();
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
		<motion.div
			className="flex flex-col items-center w-full p-10 sm:px-12 sm:py-12 mb-16"
			initial={{ scale: 0.7 }}
			animate={{ scale: 1 }}
		>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Create Profile</title>
				<link rel="icon" href="./logo.svg" />
			</Head>

			<div className="w-full flex flex-col space-y-2 md:space-y-4">
				<h1 className="text-dc-blue font-bold text-3xl lg:text-4xl">
					Create Profile
				</h1>
				<h1 className="text-gray-500 font-light text-sm md:text-xl lg:text-2xl">
					Let's get some information to make your profile stand out.
				</h1>
			</div>

			<div className="w-full flex flex-col space-y-2 md:space-y-4 mt-5 md:mt-8">
				<h1 className="text-red-500 font-light text-sm md:text-lg lg:text-xl">
					* required fields.
				</h1>

				<form className="flex flex-col space-y-4" action="#">
					<div className="flex flex-col space-y-2">
						<div className="w-full flex flex-col items-center justify-center">
							<h1 className="text-dc-blue font-bold text-sm md:text-lg">
								Profile Image
							</h1>
							<div className="bg-dc-gray p-5 rounded-3xl my-6">
								<img
									src={src}
									alt={alt}
									className="rounded-2xl object-cover sm:rounded-3xl w-36 h-36 md:w-60 md:h-60"
								/>
							</div>
							<label className="p-4 text-xl sm:text-3xl bg-dc-blue rounded-xl text-dc-gray shadow-md hover:bg-white hover:text-dc-blue border border-transparent hover:border-dc-blue transition duration-200 cursor-pointer hover:shadow-lg ease-in-out mb-4">
								<input
									id="hidden-input"
									type="file"
									multiple
									className="hidden"
									id="file"
									onChange={onHandleImgChange}
								/>
								<FaCamera className="" />
							</label>
						</div>
						<div className="w-full rounded-xl pr-5 sm:pr-6 bg-dc-gray focus:outline-none border border-transparent focus:shadow-inner focus:border-gray-200">
							<select
								id="month"
								className="bg-transparent focus:outline-none px-5 py-4 sm:px-6 sm:py-5 w-full text-xs md:text-base text-gray-500"
							>
								<option value="0">Select Professional Status *</option>
								<option value="Developer">Developer</option>
								<option value="Junior Developer">Junior Developer</option>
								<option value="Senior Developer">Senior Developer</option>
								<option value="Manager">Manager</option>
								<option value="Student or Learning">Student or Learning</option>
								<option value="Instructor or Teacher">
									Instructor or Teacher
								</option>
								<option value="Inter">Intern</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<span className="text-xs md:text-sm font-light text-gray-400">
							Give us an idea of where you are at in your career.
						</span>
					</div>

					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Email *" className="dc-input" />
						<span className="text-xs md:text-sm font-light text-gray-400">
							Could be your own company or one you work for.
						</span>
					</div>

					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Website" className="dc-input" />
						<span className="text-xs md:text-sm font-light text-gray-400">
							Could be your own or a company website.
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Location" className="dc-input" />
						<span className="text-xs md:text-sm font-light text-gray-400">
							State & Country suggested (eg. Surat, Gujarat)
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<input type="text" placeholder="Skills *" className="dc-input" />
						<span className="text-xs md:text-sm font-light text-gray-400">
							Please use comma seperated values (eg. HTML,CSS,JavaScript)
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<input
							type="text"
							placeholder="Github Username"
							className="dc-input"
						/>
						<span className="text-xs md:text-sm font-light text-gray-400">
							If you want your latest repos and a Github link, Include your
							Username.
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<textarea
							placeholder="A short Bio or Introduction of your self."
							rows="4"
							className="dc-input"
						/>
					</div>

					<div className="flex flex-col space-y-4">
						<h1 className="text-dc-blue font-bold text-base md:text-lg lg:text-xl">
							Add Social Network Links (Optional)
						</h1>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={Website}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your Website URL"
								className="dc-input"
							/>
						</div>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={Facebook}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your Facebook URL"
								className="dc-input"
							/>
						</div>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={Instagram}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your Instagram URL"
								className="dc-input"
							/>
						</div>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={Twitter}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your Twitter URL"
								className="dc-input"
							/>
						</div>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={Github}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your Github URL"
								className="dc-input"
							/>
						</div>
						<div className="flex items-center space-x-3">
							<span className="social-link">
								<Image
									src={LinkedIn}
									className="object-cover"
									width={45}
									height={45}
									quality={100}
									objectFit="cover"
								/>
							</span>
							<input
								type="text"
								placeholder="Your LinkedIn URL"
								className="dc-input"
							/>
						</div>
					</div>

					<div className="w-full flex flex-col gap-4 md:flex-row md:justify-end mt-8 md:mt-10">
						<button
							type="submit"
							className="dashboard-btn-blue self-end md:self-start"
						>
							Submit
						</button>
						<span
							className="dashboard-btn-white md:self-start"
							onClick={() => router.push("/dashboard")}
						>
							<BsArrowLeft className="text-lg" />
							<span>Go back to dashboard</span>
						</span>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default CreateProfile;
