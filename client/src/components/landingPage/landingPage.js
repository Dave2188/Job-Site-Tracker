import React from "react";
import { Container, Heading, Center, Divider, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const LandingPage = () => {
	const { logoutUser } = useLogout();
	// const [signedIn, setSignedIn] = useState("");
	// const [signUp, setSignUp] = useState("");

	const handleSignOut = () => {
		logoutUser();
	};

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

				<NavLink to="Jobs">
					<Button bg="blue.400" w="container.lg" height={16} margin={6} borderRadius={10} shadow={"xl"} maxWidth="3xl">
						JOBS
					</Button>
				</NavLink>

				<NavLink to="JobForm">
					<Button bg="blue.400" w="container.lg" margin={6} height={16} shadow={"xl"} borderRadius={10} maxWidth="3xl">
						ADD NEW JOB
					</Button>
				</NavLink>

				<NavLink to="JobsComplete">
					<Button
						bg="blue.400"
						w={"container.lg"}
						height={16}
						margin={6}
						shadow={"xl"}
						mb={6}
						borderRadius={10}
						maxWidth="3xl"
					>
						COMPLETED JOBS
					</Button>
				</NavLink>

				<Button bg="blue.400" w="100%" height={16} margin={6} shadow={"xl"} mb={6} borderRadius={10} maxWidth="3xl">
					BRANCH
				</Button>

				<Button
					onClick={handleSignOut}
					bg="blue.400"
					w="100%"
					height={16}
					margin={6}
					shadow={"xl"}
					mb={14}
					borderRadius={10}
					maxWidth="3xl"
				>
					SIGN OUT
				</Button>
			</Center>
		</Container>
	);
};

export default LandingPage;
