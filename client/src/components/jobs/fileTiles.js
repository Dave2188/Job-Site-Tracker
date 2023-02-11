import { FaFolderOpen } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteJob, getJobs } from "../../actions/jobActions";

const FileTiles = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch(deleteJob(props.id));
		dispatch(getJobs());
		props.handleDeleteMode(false);
	};

	return (
		<div>
			{props.deleteMode === true ? (
				<IoCloseCircle
					size={32}
					color={"Red"}
					style={{ position: "relative", top: 15, left: -10 }}
					onClick={handleClick}
					cursor="pointer"
				/>
			) : null}

			<Box
				background={"gray.50"}
				boxShadow={"dark-lg"}
				rounded="lg"
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDir="column"
				maxH="28"
				onClick={() => navigate(`/jobs/${props.id}`)}
				cursor="pointer"
			>
				<Text fontSize="md" textAlign="center" as="b">
					{props.company}
				</Text>
				<FaFolderOpen size="5em" color="rgb(90,179,237)" />
				<Text fontSize="sm" textAlign="center" as="b">
					{props.jobSiteName}
				</Text>
			</Box>
		</div>
	);
};

export default FileTiles;
