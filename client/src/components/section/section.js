import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import MaterialSection from "../materialSection/materialSection";

const Section = () => {
	return (
		<>
			<FormControl mb={6}>
				<FormLabel>Section Name</FormLabel>
				<Input type="sectionName" placeholder="Section Name" variant="filled" />
			</FormControl>
			<MaterialSection />
		</>
	);
};

export default Section;
