import React, { useState } from "react";
import { Container, Heading, Text, Box, Divider, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import PrintSection from "./printSection";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";

const PrintJob = () => {
	const navigate = useNavigate();
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
				<Container display={"flex"} justifyContent={"space-between"}>
					<Button
						mb={5}
						paddingInline={"5"}
						border={"1px"}
						background={"white"}
						onClick={() => {
							window.print();
						}}
					>
						Print
					</Button>
					<Heading textAlign={"center"} as={"h1"} size={"xl"}>
						{currentJob.companyName}
					</Heading>
					<NavLink to="/">
						<Button border={"1px"} background={"white"}>
							Home
						</Button>
					</NavLink>
				</Container>
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
			</Container>
		</Container>
	);
};

export default PrintJob;
