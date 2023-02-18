/* eslint-disable no-unused-vars */
import { Container, Heading, FormControl, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import DailyMaterial from "./dailyMaterial";
import { DailyListContext } from "../../../context/dailyListContext";
import { useNavigate } from "react-router-dom";

const DailyList = () => {
	const { materialList, setMaterialList, isLoading } = useContext(DailyListContext);
	const navigate = useNavigate();
	const [currentList, setCurrentList] = useState(materialList);

	const addMaterial = () => {
		setMaterialList([...materialList, { material: "", amount: "", returned: "" }]);
	};

	const clearList = () => {
		setMaterialList([{ material: "", amount: "", returned: "" }]);
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
								sx={{ maxW: "100%" }}
								padding={"0px"}
								margin={"0px"}
							>
								<DailyMaterial index={index} currentList={currentList[index]} clear={clearList} />
							</Container>
						);
					})}

					<ButtonGroup margin={7} display={"flex"} justifyContent={"center"} spacing={20}>
						<Button background={"green.100"} onClick={addMaterial}>
							Add Material
						</Button>
						<Button
							background={"green.300"}
							isLoading={isLoading}
							loadingText="Submitting"
							onClick={() => {
								navigate("/");
							}}
						>
							Save
						</Button>
					</ButtonGroup>
				</FormControl>
				<Button background={"red.300"} onClick={clearList} my={"3"}>
					Clear List
				</Button>
				<Button
					background={"blue.300"}
					onClick={() => {
						navigate("/");
					}}
					my={"3"}
				>
					Home
				</Button>
			</Container>
		</>
	);
};

export default DailyList;
