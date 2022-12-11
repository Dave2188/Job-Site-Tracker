import React, { useState } from "react";
import { Container, Heading, Text, Box, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrintSection from "./printSection";
import { QRCodeSVG } from "qrcode.react";

const PrintJob = () => {
	const { _id } = useParams();
	const jobs = useSelector((state) => state.jobs);

	const [currentJob, setCurrentJob] = useState(
		jobs.find((job) => {
			return job._id === _id;
		}),
	);

	console.log(currentJob);

	return (
		<Container maxWidth={"100vw"} margin={"0"}>
			<Heading textAlign={"center"} as={"h1"} size={"xl"}>
				{currentJob.companyName}
			</Heading>
			<Divider orientation={"horizontal"} />
			<Box marginY={6} display={"flex"}>
				<Text as={"b"} marginEnd={3}>
					Job Site Name:
				</Text>
				<Text>{currentJob.jobSiteName}</Text>
			</Box>
			<Box mb={6} display={"flex"}>
				<Text as={"b"} marginEnd={3}>
					Created By:
				</Text>
				<Text>{currentJob.createdBy}</Text>
			</Box>
			<Box mb={6} display={"flex"}>
				<Text as={"b"} marginEnd={3}>
					Date:
				</Text>
				<Text>{new Date(currentJob.date).toLocaleDateString("en-ca")}</Text>
			</Box>
			<Box mb={6} display={"flex"} alignItems={"center"}>
				<Text as={"b"} marginEnd={3}>
					Directions:
				</Text>
				{_id ? <QRCodeSVG value={currentJob.directions} /> : <Text>{currentJob.directions}</Text>}
				{/* <Text>{currentJob.directions}</Text> */}
			</Box>
			<Heading as={"h2"} size={"lg"} textAlign={"center"}>
				Sections
			</Heading>
			<Divider orientation={"horizontal"} />
			{currentJob.siteSections.map((section, i) => {
				return <PrintSection key={i} name={section.sectionName} material={section.materials} />;
			})}
		</Container>
	);
};

export default PrintJob;
