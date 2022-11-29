import { FaFolderOpen } from "react-icons/fa";
import { Box, Text } from "@chakra-ui/react";
import { redirect, useNavigate } from "react-router-dom";

const FileTiles = (props) => {
	const navigate = useNavigate();

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
			onClick={() => navigate(`/jobs/${props.id}`)}
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
