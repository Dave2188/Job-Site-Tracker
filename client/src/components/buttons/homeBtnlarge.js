import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeBtnlarge = () => {
	const navigate = useNavigate();

	return (
		<Button
			width={"full"}
			maxW={"2xl"}
			background={"blue.200"}
			onClick={() => {
				navigate("/");
			}}
			my={"3"}
		>
			Home
		</Button>
	);
};

export default HomeBtnlarge;
