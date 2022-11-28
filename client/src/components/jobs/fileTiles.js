import { FaFolderOpen } from "react-icons/fa";
import { Box, Text } from "@chakra-ui/react";

const FileTiles = (props) => {
	return (
		<Box
			boxShadow="dark-lg"
			rounded="lg"
			display="flex"
			justifyContent="center"
			alignItems="center"
			bg="whitesmoke"
			flexDir="column"
			maxH="28"
		>
			<Text fontSize="md" textAlign="center" as="b">
				{props.company}
			</Text>

			<FaFolderOpen size="5em" color="burlyWood" />

			<Text fontSize="sm" textAlign="center" as="b">
				{props.jobSiteName}
			</Text>
		</Box>
	);
};

export default FileTiles;
