import Github from "../../images/github.svg";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import Image from "next/image";

function GithubRepo() {
	return (
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
	);
}

export default GithubRepo;
