import React, { useContext, useEffect, useState } from "react";
import { Box, FormControl, FormLabel, Select, Input, Text } from "@chakra-ui/react";
import { TiTrash } from "react-icons/ti";
import { DailyListContext } from "../../../context/dailyListContext";

const DailyMaterial = (props) => {
	const thisIndex = props.index;
	const { materialList, setMaterialList } = useContext(DailyListContext);
	const [used, setUsed] = useState(0);
	const returned = props.currentList.returned;
	const material = props.currentList.material;
	const amount = props.currentList.amount;

	useEffect(() => {
		if (props.currentList.amount > 0) {
			setUsed(props.currentList.amount > 0 ? props.currentList.amount - returned : 0);
		} else {
			setUsed(0);
		}
	}, [returned, props.currentList.amount]);

	const materialHandleChange = (event) => {
		const index = thisIndex;
		const updatedArr = [...materialList];

		if (event.target.id === "material") {
			updatedArr[index] = { ...updatedArr[index], material: event.target.value };
		} else if (event.target.id === "amount") {
			updatedArr[index] = { ...updatedArr[index], amount: event.target.value };
		} else if (event.target.id === "returned") {
			updatedArr[index] = { ...updatedArr[index], returned: event.target.value };
		}

		setMaterialList(updatedArr);
	};

	const deleteMaterial = () => {
		const index = thisIndex;
		const Arr = [...materialList];

		const updatedArr = Arr.filter((material, i) => {
			return i !== index;
		});

		setMaterialList(updatedArr);
	};

	const packsMetalNeeded = () => {
		const packs = Math.floor(props.currentList.amount / 30 + 1);
		return packs;
	};

	return (
		<>
			<Box display="flex" justifyContent="space-between" mb={10} flexDir={"column"} w={"100%"}>
				<Box display={"flex"} justifyContent={"end"} onClick={deleteMaterial} cursor={"pointer"}>
					<Text fontSize={"xs"} alignSelf={"center"}>
						Delete
					</Text>
					<TiTrash size={25} color="red" />
				</Box>
				<FormControl w={"100%"}>
					<FormLabel>Material</FormLabel>
					<Select
						id="material"
						placeholder="Select option"
						variant="filled"
						value={material}
						onChange={materialHandleChange}
					>
						<option>Insulation: 1 x 1</option>
						<option>Insulation: 2 x 1</option>
						<option>Insulation: 3 x 1</option>
						<option>Insulation: 4 x 1</option>
						<option>Insulation: 5 x 1</option>
						<option>Insulation: 6 x 1</option>
						<option>Insulation: 7 x 1</option>
						<option>Insulation: 8 x 1</option>
						<option>Insulation: 9 x 1</option>
						<option>Insulation: 10 x 1</option>
						<option>Insulation: 11 x 1</option>
						<option>Insulation: 12 x 1</option>
						<option>Insulation: 13 x 1</option>
						<option>Insulation: 14 x 1</option>
						<option>Insulation: 1.25 x 1.5</option>
						<option>Insulation: 2 x 1.5</option>
						<option>Insulation: 3 x 1.5</option>
						<option>Insulation: 4 x 1.5</option>
						<option>Insulation: 5 x 1.5</option>
						<option>Insulation: 6 x 1.5</option>
						<option>Insulation: 7 x 1.5</option>
						<option>Insulation: 8 x 1.5</option>
						<option>Insulation: 9 x 1.5</option>
						<option>Insulation: 10 x 1.5</option>
						<option>Insulation: 11 x 1.5</option>
						<option>Insulation: 12 x 1.5</option>
						<option>Insulation: 13 x 1.5</option>
						<option>Insulation: 14 x 1.5</option>
						<option>Lumber: 2 x 4</option>
						<option>Lumber: 2 x 6</option>
						<option>Lumber: 2 x 8</option>
						<option>Lumber: 2 x 10</option>
						<option>Lumber: 2 x 12</option>
						<option>Lumber: Plywood</option>
						<option>Cor Alum sheet: 8' green</option>
						<option>Cor Alum sheet: 9' green</option>
						<option>Cor Alum sheet: 10' green</option>
						<option>Cor Alum sheet: 11' green</option>
						<option>Cor Alum sheet: 8' tan</option>
						<option>Cor Alum sheet: 9' tan</option>
						<option>Cor Alum sheet: 10' tan</option>
						<option>Cor Alum sheet: 11' tan</option>
						<option>Cor Alum sheet: 8' carlsbad</option>
						<option>Cor Alum sheet: 9' carlsbad</option>
						<option>Cor Alum sheet: 10' carlsbad</option>
						<option>Cor Alum sheet: 11' carlsbad</option>
						<option>#5 90º</option>
						<option>#5.5 90º</option>
						<option>#6 90º</option>
						<option>#7 90º</option>
						<option>#8 90º</option>
						<option>#9 90º</option>
						<option>#11 90º</option>
						<option>#12 90º</option>
						<option>#13 90º</option>
						<option>#14 90º</option>
						<option>#5 45º</option>
						<option>#6 45º</option>
						<option>#7 45º</option>
						<option>#8 45º</option>
						<option>#9 45º</option>
						<option>#10 45º</option>
						<option>#11 45º</option>
						<option>#12 45º</option>
						<option>#13 45º</option>
						<option>#14 45º</option>
						<option>pads</option>
					</Select>
				</FormControl>
				<FormControl w={"100%"}>
					<FormLabel>Amount</FormLabel>
					<Box display={"flex"} alignContent={"center"} justifyContent={"space-between"}>
						<Input
							value={amount}
							type="number"
							id="amount"
							variant="filled"
							placeholder="0"
							onChange={materialHandleChange}
						/>
						<Box display={"flex"} alignSelf={"center"} mx={8}>
							<Text mr={2}>Packs:</Text>
							<Text>{packsMetalNeeded()}</Text>
						</Box>
					</Box>
				</FormControl>
				<FormControl w={"100%"}>
					<FormLabel>Returned</FormLabel>
					<Box display={"flex"} alignContent={"center"} justifyContent={"space-between"}>
						<Input
							type="number"
							id="returned"
							variant="filled"
							placeholder="Returned"
							value={returned}
							onChange={materialHandleChange}
						/>
						<Box display={"flex"} alignSelf={"center"} mx={8}>
							<Text mr={2}>Used:</Text>
							<Text>{used}</Text>
						</Box>
					</Box>
				</FormControl>
			</Box>
		</>
	);
};

export default DailyMaterial;
