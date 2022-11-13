// import React, { useState } from "react";
// import { Box, Button, Text } from "@chakra-ui/react";
// import Material from "../material/material";

// const MaterialSection = ({ onClick }) => {
// 	const [materialInput, setMaterialInput] = useState([<Material />]);

// 	// const handleClick = (event) => {
// 	// 	if (event.target.id === "add") {
// 	// 		return addMaterial();
// 	// 	}
// 	// 	if (event.target.id === "remove") {
// 	// 		return removeMaterial();
// 	// 	}

// 	// 	return;
// 	// };

// 	// const addMaterial = () => {
// 	// 	setMaterialInput([...materialInput, <Material />]);
// 	// };

// 	// const removeMaterial = () => {
// 	// 	let last = materialInput[materialInput.length - 1];

// 	// 	setMaterialInput(
// 	// 		materialInput.filter((input) => {
// 	// 			return input !== last;
// 	// 		}),
// 	// 	);
// 	// };

// 	return (
// 		<>
// 			{/* {materialInput.map(() => {
// 				let key = Math.random();
// 				return <Material key={key} materialInput={materialInput} setMaterialInput={setMaterialInput} />;
// 			})} */}

// 			<Box maxW="container.xl" display="flex" justifyContent="space-evenly" mb={10}>
// 				<Button id="add" background="blue.300" onClick={onClick.handleClick}>
// 					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
// 						+
// 					</Text>
// 					<Text id="add" ml={2}>
// 						Add Material
// 					</Text>
// 				</Button>
// 				<Button id="remove" background="red.300" onClick={onClick.handleClick}>
// 					<Text id="remove" fontSize={18} fontWeight="bold" position="relative" bottom="1px">
// 						x
// 					</Text>
// 					<Text id="remove" ml={2}>
// 						Remove
// 					</Text>
// 				</Button>
// 			</Box>
// 		</>
// 	);
// };

// export default MaterialSection;
