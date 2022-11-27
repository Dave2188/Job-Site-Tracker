import React from "react";
import { Container, Heading, Grid, GridItem, SimpleGrid, Box } from "@chakra-ui/react";

const Jobs = () => {
	return (
		<Container maxWidth="container.xl" boxShadow="dark-lg" rounded="lg" height="98vh">
			<Heading marginBottom={8} marginTop={2} paddingTop={5} textAlign="center">
				Jobs
			</Heading>

			<SimpleGrid minChildWidth="120px" spacing="40px">
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
				<Box boxShadow="dark-lg" rounded="lg" bg="tomato" height="80px"></Box>
			</SimpleGrid>
		</Container>
	);
};

export default Jobs;
