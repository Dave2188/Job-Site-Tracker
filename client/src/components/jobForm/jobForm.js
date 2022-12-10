import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { createJob, updateJob } from "../../actions/jobActions";
import { Navigate, NavLink, useParams, useNavigate } from "react-router-dom";

const JobForm = () => {
	const { _id } = useParams();
	const jobs = useSelector((state) => state.jobs);
	const job = jobs.find((item) => item._id === _id);
	const navigate = useNavigate();

	const [jobData, setJobData] = useState(_id ? job : {});
	const [jobSections, setJobSections] = useState(_id ? job.siteSections : [{}]);
	const [isChecked, setIsChecked] = useState(_id ? job.gpsLocation : false);
	const [isSelected, setIsSelected] = useState(_id ? job.jobComplete : false);

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

	useMemo(() => {
		setJobData({ ...jobData, jobComplete: isSelected });
	}, [isSelected]);

	const dispatch = useDispatch();
	const useHandleSubmit = (e) => {
		e.preventDefault();
		if (_id) {
			dispatch(updateJob(_id, jobData));
			return navigate("/");
		}

		dispatch(createJob(jobData));

		return navigate("/");
	};

	const success = (position) => {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;
		document.getElementById("location").value = `${lat}, ${long}`;
		setJobData({ ...jobData, directions: `${lat}, ${long}`, gpsLocation: isChecked });
	};

	const handleSwitch = () => {
		if (isSelected === false) {
			setIsSelected(true);
		} else {
			setIsSelected(false);
		}
	};

	return (
		<Container maxW="container.xl" maxHeight="max-content" boxShadow="dark-lg" rounded="lg" margin={"auto"}>
			<Container display="flex" justifyContent="space-between" alignItems="center" maxW="container.lg" p={4}>
				<Box background="blue.300" borderRadius="md" px={4} py={2} as={Button}>
					<NavLink to="/">
						<ArrowBackIcon boxSize={6} />
						<Text ml={2} as="b">
							Back
						</Text>
					</NavLink>
				</Box>
				<Heading textAlign="center">Job Site Form</Heading>
				<Box background="blue.300" borderRadius="md" px={4} py={2} as={Button}>
					<ExternalLinkIcon as="button" boxSize={6} />
					<Text ml={2} as="b" pos="relative" top="2px" id={_id} onClick={() => navigate(`/JobForm/${_id}`)}>
						Print
					</Text>
				</Box>
			</Container>

			<Divider mb={6} />

			<FormControl mb={6}>
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

			<FormControl mb={6}>
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
					<Checkbox
						isChecked={isChecked}
						onChange={() => {
							isChecked === false ? setIsChecked(true) : setIsChecked(false);
						}}
					>
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
			<FormControl display="flex" alignItems="center">
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
							section={_id ? job.siteSections[i] : null}
							key={i}
							index={i}
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
					{_id ? "Update" : "Submit"}
				</Button>
			</Box>

			{console.log(jobData)}
			{console.log(isSelected)}
		</Container>
	);
};

export default JobForm;
