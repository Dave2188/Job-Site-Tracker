/* eslint-disable no-unused-vars */
import React from "react";
import { DailyListProvider } from "../../context/dailyListContext";
import DailyList from "./dailyComponents/dailyList";

const DailyListView = () => {
	return (
		<DailyListProvider>
			<DailyList />
		</DailyListProvider>
	);
};

export default DailyListView;
