import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { PlusSquareIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const NavBar = () => {
	return (
		<Container
			maxW="container.xl"
			boxShadow="dark-lg"
			rounded="lg"
			display="flex"
			justifyContent="space-between"
			bg="black"
		>
			<Box p={8} color="white">
				JOB TRACKER
			</Box>

			<Box display="flex">
				<Box color="white" cursor="pointer" as="button" mr={10}>
					<PlusSquareIcon boxSize={7} />
				</Box>
				<Box color="white" as="button">
					<ExternalLinkIcon boxSize={7} cursor="pointer" m={4} />
				</Box>
			</Box>
		</Container>
	);
};

export default NavBar;
