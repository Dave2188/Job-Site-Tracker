import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Box, Button, Text, Input } from "@chakra-ui/react";
import Material from "../material/material";

const Section = (props) => {
	const [materialNumber, setMaterialNumber] = useState(
		// props.job ? props.job.siteSections[props.index].materials : [{}],
		props.section ? props.section.materials : [{}],
	);
	const [nameValue, setNameValue] = useState("");
	const tempSection = {
		sectionName: nameValue,
		materials: [],
	};

	const handleClick = (e) => {
		if (e.target.id === "add") {
			setMaterialNumber([...materialNumber, {}]);
		}
		if (e.target.id === "remove") {
			setMaterialNumber(materialNumber.slice(0, materialNumber.length - 1));
		}
	};

	return (
		<>
			<Box
				onBlur={() => {
					return props.setTempSectionData(tempSection);
				}}
			>
				<FormControl mb={6} id="sectionName">
					<FormLabel>Section Name</FormLabel>
					<Input
						defaultValue={props.section ? props.section.sectionName : null}
						name="sectionName"
						type="text"
						placeholder="Section Name"
						variant="filled"
						onChange={(e) => {
							setNameValue(e.target.value);
							tempSection[e.target.name] = e.target.value;
						}}
						maxWidth="100%"
					/>
				</FormControl>
				{materialNumber.map((num, i) => {
					return (
						<Material
							key={i}
							materialSection={props.section ? props.section.materials[i] : null}
							handleData={(obj) => {
								tempSection.materials[i] = obj;
							}}
						/>
					);
				})}
			</Box>
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
		</>
	);
};

export default Section;
