import React from "react";
import { Heading, Text, Box, Divider } from "@chakra-ui/react";

const PrintSection = (props) => {
	const material = props.material;
	return (
		<Box textAlign={"left"}>
			<Heading as={"h4"} size={"md"} marginY={"2"}>
				{props.name}
			</Heading>

			{material.map((item, i) => {
				return (
					<Text key={i} margin={"0"} fontSize={"sm"}>
						{item.material} - {item.amount}'
					</Text>
				);
			})}
			<Divider orientation={"horizontal"} />
		</Box>
	);
};

export default PrintSection;
