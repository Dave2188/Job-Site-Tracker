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
	Input,
} from "@chakra-ui/react";

const Material = ({ jobData, setJobData }) => {
	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10}>
				<FormControl w="45%">
					<FormLabel>Material</FormLabel>
					<Select
						name="material"
						placeholder="Select option"
						variant="filled"
						onSelect={(event) => setJobData({ ...jobData, section: { materials: [{ material: event.target.value }] } })}
					>
						<option>1.25x1.5</option>
						<option>2x1.5</option>
						<option>3.1.5</option>
						<option>4x1.5</option>
					</Select>
				</FormControl>
				<FormControl w="30%">
					<FormLabel>Amount</FormLabel>
					<NumberInput id="numberInput" name="Amount" defaultValue={0} min={0} max={10000} variant="filled">
						<NumberInputField
							onChange={(event) => {
								setJobData({ ...jobData, section: { materials: [{ amount: event.target.value }] } });
							}}
						/>
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
