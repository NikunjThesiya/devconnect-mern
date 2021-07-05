import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
	hidden: {
		display: "-webkit-box",
		WebkitLineClamp: 3,
		overflow: "hidden",
		WebkitBoxOrient: "vertical",
	},
}));
function ReadMore({ children }) {
	const classes = useStyles();
	const [isHidden, setIsHidden] = useState(true);
	return (
		<p>
			<p className={isHidden ? classes.hidden : null}>{children}</p>
			<p
				className="text-dc-blue underline cursor-pointer"
				onClick={() => setIsHidden(!isHidden)}
			>
				{isHidden ? "Read More" : "Read Less"}
			</p>
		</p>
	);
}

export default ReadMore;
