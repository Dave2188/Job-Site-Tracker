import React from "react";
import { Box, Container, Heading, Center, Text, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
	// const [signedIn, setSignedIn] = useState("");
	// const [signUp, setSignUp] = useState("");

	return (
		<Container
			maxWidth="full"
			width={"95vw"}
			boxShadow="dark-lg"
			rounded="lg"
			height={"fit-content"}
			display={"flex"}
			flexDir={"column"}
			margin={"auto"}
			mt={"5"}
			background={"whiteAlpha.900"}
		>
			<Center flexDirection="column" m={4}>
				<Heading padding={8}>Job Tracker</Heading>

				<Divider shadow={"dark-lg"} />

				<Box bg="blue.400" w="100%" margin={6} borderRadius={10} cursor={"pointer"} shadow={"xl"} maxWidth="3xl">
					<NavLink to="Jobs">
						<Text textAlign="center" padding={5}>
							JOBS
						</Text>
					</NavLink>
				</Box>

				<Box bg="blue.400" w="100%" margin={6} cursor={"pointer"} shadow={"xl"} borderRadius={10} maxWidth="3xl">
					<NavLink to="JobForm">
						<Text p={5} textAlign="center">
							ADD NEW JOB
						</Text>
					</NavLink>
				</Box>

				<Box bg="blue.400" w="100%" margin={6} cursor={"pointer"} shadow={"xl"} borderRadius={10} maxWidth="3xl">
					<NavLink to="JobsComplete">
						<Text p={5} textAlign="center">
							COMPLETED JOBS
						</Text>
					</NavLink>
				</Box>

				<Box bg="blue.400" w="100%" margin={6} cursor={"pointer"} shadow={"xl"} borderRadius={10} maxWidth="3xl">
					<Text p={5} textAlign="center">
						BRANCH
					</Text>
				</Box>

				<Box
					bg="blue.400"
					w="100%"
					margin={6}
					cursor={"pointer"}
					shadow={"xl"}
					mb={14}
					borderRadius={10}
					maxWidth="3xl"
				>
					<Text p={5} textAlign="center">
						SIGN OUT
					</Text>
				</Box>
			</Center>
		</Container>
	);
};

export default LandingPage;
