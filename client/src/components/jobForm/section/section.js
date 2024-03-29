import React, { useState, useCallback, useEffect } from "react";
import { FormControl, FormLabel, Box, Button, Text, Input } from "@chakra-ui/react";
import Material from "../material/material";

const Section = (props) => {
	const [materialNumber, setMaterialNumber] = useState(props.section ? props.section.materials : [{}]);
	const [nameValue, setNameValue] = useState(props.section ? props.section.sectionName : "");

	const tempSection = {
		sectionName: nameValue,
		materials: materialNumber,
	};

	useEffect(() => {
		props.setTempSectionData(tempSection);
	}, [materialNumber]);

	const handleClick = (e) => {
		if (e.target.id === "add") {
			setMaterialNumber([...materialNumber, {}]);
		}
		if (e.target.id === "remove") {
			setMaterialNumber(materialNumber.slice(0, materialNumber.length - 1));
		}
	};

	const handleSetMaterialNumber = (obj, i) => {
		setMaterialNumber(() => {
			let newArray = [...materialNumber];
			newArray[i] = obj;
			return newArray;
		});
	};

	return (
		<>
			<Box
				onBlur={() => {
					return props.setTempSectionData(tempSection);
				}}
			>
				<FormControl mb={6} id="sectionName" isRequired>
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
							materialSection={materialNumber[i]}
							handleData={(obj) => {
								handleSetMaterialNumber(obj, i);
							}}
						/>
					);
				})}
			</Box>
			<Box maxW="container.xl" display="flex" justifyContent="space-evenly" mb={10}>
				<Button id="add" background="blue.300" onClick={handleClick} shadow={"dark-lg"}>
					<Text id="add" fontSize={25} position="relative" bottom={0.5}>
						+
					</Text>
					<Text id="add" ml={2} fontWeight={"medium"}>
						Add Material
					</Text>
				</Button>
				<Button id="remove" background="red.300" onClick={handleClick} shadow={"dark-lg"}>
					<Text id="remove" fontSize={18} fontWeight="bold" position="relative" bottom="1px">
						x
					</Text>
					<Text id="remove" ml={2} fontWeight={"medium"}>
						Remove
					</Text>
				</Button>
			</Box>
		</>
	);
};

export default Section;
