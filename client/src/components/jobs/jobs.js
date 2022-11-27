import React from "react";
import { Container, Heading, Grid, GridItem, SimpleGrid, Box } from "@chakra-ui/react";

const Jobs = () => {
	return (
		<Container bg="gray.300" paddingTop={5} height="100vh" maxWidth="container.xl">
			<Heading marginBottom={8} textAlign="center">
				Jobs
			</Heading>

			<SimpleGrid minChildWidth="120px" spacing="40px">
				<Box bg="tomato" height="80px"></Box>
				<Box bg="tomato" height="80px"></Box>
				<Box bg="tomato" height="80px"></Box>
				<Box bg="tomato" height="80px"></Box>
				<Box bg="tomato" height="80px"></Box>
				<Box bg="tomato" height="80px"></Box>
			</SimpleGrid>
		</Container>
	);
};

export default Jobs;
