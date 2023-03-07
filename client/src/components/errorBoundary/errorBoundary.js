import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const handleErrors = () => {
			setHasError(true);
		};

		window.addEventListener("error", handleErrors);

		return () => {
			window.removeEventListener("error", handleErrors);
		};
	}, []);

	if (hasError) {
		return <h1>Opps something went wrong.</h1>;
	}

	return children;
};

export default ErrorBoundary;
