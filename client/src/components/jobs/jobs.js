import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import FileTiles from "./fileTiles";
import { useSelector } from "react-redux";

const Jobs = () => {
	const jobs = useSelector((state) => state.jobs);

	return (
		<Container maxWidth="container.xl" boxShadow="dark-lg" rounded="lg" height="98vh">
			<Heading marginBottom={8} marginTop={2} paddingTop={5} textAlign="center">
				Jobs
			</Heading>

			<SimpleGrid minChildWidth="130px" spacing="40px">
				{jobs.map((job, i) => {
					return <FileTiles company={job.companyName} jobSiteName={job.jobSiteName} key={i} />;
				})}
			</SimpleGrid>
		</Container>
	);
};

export default Jobs;
