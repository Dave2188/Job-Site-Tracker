import React from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

const Material = (setJobData, jobData) => {
	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10}>
				<FormControl w="45%">
					<FormLabel>Material</FormLabel>
					<Select
						name="siteSection.materials"
						placeholder="Select option"
						variant="filled"
						onChange={(event) => setJobData({ ...jobData, section: { materials: [{ material: event.target.value }] } })}
					>
						<option></option>
						<option></option>
						<option></option>
						<option></option>
					</Select>
				</FormControl>
				<FormControl w="30%">
					<FormLabel>Amount</FormLabel>
					<NumberInput
						name="siteSection.materialsAmount"
						// defaultValue={0}
						type="number"
						min={0}
						max={10000}
						variant="filled"
						onChange={(event) => setJobData({ ...jobData, section: { materials: [{ amount: event.target.amount }] } })}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
			</Box>
		</>
	);
};

export default Material;
