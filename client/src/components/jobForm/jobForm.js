import React, { useEffect, useState } from "react";
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
import Section from "./section/section";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../actions/jobActions";
import { NavLink, useParams } from "react-router-dom";

const JobForm = () => {
	const [jobData, setJobData] = useState({ siteSections: [] });
	const [jobSections, setJobSections] = useState([{}]);
	const { _id } = useParams();
	const jobs = useSelector((state) => state.jobs);

	const joinData = (prevData, dataAdd) => {
		const newObj = { ...jobData };
		newObj.siteSections = jobSections;
		return newObj;
	};
	const tempJobData = (index, obj) => {
		const newArr = [...jobSections];
		newArr[index] = obj;
		return newArr;
	};

	const setData = (e) => {
		setJobData({ ...jobData, [e.target.name]: e.target.value });
	};

	// useEffect(() => {
	// 	if (_id) {
	// 		const job = jobs.find((item) => item._id === _id);

	// 		setJobData(jobData, job);
	// 		console.log(jobs);
	// 		console.log(_id);
	// 		console.log(job);
	// 		console.log(jobData);
	// 	}
	// }, [jobData]);

	useEffect(() => {
		if (jobData.siteSections !== jobSections) {
			setJobData(joinData(jobData, jobSections));
		}
	}, [jobSections]);

	const dispatch = useDispatch();
	const useHandleSubmit = (e) => {
		e.preventDefault();

		dispatch(createJob(jobData));
	};

	return (
		<Container maxW="container.xl" maxHeight="-moz-fit-content" boxShadow="dark-lg" rounded="lg" marginTop={2}>
			<Container display="flex" justifyContent="space-between" alignItems="center" maxW="container.lg" p={4}>
				<Box background="blue.300" borderRadius="md" px={4} py={2} as={Button}>
					<NavLink to="/">
						<ArrowBackIcon boxSize={6} />
						<Text ml={2} as="b">
							Back
						</Text>
					</NavLink>
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
					onBlur={setData}
					value={jobData.createdBy}
				/>
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Job Site Name</FormLabel>
				<Input name="jobSiteName" type="text" placeholder="Location Name" variant="filled" onBlur={setData} />
			</FormControl>
			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input name="companyName" type="text" placeholder="Company Name" variant="filled" onBlur={setData} />
			</FormControl>
			<FormControl mb={14}>
				<FormLabel>Date</FormLabel>
				<Input type="date" name="createdOn" variant="filled" onBlur={setData} />
			</FormControl>
			<FormControl mb={14}>
				<FormLabel display="flex" justifyContent="space-between">
					Directions<Checkbox>Use Current Location</Checkbox>
				</FormLabel>
				<Input type="text" name="directions" variant="filled" placeholder="Directions" onBlur={setData} />
			</FormControl>
			<Text fontSize="3xl" fontWeight="bold" textAlign="center">
				Job Section
			</Text>
			<Divider mb={6} />

			<Box>
				{jobSections.map((section, i) => {
					return (
						<Section
							setTempSectionData={(obj) => {
								setJobSections(tempJobData(i, obj));
							}}
							key={i}
							name="siteSections"
						/>
					);
				})}
			</Box>

			<Divider />
			<Box display="flex" justifyContent="space-evenly" mt={10} paddingBottom={10}>
				<Button id="add" background="blue.300" onClick={() => setJobSections([...jobSections, {}])}>
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
						setJobSections(jobSections.slice(0, jobSections.length - 1));
					}}
				>
					<Box id="remove" fontSize={18} position="relative" bottom="1px" fontWeight="bold">
						x
					</Box>
					<Text id="remove" ml={2}>
						Remove
					</Text>
				</Button>
			</Box>
			<Divider />
			<Box display="flex" justifyContent="center" mt={14} padding={8}>
				<Button onClick={useHandleSubmit} background="green.400">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default JobForm;
