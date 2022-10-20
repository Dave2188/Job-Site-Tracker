import { fetchJobs } from "./api/index";
import NavBar from "./components/navbar";

fetchJobs();

function App() {
	return (
		<div className="App">
			<NavBar />
		</div>
	);
}

export default App;
