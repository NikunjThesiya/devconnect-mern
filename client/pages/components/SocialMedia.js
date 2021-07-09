import ProfileImg from "../../images/profile.jpg";
import Github from "../../images/github.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";
import Website from "../../images/website.svg";
import Image from "next/image";

function SocialMedia() {
	return (
		<div className="grid grid-cols-3 gap-4 items-center md:flex md:space-x-4 mt-5">
			<span className="social-link">
				<Image
					src={Website}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
			<span className="social-link">
				<Image
					src={Facebook}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
			<span className="social-link">
				<Image
					src={Instagram}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
			<span className="social-link">
				<Image
					src={Twitter}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
			<span className="social-link">
				<Image
					src={Github}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
			<span className="social-link">
				<Image
					src={LinkedIn}
					className="object-cover"
					width={30}
					height={30}
					quality={100}
					objectFit="cover"
				/>
			</span>
		</div>
	);
}

export default SocialMedia;
