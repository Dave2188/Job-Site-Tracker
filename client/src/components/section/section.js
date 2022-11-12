import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Input, useEditable } from "@chakra-ui/react";
import MaterialSection from "../materialSection/materialSection";

const Section = ({ setJobData, jobData }) => {
	const [materialss, setMaterialss] = useState({});
	const [siteSections, setSiteSections] = useState({
		sectionName: "",
		materials: [],
		equipment: "",
		comments: "",
	});

	const sectionChange = (event) => {
		setSiteSections({ ...siteSections, sectionName: event.target.value });
		console.log(siteSections);
		setJobData({ ...jobData, siteSection: siteSections });
		console.log(jobData);
	};

	return (
		<>
			<FormControl mb={6}>
				<FormLabel>Section Name</FormLabel>
				<Input name="sectionName" type="text" placeholder="Section Name" variant="filled" onChange={sectionChange} />
			</FormControl>
			<MaterialSection setSiteSections={setSiteSections} siteSections={siteSections} setMaterialss />
		</>
	);
};

export default Section;
