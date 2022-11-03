import React from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Select,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInputStepper,
	NumberInput,
	NumberInputField,
	Button,
	Text,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

const handleClick = () => {
	return <MaterialSection />;
};

const MaterialSection = () => {
	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10}>
				<FormControl w="45%">
					<FormLabel>Material</FormLabel>
					<Select placeholder="Select option" variant="filled">
						<option></option>
						<option></option>
						<option></option>
						<option></option>
					</Select>
				</FormControl>
				<FormControl w="30%">
					<FormLabel>Amount</FormLabel>
					<NumberInput defaultValue={0} min={0} max={10000} variant="filled">
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
			</Box>
			<Box maxW="container.xl" display="flex" justifyContent="center" mb={10}>
				<Button background="blue.300" onClick={handleClick}>
					<PlusSquareIcon h={6} w={6} />
					<Text ml={3}>Add Material</Text>
				</Button>
			</Box>
		</>
	);
};

export default MaterialSection;
