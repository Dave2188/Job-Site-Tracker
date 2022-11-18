import React, { useState } from "react";
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
	const [material, setMaterial] = useState({ material: "", amount: 0 });

	const materialHandleChange = (event) => {
		setMaterial({ ...material, material: event.target.value });
	};

	const amountHandleChange = () => {
		setMaterial({ ...material, amount: 0 });
	};

	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10} onSubmit={props.handleData(material)}>
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
					<NumberInput id="numberInput" defaultValue={0} min={0} max={10000} variant="filled">
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper
								onClick={() => {
									let value = material.amount;
									setMaterial({ ...material, amount: value + 1 });
								}}
							/>
							<NumberDecrementStepper
								onClick={() => {
									let value = material.amount;
									if (value <= 0) return;
									setMaterial({ ...material, amount: value - 1 });
								}}
							/>
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
			</Box>
		</>
	);
};

export default Material;
