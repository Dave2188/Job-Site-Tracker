import React from "react";
import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BrowserError = () => {
	return (
		<Container marginTop={20} display="flex" flexDir={"column"} alignItems={"center"}>
			<Heading mb={5} textAlign="center">
				Houston we have a problem!
			</Heading>
			<Text textAlign="center" marginBottom={5}>
				Sorry for the inconvenience please try again.
			</Text>
			<NavLink to="/">
				<Button bg={"blue.300"}>Home</Button>
			</NavLink>
		</Container>
	);
};

export default BrowserError;
