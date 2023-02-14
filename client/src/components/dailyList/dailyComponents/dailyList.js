/* eslint-disable no-unused-vars */
import { Container, Heading, FormControl, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import DailyMaterial from "./dailyMaterial";
import { DailyListContext } from "../../../context/dailyListContext";

const DailyList = () => {
	const { materialList, setMaterialList, isLoading } = useContext(DailyListContext);

	const [currentList, setCurrentList] = useState(materialList);

	const addMaterial = () => {
		setMaterialList([...materialList, { material: "", amount: "" }]);
	};

	useEffect(() => {
		setCurrentList(materialList);
	}, [materialList]);

	return (
		<>
			<Container
				maxWidth="full"
				width={"95vw"}
				boxShadow="dark-lg"
				rounded="lg"
				height={"fit-content"}
				display={"flex"}
				flexDir={"column"}
				margin={"auto"}
				mt={"5"}
				background={"gray.50"}
			>
				<FormControl id="dailyListForm">
					<Heading my={"5"} textAlign={"center"}>
						Daily Material List
					</Heading>
					{currentList.map((obj, index) => {
						console.log(materialList[index]);
						return (
							<Container
								key={index}
								display={"flex"}
								alignItems={"center"}
								width={"full"}
								padding={"0px"}
								margin={"0px"}
							>
								<DailyMaterial index={index} currentList={currentList[index]} />
							</Container>
						);
					})}
					<ButtonGroup margin={7} display={"flex"} justifyContent={"center"} spacing={20}>
						<Button onClick={addMaterial}>Add Material</Button>
						<Button isLoading={isLoading} loadingText="Submitting">
							Submit
						</Button>
					</ButtonGroup>
				</FormControl>
			</Container>
			{console.log(materialList)}
		</>
	);
};

export default DailyList;
