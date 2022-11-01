import React from "react";
import { FormControl, FormLabel, Input, Container, Checkbox, Divider, Heading, Box, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const NavBar = () => {
	return (
		<Container maxW="container.xl" boxShadow="dark-lg" rounded="lg">
			<Container display="flex" justifyContent="space-between" alignItems="center" maxW="container.lg" p={4}>
				<Box background="blue.300" borderRadius="md" px={4} py={2}>
					<ArrowBackIcon as="button" boxSize={6} />
					<Text ml={2} as="b">
						Back
					</Text>
				</Box>
				<Heading>Job Site Form</Heading>
				<Box background="blue.300" borderRadius="md" px={4} py={2}>
					<ExternalLinkIcon as="button" boxSize={6} />
					<Text ml={2} as="b" pos="relative" top="2px">
						Print
					</Text>
				</Box>
			</Container>
			<Divider />
			<FormControl mb={6}>
				<FormLabel>Name</FormLabel>
				<Input type="name" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel display="flex" justifyContent="space-between">
					Location<Checkbox>Use current Location</Checkbox>
				</FormLabel>
				<Input type="location" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input type="company" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Date</FormLabel>
				<Input type="date" placeholder="Location Name" variant="filled" />
			</FormControl>
			<Divider />
		</Container>
	);
};

export default NavBar;
