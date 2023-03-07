import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import JobsComplete from "./jobsCompete";
import { initialState } from "../../../testData";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

describe(JobsComplete, () => {
	const store = mockStore({
		jobs: initialState,
	});

	const component = (
		<Provider store={store}>
			<BrowserRouter>
				<JobsComplete jobs={initialState} />
			</BrowserRouter>
		</Provider>
	);

	afterEach(() => {
		cleanup();
	});

	it("renders title", () => {
		render(component);
		expect(screen.getByText("Completed Jobs")).toBeInTheDocument();
	});

	it("renders job tiles", () => {
		render(component);
		expect(screen.getAllByTestId("tileTest")).toBeTruthy();
	});
});
