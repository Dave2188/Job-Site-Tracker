import { useEffect } from "react";
import JobForm from "./components/jobForm/jobForm";
import LandingPage from "./components/landingPage/landingPage";
import { Container } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowserError from "./components/browserError/browserError";
import Jobs from "./components/jobs/jobs";
import PrintJob from "./components/displayJob/displayJob";
import JobsComplete from "./components/jobsComplete/jobsCompete";
import Signup from "./components/signup/signup";
import { useDispatch } from "react-redux";
import { login } from "./redux/features/userSlice";
import DailyListView from "./components/dailyList/dailyMaterialView";
import Weather from "./components/weather/weather";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("user")) {
			dispatch(login(localStorage.getItem("user")));
		}
	}, [dispatch]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage />,
			errorElement: <BrowserError />,
		},
		{
			path: "/SignUp",
			element: <Signup />,
			errorElement: <BrowserError />,
		},
		{
			path: "/JobForm",
			element: <JobForm />,
			errorElement: <BrowserError />,
		},
		{
			path: "/jobForm/:_id",
			element: <PrintJob />,
			errorElement: <BrowserError />,
		},
		{
			path: "/jobs",
			element: <Jobs />,
			errorElement: <BrowserError />,
		},
		{
			path: "/JobsComplete",
			element: <JobsComplete />,
			errorElement: <BrowserError />,
		},
		{
			path: "/jobs/:_id",
			element: <JobForm />,
			errorElement: <BrowserError />,
		},
		{
			path: "/Daily",
			element: <DailyListView />,
			errorElement: <BrowserError />,
		},
		{
			path: "/Weather",
			element: <Weather />,
			errorElement: <BrowserError />,
		},
	]);

	return (
		<Container maxWidth="100vw" padding={0}>
			<ErrorBoundary>
				<RouterProvider router={router} baseName="/" />
			</ErrorBoundary>
		</Container>
	);
}
// start creating routes

export default App;
