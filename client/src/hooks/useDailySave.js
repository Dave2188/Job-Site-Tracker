import { useState } from "react";

export const useDailySave = () => {
	const [loading, setLoading] = useState(false);

	const dailySave = (list) => {
		setLoading(true);

		localStorage.setItem("dailyList", JSON.stringify(list));

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return { loading, dailySave, setLoading };
};
