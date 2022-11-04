import React, { useState } from "react";
import {
	FormControl,
	FormLabel,
	Input,
	Container,
	Checkbox,
	Divider,
	Heading,
	Box,
	Text,
	Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, ExternalLinkIcon, PlusSquareIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Section from "../section/section";

const JobForm = () => {
	const [sections, setSections] = useState([]);

	const handleClick = () => {
		return addSection();
	};

	const addSection = () => {
		setSections([...sections, <Section />]);
	};
	return (
		<Container maxW="container.xl" maxHeight="-moz-fit-content" boxShadow="dark-lg" rounded="lg">
			<Container display="flex" justifyContent="space-between" alignItems="center" maxW="container.lg" p={4}>
				<Box background="blue.300" borderRadius="md" px={4} py={2} as={Button}>
					<ArrowBackIcon boxSize={6} />
					<Text ml={2} as="b">
						Back
					</Text>
				</Box>
				<Heading>Job Site Form</Heading>
				<Box background="blue.300" borderRadius="md" px={4} py={2} as={Button}>
					<ExternalLinkIcon as="button" boxSize={6} />
					<Text ml={2} as="b" pos="relative" top="2px">
						Print
					</Text>
				</Box>
			</Container>
			<Divider mb={6} />
			<FormControl mb={6}>
				<FormLabel>Name</FormLabel>
				<Input type="name" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel display="flex" justifyContent="space-between">
					Location<Checkbox>Use Current Location</Checkbox>
				</FormLabel>
				<Input type="location" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input type="company" placeholder="Location Name" variant="filled" />
			</FormControl>
			<FormControl mb={14}>
				<FormLabel>Date</FormLabel>
				<Input type="date" placeholder="Location Name" variant="filled" />
			</FormControl>
			<Text fontSize="3xl" fontWeight="bold" textAlign="center">
				Job Section
			</Text>
			<Divider mb={6} />
			{sections.map((section) => {
				let index = sections.indexOf(section);
				return <Section key={index} />;
			})}

			<Divider />
			<Box display="flex" justifyContent="space-evenly" mt={10} paddingBottom={10}>
				<Button id="add" background="blue.300" onClick={handleClick}>
					<PlusSquareIcon h={6} w={6} />
					<Text ml={3}>Add Section</Text>
				</Button>
				<Button id="remove" background="red.300" onClick={handleClick}>
					<SmallCloseIcon h={6} w={6} />
					<Text ml={3}>Remove</Text>
				</Button>
			</Box>
			<Divider />
			<Box display="flex" justifyContent="center" mt={14}>
				<Button background="green.400">Submit</Button>
			</Box>
		</Container>
	);
};

export default JobForm;
