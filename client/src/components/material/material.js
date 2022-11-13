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

const Material = (props) => {
	const materialHandleChange = (event) => {
		props.setData({ ...props.data, material: event.target.value });
	};

	const amountHandleChange = () => {
		const amountInput = document.getElementById("number");
		const newValue = Number(amountInput.value);
		props.setData({ ...props.data, amount: newValue + 1 });
	};

	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10}>
				<FormControl w="45%">
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
					<NumberInput
						id="numberInput"
						defaultValue={0}
						min={0}
						max={10000}
						variant="filled"
						onChange={amountHandleChange}
					>
						<NumberInputField id="number" />
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
