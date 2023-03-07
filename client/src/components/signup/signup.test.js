import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "./signup";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe(Signup, () => {
	const store = mockStore();

	const component = (
		<Provider store={store}>
			<BrowserRouter>
				<Signup />
			</BrowserRouter>
		</Provider>
	);

	afterEach(() => {
		cleanup();
	});

	it("readers with inputs", () => {
		render(component);

		expect(screen.getByText("Email")).toBeInTheDocument();
		expect(screen.getByText("Password")).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: "Sign In" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
		expect(screen.getByText("Create account?")).toBeInTheDocument();
	});

	it("updates value when typing", () => {
		render(component);

		const passInput = screen.getByPlaceholderText("Enter Your Email", { name: "password" });
		const emailInput = screen.getByPlaceholderText("Enter Your Email", { name: "email" });

		fireEvent.change(passInput, { target: { value: "Hello, world!" } });
		fireEvent.change(emailInput, { target: { value: "Hello, world!" } });

		expect(passInput).toHaveValue("Hello, world!");
		expect(emailInput).toHaveValue("Hello, world!");
	});
});
