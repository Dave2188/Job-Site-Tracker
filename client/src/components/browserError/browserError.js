import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const BrowserError = () => {
	return (
		<Container marginTop={20}>
			<Heading mb={5} textAlign="center">
				Houston we have a problem!
			</Heading>
			<Text textAlign="center">Sorry for the inconvenience please try again.</Text>
		</Container>
	);
};

export default BrowserError;
