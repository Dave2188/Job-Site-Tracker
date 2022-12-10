import React, { useEffect, useMemo } from "react";
import { Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import FileTiles from "../jobs/fileTiles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobs } from "../../actions/jobActions";

const JobsComplete = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	let jobs = useSelector((state) => state.jobs);
	jobs = jobs.filter((job) => {
		return job.jobComplete === true;
	});

	useEffect(() => {
		dispatch(getJobs());
		if (jobs.length) setLoading(false);
	}, [jobs.length]);

	return (
		<Container
			maxWidth="container.xl"
			boxShadow="dark-lg"
			rounded="lg"
			height="98vh"
			display={"flex"}
			flexDir={"column"}
		>
			<Heading marginBottom={8} marginTop={2} paddingTop={5} textAlign="center">
				Completed Jobs
			</Heading>
			{loading === true ? (
				<Spinner thickness="5px" speed="0.5s" emptyColor="blue.100" color="blue.500" size="xl" alignSelf={"center"} />
			) : (
				<SimpleGrid minChildWidth="130px" spacing="40px">
					{jobs.map((job) => {
						return <FileTiles company={job.companyName} jobSiteName={job.jobSiteName} key={job._id} id={job._id} />;
					})}
				</SimpleGrid>
			)}
		</Container>
	);
};

export default JobsComplete;
