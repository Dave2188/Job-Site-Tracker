import { fetchJobs } from "./api/index";

fetchJobs();

function App() {
	return (
		<div className="App">
			<h1 style={{ textAlign: "center", color: "white", backgroundColor: "black", height: "100vh" }}>My app</h1>
		</div>
	);
}

export default App;
