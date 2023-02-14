import React, { useEffect } from "react";
import { Container, Heading, SimpleGrid, Spinner, Divider, Button } from "@chakra-ui/react";
import FileTiles from "./fileTiles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../../actions/jobActions";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	let jobs = useSelector((state) => state.jobs);

	jobs = jobs.filter((job) => {
		return job.jobComplete !== true;
	});

	useEffect(() => {
		dispatch(getJobs());
	}, [dispatch]);

	useEffect(() => {
		jobs.length ? setLoading(false) : setLoading(true);
	}, [jobs.length]);

	return (
		<Container
			maxWidth="full"
			width={"95vw"}
			boxShadow="dark-lg"
			background={"gray.50"}
			rounded="lg"
			height={"fit-content"}
			display={"flex"}
			flexDir={"column"}
			margin={"auto"}
			marginY={"7"}
		>
			<Heading marginBottom={6} marginTop={2} paddingTop={5} textAlign="center">
				Jobs
			</Heading>
			<Divider shadow={"dark-lg"} mb={6} />
			{loading === true ? (
				<Spinner
					thickness="5px"
					speed="0.5s"
					emptyColor="blue.100"
					color="blue.500"
					size="xl"
					alignSelf={"center"}
					mb={6}
				/>
			) : (
				<SimpleGrid minChildWidth="130px" spacing="40px" mb={"2"}>
					{jobs.map((job) => {
						return <FileTiles company={job.companyName} jobSiteName={job.jobSiteName} key={job._id} id={job._id} />;
					})}
				</SimpleGrid>
			)}
			<Button
				background={"blue.300"}
				maxWidth={"24"}
				alignSelf={"center"}
				mt={"20"}
				mb={"6"}
				onClick={() => {
					return navigate("/");
				}}
			>
				Home
			</Button>
		</Container>
	);
};

export default Jobs;
