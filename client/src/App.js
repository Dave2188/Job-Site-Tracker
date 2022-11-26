import { useDispatch } from "react-redux";
import { getJobs } from "./actions/jobactions";

import JobForm from "./components/jobForm/jobForm";

function App() {
	const dispatch = useDispatch();

	// dispatch(getJobs());

	return (
		<div className="App">
			<JobForm />
		</div>
	);
}

export default App;
