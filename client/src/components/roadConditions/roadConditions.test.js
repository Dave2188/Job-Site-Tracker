import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
// import HomeBtnlarge from "./homeBtnlarge";
import RoadConditions from "./roadConditions";

const mockStore = configureStore();

describe(RoadConditions, () => {
	const store = mockStore();

	const component = (
		<Provider store={store}>
			<BrowserRouter>
				<RoadConditions />
			</BrowserRouter>
		</Provider>
	);

	afterEach(() => {
		cleanup();
	});

	it("renders iframe", () => {
		render(component);

		expect(screen.getByTitle("ndroads iframe")).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	// it("navigates to /", () => {
	// 	render(component);

	// 	const homeButton = screen.getByText("Home");
	// 	fireEvent.click(homeButton);
	// 	expect(window.location.pathname).toBe("/");
	// });
});
