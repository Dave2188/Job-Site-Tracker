import React, { useState } from "react";
import { Container, Heading, Text, Box, Divider, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import PrintSection from "./printSection";
import { QRCodeSVG } from "qrcode.react";

const PrintJob = () => {
	const { _id } = useParams();
	const jobs = useSelector((state) => state.jobs);
	// eslint-disable-next-line
	const [currentJob, setCurrentJob] = useState(
		jobs.find((job) => {
			return job._id === _id;
		}),
	);

	return (
		<Container id="main" maxWidth={"100vw"} background={"white"}>
			<Container maxWidth={"100vw"} margin={"0"}>
				<Heading textAlign={"center"} as={"h1"} size={"xl"}>
					{currentJob.companyName}
				</Heading>

				<Divider orientation={"horizontal"} />
				<Container
					maxW={"100vw"}
					justifyItems={"center"}
					display={"grid"}
					gridTemplateRows={"repeat(2, 1fr)"}
					gridTemplateColumns={"repeat(2, 1fr)"}
				>
					<Box marginY={6} display={"flex"} flexWrap={"wrap"} alignSelf={"center"}>
						<Text as={"b"} marginEnd={2}>
							Job Site Name:
						</Text>
						<Text>{currentJob.jobSiteName}</Text>
					</Box>
					<Box display={"flex"} flexWrap={"wrap"} alignSelf={"center"}>
						<Text as={"b"} marginEnd={2}>
							Created By:
						</Text>
						<Text>{currentJob.createdBy}</Text>
					</Box>
					<Box mb={6} display={"flex"} flexWrap={"wrap"} alignSelf={"center"}>
						<Text as={"b"} marginEnd={2}>
							Date:
						</Text>
						<Text>{new Date(currentJob.date).toLocaleDateString("en-ca")}</Text>
					</Box>
					<Box mb={6} display={"flex"} alignItems={"center"}>
						<Text as={"b"} marginEnd={2}>
							Directions:
						</Text>
						{_id ? (
							<QRCodeSVG size={"60"} value={currentJob.directions} style={{ marginLeft: ".5rem", marginTop: "0" }} />
						) : (
							<Text>{currentJob.directions}</Text>
						)}
					</Box>
				</Container>
				<Heading as={"h2"} size={"lg"} textAlign={"center"}>
					Sections
				</Heading>
				<Divider orientation={"horizontal"} />
				<Container
					display={"grid"}
					maxW={"100vw"}
					gap={8}
					gridTemplateColumns={"repeat(2,1fr)"}
					gridTemplateRows={"repeat (2,1fr)"}
				>
					{currentJob.siteSections.map((section, i) => {
						return <PrintSection key={i} name={section.sectionName} material={section.materials} />;
					})}
				</Container>

				<Container display={"flex"} justifyContent={"space-evenly"} mt={5} id="buttons">
					<Button
						sx={{
							"@media print": {
								display: "none",
							},
						}}
						mb={5}
						paddingInline={"5"}
						background={"green.400"}
						onClick={() => {
							window.print();
						}}
					>
						Print
					</Button>
					<NavLink to="/">
						<Button
							sx={{
								"@media print": {
									display: "none",
								},
							}}
							background={"blue.400"}
						>
							Home
						</Button>
					</NavLink>
				</Container>
			</Container>
		</Container>
	);
};

export default PrintJob;
