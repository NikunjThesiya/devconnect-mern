import Head from "next/head";
import ProfileBio from "../components/ProfileBio";

function User() {
	return (
		<div className="w-full flex flex-col items-center">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="DevConnect is a social network for Programmers or Developers. You can build your profile or portfolio. You can upload post and connect with other Programmers."
				/>
				<title>Nikunj Thesiya</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
			<ProfileBio />
		</div>
	);
}

export default User;
