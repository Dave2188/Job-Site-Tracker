/* eslint-disable no-unused-vars */

import React, { createContext, useEffect, useState } from "react";

export const DailyListContext = createContext();

export function DailyListProvider({ children }) {
	const [materialList, setMaterialList] = useState(
		localStorage.getItem("dailyList")
			? JSON.parse(localStorage.getItem("dailyList"))
			: [{ material: "", amount: "", returned: "" }],
	);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<DailyListContext.Provider value={{ materialList, setMaterialList, isLoading }}>
			{children}
		</DailyListContext.Provider>
	);
}
