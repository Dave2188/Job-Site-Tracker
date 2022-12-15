import React, { useEffect } from "react";
import { Container, Heading, SimpleGrid, Spinner, Button, Divider } from "@chakra-ui/react";
import FileTiles from "../jobs/fileTiles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../../actions/jobActions";
import { useNavigate } from "react-router-dom";

const JobsComplete = () => {
	const [loading, setLoading] = useState(true);
	const [deleteMode, setDeleteMode] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	let jobs = useSelector((state) => state.jobs);

	jobs = jobs.filter((job) => {
		return job.jobComplete === true;
	});

	useEffect(() => {
		dispatch(getJobs());
		if (jobs) return setLoading(false);
	}, [dispatch, deleteMode]);

	// useEffect(() => {
	// 	if (deleteMode === false) {
	// 		dispatch(getJobs());
	// 	}
	// }, []);

	const handleClick = (Boolean) => {
		setDeleteMode(Boolean);
	};

	return (
		<Container
			maxWidth="full"
			width={"95vw"}
			boxShadow="dark-lg"
			rounded="lg"
			height={"fit-content"}
			display={"flex"}
			flexDir={"column"}
			margin={"auto"}
			mt={"5"}
		>
			<Heading marginBottom={8} marginTop={2} paddingTop={5} textAlign="center">
				Completed Jobs
			</Heading>
			<Divider shadow={"dark-lg"} mb={6} />
			{loading === true ? (
				<Spinner thickness="5px" speed="0.5s" emptyColor="blue.100" color="blue.500" size="xl" alignSelf={"center"} />
			) : (
				<SimpleGrid minChildWidth="130px" spacing="40px">
					{jobs.map((job) => {
						return (
							<FileTiles
								company={job.companyName}
								jobSiteName={job.jobSiteName}
								key={job._id}
								id={job._id}
								deleteMode={deleteMode}
								handleDeleteMode={handleClick}
							/>
						);
					})}
				</SimpleGrid>
			)}
			<Container display={"flex"} flexDir={"row"} mt={"60"} justifyContent={"space-evenly"}>
				<Button
					maxW={"fit-content"}
					background={deleteMode === false ? "red.400" : "green.400"}
					alignSelf={"center"}
					mb={"5"}
					onClick={() => {
						deleteMode === false ? setDeleteMode(true) : setDeleteMode(false);
					}}
				>
					{deleteMode === false ? "Delete Jobs" : "done"}
				</Button>
				<Button
					background={"blue.300"}
					onClick={() => {
						return navigate("/");
					}}
				>
					Home
				</Button>
			</Container>
		</Container>
	);
};

export default JobsComplete;
