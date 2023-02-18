/* eslint-disable no-unused-vars */
import { Container, Heading, FormControl, Button, ButtonGroup } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import DailyMaterial from "./dailyMaterial";
import { DailyListContext } from "../../../context/dailyListContext";
import { useNavigate } from "react-router-dom";
import { useDailySave } from "../../../hooks/useDailySave";

const DailyList = () => {
	const { materialList, setMaterialList, isLoading } = useContext(DailyListContext);
	const [currentList, setCurrentList] = useState(materialList);
	const { loading, setLoading, dailySave } = useDailySave();
	const navigate = useNavigate();

	const addMaterial = () => {
		setMaterialList([...materialList, { material: "", amount: "", returned: "" }]);
	};

	const clearList = () => {
		setMaterialList([{ material: "", amount: "", returned: "" }]);
		localStorage.clear("dailyList");
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

					<ButtonGroup margin={7} display={"flex"} justifyContent={"center"} spacing={12}>
						<Button background={"teal.300"} onClick={addMaterial}>
							Add Material
						</Button>
						<Button
							px={10}
							background={"green.300"}
							isLoading={loading}
							loadingText="Submitting"
							onClick={() => {
								dailySave(currentList);
							}}
						>
							Save
						</Button>
					</ButtonGroup>
				</FormControl>
				<Container display={"flex"} flexDir={"column"}>
					<Button background={"red.300"} onClick={clearList} my={"3"} maxW={"2xl"}>
						Clear List
					</Button>
					<Button
						maxW={"2xl"}
						background={"blue.300"}
						onClick={() => {
							navigate("/");
						}}
						my={"3"}
					>
						Home
					</Button>
				</Container>
			</Container>
		</>
	);
};

export default DailyList;
