import React, { useState } from "react";
import { Container, Spinner } from "@chakra-ui/react";
import HomeBtnlarge from "../buttons/homeBtnlarge";

const RoadConditions = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Container
			maxWidth="full"
			width={"95vw"}
			boxShadow="dark-lg"
			background={"gray.50"}
			rounded="lg"
			height={"95vh"}
			display={"flex"}
			flexDir={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			overflow={"hidden"}
			// margin={"auto"}
			my={"5"}
		>
			{isLoading && (
				<Container display={"flex"} justifyContent={"center"}>
					<Spinner
						size={"xl"}
						alignSelf={"center"}
						thickness="5px"
						speed="0.5s"
						emptyColor="blue.100"
						color="blue.500"
						margin={"5"}
					/>
				</Container>
			)}
			<iframe
				src="https://travel.dot.nd.gov/?expand=weather&layers=closed-blocked,event-orange,incident-red,informational-grey,radar,roads,travelalerts,warning-blue,warning-yellow"
				title="ndroads iframe"
				width="110%"
				height="100%"
				onLoad={() => setIsLoading(false)}
			></iframe>
			<HomeBtnlarge />
		</Container>
	);
};

export default RoadConditions;
