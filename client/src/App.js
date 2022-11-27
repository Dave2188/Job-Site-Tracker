import JobForm from "./components/jobForm/jobForm";
import LandingPage from "./components/landingPage/landingPage";
import { Container } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import BrowserError from "./components/browserError/browserError";
import Jobs from "./components/jobs/jobs";
// import { useDispatch } from "react-redux";
// import { getJobs } from "./actions/jobActions";

function App() {
	// const dispatch = useDispatch();
	// dispatch(getJobs());

	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage />,
			errorElement: <BrowserError />,
		},
		{
			Path: "/JobForm",
			element: <JobForm />,
		},
		{
			path: "/jobs",
			element: <Jobs />,
		},
	]);

	return (
		<Container maxWidth="100vw" padding={0}>
			<RouterProvider router={router} />
		</Container>
	);
}

export default App;
