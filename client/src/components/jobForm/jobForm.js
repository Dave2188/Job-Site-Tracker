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
	Switch,
} from "@chakra-ui/react";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "./section/section";
import { useDispatch, useSelector } from "react-redux";
import { createJob, getJobs, updateJob } from "../../actions/jobActions";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const JobForm = () => {
	const { _id } = useParams();
	const jobs = useSelector((state) => state.jobs);
	const job = jobs.find((item) => item._id === _id);
	console.log(job);
	const [jobData, setJobData] = useState(_id ? job : { jobComplete: false });
	const [jobSections, setJobSections] = useState(_id ? job.siteSections : [{}]);
	const [isChecked, setIsChecked] = useState(_id ? job.gpsLocation : false);
	const [isSelected, setIsSelected] = useState(_id ? job.jobComplete : false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

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

	useEffect(() => {
		if (jobData.siteSections !== jobSections) {
			setJobData(joinData(jobData, jobSections));
		}
	}, [jobSections]);

	useEffect(() => {
		if (isChecked === true && !_id) {
			document.getElementById("location").value = "Finding your location...";
			navigator.geolocation.getCurrentPosition(success);
		}
	}, [isChecked]);

	const useHandleSubmit = (e) => {
		e.preventDefault();

		if (!jobData.siteSections[0].sectionName) return alert("REQUIRED: Please fill out site section");
		if (!jobData.createdBy) return alert("REQUIRED: Please fill in name");
		if (!jobData.jobSiteName) return alert("REQUIRED: Please fill in Job Site Name");

		if (_id) {
			dispatch(updateJob(_id, jobData));
			dispatch(getJobs());
			if (job.jobComplete === false) return navigate("/jobs");
			if (job.jobComplete === true) return navigate("/JobsComplete");
		}
		dispatch(createJob(jobData));
	};

	const success = (position) => {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;
		document.getElementById("location").value = `${lat}, ${long}`;
		setJobData({ ...jobData, directions: `${lat}, ${long}` });
	};

	const handleSwitch = () => {
		if (isSelected === false) return setIsSelected(true), setJobData({ ...jobData, jobComplete: true });
		if (isSelected === true) return setIsSelected(false), setJobData({ ...jobData, jobComplete: false });
	};

	const handleCheckBox = () => {
		if (isChecked === false) return setIsChecked(true), setJobData({ ...jobData, gpsLocation: true });
		if (isChecked === true) return setIsChecked(false), setJobData({ ...jobData, gpsLocation: false });
	};

	return (
		<Container
			maxW="container.xl"
			h={"fit-content"}
			boxShadow="dark-lg"
			rounded="lg"
			margin={"auto"}
			mb={5}
			background={"whiteAlpha.900"}
		>
			<Container
				mt={5}
				mb={5}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				maxW="container.lg"
				p={4}
			>
				<Button background="blue.300" borderRadius="md" shadow={"dark-lg"}>
					<NavLink to="/">
						<ArrowBackIcon boxSize={6} />
						<Text ml={2} as={"b"}>
							Back
						</Text>
					</NavLink>
				</Button>
				<Heading textAlign="center">Job Site Form</Heading>
				<Button
					background="blue.300"
					borderRadius="md"
					as={Button}
					shadow={"dark-lg"}
					disabled={!_id ? true : false}
					onClick={() => navigate(`/JobForm/${_id}`)}
				>
					<ExternalLinkIcon as="button" boxSize={6} />
					<Text ml={2} as="b" pos="relative" top="2px" id={_id}>
						Export
					</Text>
				</Button>
			</Container>

			<Divider mb={6} />

			<FormControl mb={6} isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					defaultValue={_id ? job.createdBy : null}
					name="createdBy"
					type="text"
					placeholder="Your Name"
					variant="filled"
					onBlur={setData}
				/>
			</FormControl>

			<FormControl mb={6} isRequired>
				<FormLabel>Job Site Name</FormLabel>
				<Input
					defaultValue={_id ? job.jobSiteName : null}
					name="jobSiteName"
					type="text"
					placeholder="Location Name"
					variant="filled"
					onBlur={setData}
				/>
			</FormControl>

			<FormControl mb={6}>
				<FormLabel>Company</FormLabel>
				<Input
					defaultValue={_id ? job.companyName : null}
					name="companyName"
					type="text"
					placeholder="Company Name"
					variant="filled"
					onBlur={setData}
				/>
			</FormControl>

			<FormControl mb={14}>
				<FormLabel>Date</FormLabel>
				<Input
					defaultValue={_id ? new Date(job.date).toLocaleDateString("en-ca") : null}
					type="date"
					name="createdOn"
					variant="filled"
					onBlur={setData}
				/>
			</FormControl>

			<FormControl mb={14}>
				<FormLabel display="flex" justifyContent="space-between">
					Directions
					<Checkbox isChecked={isChecked} onChange={handleCheckBox}>
						Use Current Location
					</Checkbox>
				</FormLabel>
				<Input
					defaultValue={_id ? job.directions : null}
					id="location"
					type="text"
					name="directions"
					variant="filled"
					placeholder="Directions"
					onBlur={setData}
				/>
			</FormControl>
			<FormControl display="flex" alignItems="center" mb={14}>
				<FormLabel mb="0">Job site complete:</FormLabel>
				<Switch id="jobComplete" size={"lg"} onChange={handleSwitch} isChecked={isSelected} />
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
							section={_id ? jobData.siteSections[i] : null}
							key={i}
							index={i}
							name="siteSections"
						/>
					);
				})}
			</Box>

			<Divider />
			<Box display="flex" justifyContent="space-around" mt={10} paddingBottom={10}>
				<Button id="add" background="blue.400" shadow={"dark-lg"} onClick={() => setJobSections([...jobSections, {}])}>
					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
						+
					</Text>
					<Text id="add" ml={2} fontWeight={"medium"}>
						Add Section
					</Text>
				</Button>
				<Button
					id="remove"
					shadow={"dark-lg"}
					background="red.400"
					onClick={() => {
						setJobSections(jobSections.slice(0, jobSections.length - 1));
					}}
				>
					<Box id="remove" fontSize={18} position="relative" bottom="1px" fontWeight="bold">
						x
					</Box>
					<Text id="remove" ml={2} fontWeight={"medium"}>
						Remove
					</Text>
				</Button>
			</Box>
			<Divider />
			<Box display="flex" justifyContent="center" mt={14} padding={8}>
				<Button type="submit" onClick={useHandleSubmit} background="green.400" shadow={"dark-lg"}>
					{_id ? "Update" : "Submit"}
				</Button>
			</Box>
		</Container>
	);
};

export default JobForm;
