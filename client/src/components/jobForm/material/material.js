import React, { useState } from "react";
import { Box, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

const Material = (props) => {
	const [material, setMaterial] = useState({ material: "", amount: 0 });

	const materialHandleChange = (event) => {
		if (event.target.id === "material") {
			return setMaterial({ ...material, material: event.target.value });
		}
		return setMaterial({ ...material, amount: event.target.value });
	};

	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10} onChange={props.handleData(material)}>
				<FormControl w="60%">
					<FormLabel>Material</FormLabel>
					<Select id="material" placeholder="Select option" variant="filled" onChange={materialHandleChange}>
						<option>1.25x1.5</option>
						<option>2x1.5</option>
						<option>3.1.5</option>
						<option>4x1.5</option>
					</Select>
				</FormControl>
				<FormControl w="30%">
					<FormLabel>Amount</FormLabel>
					<Input type="number" id="amount" variant="filled" placeholder="0" onChange={materialHandleChange} />
				</FormControl>
			</Box>
		</>
	);
};

export default Material;
