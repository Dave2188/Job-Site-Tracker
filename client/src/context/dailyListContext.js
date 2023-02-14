/* eslint-disable no-unused-vars */

import React, { createContext, useEffect, useState } from "react";

export const DailyListContext = createContext();

export function DailyListProvider({ children }) {
	const [materialList, setMaterialList] = useState([{ material: "", amount: "" }]);
	const [isLoading, setIsLoading] = useState(false);

	const materialHandleChange = (event) => {};

	return (
		<DailyListContext.Provider value={{ materialList, setMaterialList, isLoading }}>
			{children}
		</DailyListContext.Provider>
	);
}
