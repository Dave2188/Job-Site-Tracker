/* eslint-disable no-unused-vars */

import { useRef, useState, useMemo, useEffect } from "react";
const secret = process.env.REACT_APP_WEATHER_KEY;

export const useGetWeather = () => {
	const lat = useRef("");
	const long = useRef("");
	const locationKey = useRef("");
	const [loading, setLoading] = useState(null);
	const [weather, setWeather] = useState(null);
	const [loadingWeather, setLoadingWeather] = useState(null);
	const key = `${secret}`;

	useMemo(() => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition(
			(position) => {
				lat.current = position.coords.latitude.toString().slice(0, 5);
				long.current = position.coords.longitude.toString().slice(0, 7);
				// console.log(lat.current, long.current);
				setLoading(false);
			},
			(error) => {
				alert("Sorry no position available");
			},
		);
	}, []);

	const getLocationKey = async () => {
		try {
			const cityQuery = `${lat.current},${long.current}`;

			const URL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${cityQuery}&language=en-us&details=false&toplevel=false`;

			const response = await fetch(URL, { method: "GET" });
			const data = await response.json();

			locationKey.current = data.Key;
			setLoadingWeather(true);
		} catch (error) {
			console.log(error.message);
		}
	};

	// catch/try is better

	const getWeather = async () => {
		try {
			await getLocationKey();
			const URL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey.current}?&apikey=${secret}`;

			const response = await fetch(URL, { method: "GET", details: true, metric: false });
			const data = await response.json();
			setWeather(data);
			setLoadingWeather(false);
		} catch (error) {
			console.log(error);
		}
	};

	return { getWeather, loading, weather, locationKey, lat, getLocationKey };
};
