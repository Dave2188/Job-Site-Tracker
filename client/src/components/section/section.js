import React, { useState } from "react";
import { FormControl, FormLabel, Box, Button, Text, Input } from "@chakra-ui/react";
import Material from "../material/material";

const Section = ({ setJobData, jobData }) => {
	const [siteSections, setSiteSections] = useState([]);
	const [materialList, setMaterialList] = useState([]);
	const [materials, setMaterials] = useState({
		material: "",
		amount: "",
	});

	const sectionChange = (event) => {
		setSiteSections([{ ...siteSections, sectionName: event.target.value }]);
	};

	const handleClick = (event) => {
		if (event.target.id === "add") {
			setMaterialList([...materialList, materials]);
		}
		if (event.target.id === "remove") {
			return;
		}
	};

	return (
		<>
			<FormControl mb={6}>
				<FormLabel>Section Name</FormLabel>
				<Input name="sectionName" type="text" placeholder="Section Name" variant="filled" onChange={sectionChange} />
			</FormControl>
			<Material setData={setMaterials} data={materials} />
			{materialList.map((itemSet, i) => {
				return <Material key={i} setData={setMaterials} data={materials} value={itemSet} />;
			})}
			<Box maxW="container.xl" display="flex" justifyContent="space-evenly" mb={10}>
				<Button id="add" background="blue.300" onClick={handleClick}>
					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
						+
					</Text>
					<Text id="add" ml={2}>
						Add Material
					</Text>
				</Button>
				<Button id="remove" background="red.300" onClick={handleClick}>
					<Text id="remove" fontSize={18} fontWeight="bold" position="relative" bottom="1px">
						x
					</Text>
					<Text id="remove" ml={2}>
						Remove
					</Text>
				</Button>
			</Box>
			{console.log(materialList)}
			{console.log(materials)}
		</>
	);
};

export default Section;
// set up this part in one file
