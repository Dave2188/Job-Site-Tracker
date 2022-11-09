import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import MaterialSection from "../materialSection/materialSection";

const Section = ({ setJobData, jobData }) => {
	return (
		<>
			<FormControl mb={6}>
				<FormLabel>Section Name</FormLabel>
				<Input
					name="sectionName"
					type="text"
					placeholder="Section Name"
					variant="filled"
					onChange={(event) => setJobData({ ...jobData, siteSection: { sectionName: event.target.value } })}
				/>
			</FormControl>
			<MaterialSection setJobData={setJobData} jobData={jobData} />
		</>
	);
};

export default Section;
