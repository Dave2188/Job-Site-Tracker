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
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../section/section";
import { useDispatch } from "react-redux";
import { createJob } from "../../actions/jobactions";

const JobForm = () => {
	const [jobData, setJobData] = useState({});

	const tempJobData = {
		jobSiteName: "",
		location: "",
		companyName: "",
		directions: "",
		isReady: "",
		createdBy: "",
		siteSections: [],
	};

	const [jobSections, setJobSections] = useState([{}]);

	const setTempJobData = (e) => {
		tempJobData[e.target.name] = e.target.value;
	};

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		setJobData(tempJobData);
		console.log(jobData);
		return dispatch(createJob(jobData));
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
				<Input name="createdBy" type="text" placeholder="Your Name" variant="filled" onChange={setTempJobData} />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Job Site Name</FormLabel>
				<Input name="jobSiteName" type="text" placeholder="Location Name" variant="filled" onChange={setTempJobData} />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input name="companyName" type="text" placeholder="Company Name" variant="filled" onChange={setTempJobData} />
			</FormControl>
			<FormControl mb={14}>
				<FormLabel>Date</FormLabel>
				<Input type="date" variant="filled" onChange={setTempJobData} />
			</FormControl>
			<FormControl mb={14}>
				<FormLabel display="flex" justifyContent="space-between">
					Directions<Checkbox>Use Current Location</Checkbox>
				</FormLabel>
				<Input type="text" name="directions" variant="filled" placeholder="Directions" onChange={setTempJobData} />
			</FormControl>
			<Text fontSize="3xl" fontWeight="bold" textAlign="center">
				Job Section
			</Text>
			<Divider mb={6} />

			{jobSections.map((section, i) => {
				return (
					<Section
						setTempSectionData={(obj) => {
							tempJobData.siteSections[i] = obj;
						}}
						key={i}
						name="siteSections"
					/>
				);
			})}

			<Divider />
			<Box display="flex" justifyContent="space-evenly" mt={10} paddingBottom={10}>
				<Button id="add" background="blue.300" onClick={() => setJobSections([...jobSections, 0])}>
					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
						+
					</Text>
					<Text id="add" ml={2}>
						Add Section
					</Text>
				</Button>
				<Button
					id="remove"
					background="red.300"
					onClick={() => {
						setJobData([...jobSections, jobSections.pop()]);
					}}
				>
					{/* <SmallCloseIcon id="remove" h={6} w={6} /> */}
					<Box id="remove" fontSize={18} position="relative" bottom="1px" fontWeight="bold">
						x
					</Box>
					<Text id="remove" ml={2}>
						Remove
					</Text>
				</Button>
			</Box>
			<Divider />
			<Box display="flex" justifyContent="center" mt={14}>
				<Button onClick={handleSubmit} background="green.400">
					Submit
				</Button>
			</Box>
			{console.log(jobData)}
		</Container>
	);
};

export default JobForm;
