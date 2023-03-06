import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import LandingPage from "./landingPage";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const mockStore = configureStore();

describe(LandingPage, () => {
	const initialState = { user: { isLoggedIn: true } };
	const store = mockStore(initialState);

	const component = (
		<Provider store={store}>
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>
		</Provider>
	);

	afterEach(() => {
		cleanup();
	});

	it("renders all nav links", () => {
		window.alert = () => {};
		render(component);

		expect(screen.getByText("JOBS")).toBeInTheDocument();
		expect(screen.getByText("ADD NEW JOB")).toBeInTheDocument();
		expect(screen.getByText("COMPLETED JOBS")).toBeInTheDocument();
		expect(screen.getByText("DAILY MATERIAL LIST")).toBeInTheDocument();
		expect(screen.getByText("DAILY WEATHER")).toBeInTheDocument();
	});

	it("contains app title", () => {
		render(component);
		// window.alert = () => {};
		expect(screen.getByText("Job Tracker")).toBeInTheDocument();
	});

	it("navigates to jobs page", () => {
		const user = { email: "test" };

		render(component);

		// window.alert = () => {};
		const jobsButton = screen.getByText("JOBS");
		fireEvent.click(jobsButton);
		expect(window.location.pathname).toBe("/Jobs");
	});

	it("navigates to new jobs page", () => {
		const user = { email: "test" };

		render(component);
		// window.alert = () => {};
		const jobsButton = screen.getByText("ADD NEW JOB");
		fireEvent.click(jobsButton);
		expect(window.location.pathname).toBe("/JobForm");
	});

	it("navigates to completed jobs page", () => {
		const user = { email: "test" };

		render(component);

		// window.alert = () => {};
		const jobsButton = screen.getByText("COMPLETED JOBS");
		fireEvent.click(jobsButton);
		expect(window.location.pathname).toBe("/JobsComplete");
	});

	it("navigates to daily list page", () => {
		const user = { email: "test" };

		render(component);
		// window.alert = () => {};
		const jobsButton = screen.getByText("DAILY MATERIAL LIST");
		fireEvent.click(jobsButton);
		expect(window.location.pathname).toBe("/Daily");
	});

	it("navigates to weather page", () => {
		const user = { email: "test" };

		render(component);
		// window.alert = () => {};
		const jobsButton = screen.getByText("DAILY WEATHER");
		fireEvent.click(jobsButton);
		expect(window.location.pathname).toBe("/Weather");
	});
});
