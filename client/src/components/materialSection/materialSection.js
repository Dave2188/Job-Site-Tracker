import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { PlusSquareIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Material from "../material/material";

const MaterialSection = () => {
	const [materialInput, setMaterialInput] = useState([<Material />]);

	const handleClick = () => {
		setMaterialInput([...materialInput, <Material />]);
	};

	return (
		<>
			{materialInput.map((index) => {
				return <Material key={index} />;
			})}

			<Box maxW="container.xl" display="flex" justifyContent="space-evenly" mb={10}>
				<Button id="add" background="blue.300" onClick={handleClick}>
					<PlusSquareIcon h={6} w={6} />
					<Text ml={3}>Add Material</Text>
				</Button>
				<Button id="remove" background="red.300" onClick={handleClick}>
					<SmallCloseIcon h={6} w={6} />
					<Text ml={3}>Remove</Text>
				</Button>
			</Box>
		</>
	);
};

export default MaterialSection;
