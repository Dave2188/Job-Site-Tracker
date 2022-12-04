import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const PrintSection = (props) => {
	const material = props.material;
	return (
		<>
			<Heading>{props.name}</Heading>
			{console.log(props.material)}
			{material.map((item, i) => {
				return (
					<Text key={i}>
						Material:{item.material} = {item.amount}
					</Text>
				);
			})}
		</>
	);
};

export default PrintSection;
