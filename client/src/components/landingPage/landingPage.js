import React, { useState, useEffect } from "react";
import { Container, Heading, Center, Divider, Button, Text, Box, background } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useSelector } from "react-redux";

const LandingPage = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user === null) {
			navigate("/SignUp");
		}
	}, []);

	console.log(user);
	const { logoutUser } = useLogout();

	const handleSignOut = () => {
		logoutUser();
		navigate("/SignUp");
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

				<Box
					bg="blue.300"
					w="100%"
					margin={6}
					borderRadius={10}
					cursor={"pointer"}
					shadow={"xl"}
					maxWidth="3xl"
					transition={".25s"}
					_hover={{ background: "#e2e8f0" }}
				>
					<NavLink to="Jobs">
						<Text textAlign="center" padding={5}>
							JOBS
						</Text>
					</NavLink>
				</Box>

				<Box
					bg="blue.300"
					w="100%"
					margin={6}
					cursor={"pointer"}
					shadow={"xl"}
					borderRadius={10}
					maxWidth="3xl"
					transition={".25s"}
					_hover={{ background: "#e2e8f0" }}
				>
					<NavLink to="JobForm">
						<Text p={5} textAlign="center">
							ADD NEW JOB
						</Text>
					</NavLink>
				</Box>

				<Box
					bg="blue.300"
					w="100%"
					margin={6}
					cursor={"pointer"}
					shadow={"xl"}
					borderRadius={10}
					maxWidth="3xl"
					transition={".25s"}
					_hover={{ background: "#e2e8f0" }}
				>
					<NavLink to="JobsComplete">
						<Text p={5} textAlign="center">
							COMPLETED JOBS
						</Text>
					</NavLink>
				</Box>

				<Box
					bg="blue.300"
					w="100%"
					margin={6}
					cursor={"pointer"}
					shadow={"xl"}
					borderRadius={10}
					maxWidth="3xl"
					transition={".25s"}
					_hover={{ background: "#e2e8f0" }}
				>
					<Text p={5} textAlign="center">
						BRANCH
					</Text>
				</Box>

				<Button
					onClick={handleSignOut}
					bg="red.400"
					w="100%"
					height={16}
					margin={6}
					shadow={"xl"}
					mb={14}
					borderRadius={10}
					maxWidth="3xl"
					fontWeight={"normal"}
				>
					SIGN OUT
				</Button>
			</Center>
		</Container>
	);
};

export default LandingPage;
