import React from "react";
import { Box, Container, Heading, Center, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
	return (
		<Container maxWidth="container.xl" boxShadow="dark-lg" rounded="lg" height="98vh" marginTop={2}>
			<Center flexDirection="column">
				<Heading padding={8}>Job Tracker</Heading>

				<Box bg="blue.400" w="100%" p={5} margin={6} borderRadius={10} maxWidth="3xl">
					<NavLink to="Jobs">
						<Text textAlign="center">JOBS</Text>
					</NavLink>
				</Box>

				<Box bg="blue.400" w="100%" p={5} margin={6} borderRadius={10} maxWidth="3xl">
					<NavLink to="JobForm">
						<Text textAlign="center">ADD NEW JOB</Text>
					</NavLink>
				</Box>

				<Box bg="blue.400" w="100%" p={5} margin={6} borderRadius={10} maxWidth="3xl">
					<Text textAlign="center">COMPLETED JOBS</Text>
				</Box>

				<Box bg="blue.400" w="100%" p={5} margin={6} borderRadius={10} maxWidth="3xl">
					<Text textAlign="center">BRANCH</Text>
				</Box>

				<Box bg="blue.400" w="100%" p={5} margin={6} borderRadius={10} maxWidth="3xl">
					<Text textAlign="center">SIGN OUT</Text>
				</Box>
			</Center>
		</Container>
	);
};

export default LandingPage;
