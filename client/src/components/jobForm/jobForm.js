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
	const [jobSections, setJobSections] = useState([]);
	const [jobData, setJobData] = useState({
		jobSiteName: "",
		location: "",
		companyName: "",
		directions: "",
		isReady: "",
		createdBy: "",
		siteSection: [
			{
				sectionName: "",
				materials: [],
			},
		],
	});

	const sectionChange = (event) => {
		setJobSections(...jobSections, event.target.value);
		console.log(jobSections);
	};

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log();
		console.log(jobData);
		// dispatch(createJob(jobData));
	};

	const handleClick = (event) => {
		console.log(event.target);
		if (event.target.id === "add") {
			return addSection();
		}
		if (event.target.id === "remove") {
			return removeSection();
		}
	};

	const addSection = () => {
		setJobSections([...jobSections, <Section />]);
	};

	const removeSection = () => {
		let last = jobSections[jobSections.length - 1];

		setJobSections(
			jobSections.filter((section) => {
				return section !== last;
			}),
		);
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
				<Input
					name="createdBy"
					type="text"
					placeholder="Your Name"
					variant="filled"
					onChange={(event) => setJobData({ ...jobData, createdBy: event.target.value })}
				/>
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Location</FormLabel>
				<Input
					name="jobSiteName"
					type="text"
					placeholder="Location Name"
					variant="filled"
					onChange={(event) => setJobData({ ...jobData, jobSiteName: event.target.value })}
				/>
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input
					name="companyName"
					type="text"
					placeholder="Company Name"
					variant="filled"
					onChange={(event) => setJobData({ ...jobData, companyName: event.target.value })}
				/>
			</FormControl>
			<FormControl mb={14}>
				<FormLabel>Date</FormLabel>
				<Input
					type="date"
					variant="filled"
					onChange={(event) => setJobData({ ...jobData, date: event.target.value })}
				/>
			</FormControl>
			<FormControl mb={14}>
				<FormLabel display="flex" justifyContent="space-between">
					Directions<Checkbox>Use Current Location</Checkbox>
				</FormLabel>
				<Input
					type="text"
					variant="filled"
					placeholder="Directions"
					onChange={(event) => setJobData({ ...jobData, directions: event.target.value })}
				/>
			</FormControl>
			<Text fontSize="3xl" fontWeight="bold" textAlign="center">
				Job Section
			</Text>
			<Divider mb={6} />
			{jobSections.map((section) => {
				let index = jobSections.indexOf(section);
				return <Section setJobData={setJobData} jobData={jobData} onChange={sectionChange} key={index} />;
			})}

			<Divider />
			<Box display="flex" justifyContent="space-evenly" mt={10} paddingBottom={10}>
				<Button id="add" background="blue.300" onClick={handleClick}>
					{/* <PlusSquareIcon id="add" h={6} w={6} /> */}
					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
						+
					</Text>
					<Text id="add" ml={2}>
						Add Section
					</Text>
				</Button>
				<Button id="remove" background="red.300" onClick={handleClick}>
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
		</Container>
	);
};

export default JobForm;
