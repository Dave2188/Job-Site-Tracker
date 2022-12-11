import React, { useEffect, useMemo } from "react";
import { Container, Heading, SimpleGrid, Spinner, Divider } from "@chakra-ui/react";
import FileTiles from "./fileTiles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../../actions/jobActions";

const Jobs = () => {
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();
	let jobs = useSelector((state) => state.jobs);
	jobs = jobs.filter((job) => {
		return job.jobComplete !== true;
	});

	useEffect(() => {
		dispatch(getJobs());
		if (jobs.length) setLoading(false);
	}, [jobs.length]);

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
			<Heading marginBottom={6} marginTop={2} paddingTop={5} textAlign="center">
				Jobs
			</Heading>
			<Divider shadow={"dark-lg"} mb={6} />
			{loading === true ? (
				<Spinner thickness="5px" speed="0.5s" emptyColor="blue.100" color="blue.500" size="xl" alignSelf={"center"} />
			) : (
				<SimpleGrid minChildWidth="130px" spacing="40px" mb={"5"}>
					{jobs.map((job) => {
						return <FileTiles company={job.companyName} jobSiteName={job.jobSiteName} key={job._id} id={job._id} />;
					})}
				</SimpleGrid>
			)}
		</Container>
	);
};

export default Jobs;
