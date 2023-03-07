import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import HomeBtnlarge from "./homeBtnlarge";

const mockStore = configureStore();

describe(HomeBtnlarge, () => {
	const store = mockStore();

	const component = (
		<Provider store={store}>
			<BrowserRouter>
				<HomeBtnlarge />
			</BrowserRouter>
		</Provider>
	);

	afterEach(() => {
		cleanup();
	});

	it("renders Button", () => {
		render(component);

		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("navigates to /", () => {
		render(component);

		const homeButton = screen.getByText("Home");
		fireEvent.click(homeButton);
		expect(window.location.pathname).toBe("/");
	});
});
