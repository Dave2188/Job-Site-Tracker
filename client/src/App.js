import { fetchJobs } from "./api/index";
import JobForm from "./components/jobForm/jobForm";

fetchJobs();

function App() {
	return (
		<div className="App">
			<JobForm />
		</div>
	);
}

export default App;
