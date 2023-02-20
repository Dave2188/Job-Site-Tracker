import React, { useEffect, useState } from "react";
import { Container, Divider, Heading, Spinner, Box, Image, Text, Link, Button } from "@chakra-ui/react";
import { useGetWeather } from "../../hooks/useWeather";
import { useNavigate } from "react-router-dom";

const Weather = () => {
	const { weather, getWeather, locationKey, loading, getLocationKey, lat } = useGetWeather();
	const [forecast, setForecast] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (lat.current !== "" && locationKey.current === "") {
			getLocationKey();
			console.log("hi");
		}
	});

	useEffect(() => {
		console.log(weather);
		if (weather === null && locationKey.current !== "") {
			console.log("yo");
			getWeather();
		}
	});

	useEffect(() => {
		console.log(forecast);
		if (weather !== null && weather !== forecast) {
			setForecast(weather);
		}
	}, [setForecast, weather, forecast]);

	return (
		<>
			<Container
				maxWidth="full"
				width={"95vw"}
				boxShadow="dark-lg"
				background={"gray.50"}
				rounded="lg"
				height={"fit-content"}
				display={"flex"}
				flexDir={"column"}
				alignContent={"center"}
				margin={"auto"}
				mt={"5"}
			>
				{loading ? (
					<Heading>Getting location...</Heading>
				) : (
					<>
						<Heading textAlign={"center"} mt={6} size={"2xl"}>
							Local Weather
						</Heading>
						<Divider shadow={"dark-lg"} mb={6} />

						<Container flexDir={"column"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
							{forecast === "" ? (
								<>
									<Spinner size={"xl"} alignSelf={"center"} my={10} />
									<Button
										maxW={"2xl"}
										background={"blue.200"}
										onClick={() => {
											navigate("/");
										}}
										my={"3"}
									>
										Home
									</Button>
								</>
							) : (
								<Container display={"flex"} flexDir={"column"}>
									<Container textAlign={"center"} my={4} background={"red.100"} rounded={"3xl"}>
										<Heading color={"red.500"} size={"md"} p={6}>
											Alert: {forecast.Headline.Text}
										</Heading>
									</Container>
									<Container textAlign={"center"} my={4} mt={7}>
										<Heading size={"md"}> Todays Date: {forecast.DailyForecasts[0].Date.slice(0, 10)}</Heading>
									</Container>
									<Divider shadow={"dark-lg"} />
									<Container
										my={10}
										display={"flex"}
										justifyContent={"center"}
										flexDir={"column"}
										textAlign={"center"}
										background={"blue.400"}
										rounded={"3xl"}
										py={4}
									>
										<Heading mb={3} size={"small"} textDecoration={"underline"}>
											Daytime Conditions
										</Heading>

										<Box textAlign={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"}>
											<Image src={`/${forecast.DailyForecasts[0].Day.Icon}-s.png`} alt="weather icon" h={20} />
											<Text>{forecast.DailyForecasts[0].Day.IconPhrase}</Text>
										</Box>
										<Text mt={3}>
											Precipitation:{" "}
											{forecast.DailyForecasts[0].Day.HasPrecipitation === false
												? "No"
												: forecast.DailyForecasts[0].Day.PrecipitationIntensity +
												  " " +
												  forecast.DailyForecasts[0].Day.PrecipitationType}
										</Text>
									</Container>
									<Container
										mb={10}
										display={"flex"}
										justifyContent={"center"}
										flexDir={"column"}
										textAlign={"center"}
										background={"blue.400"}
										rounded={"3xl"}
										py={4}
									>
										<Heading mb={3} size={"small"} textDecoration={"underline"}>
											Nighttime Conditions
										</Heading>

										<Box textAlign={"center"} alignItems={"center"} display={"flex"} justifyContent={"center"}>
											<Image src={`/${forecast.DailyForecasts[0].Night.Icon}-s.png`} alt="weather icon" h={20} />
											<Text>{forecast.DailyForecasts[0].Night.IconPhrase}</Text>
										</Box>
										<Text mt={3}>
											Precipitation:{" "}
											{forecast.DailyForecasts[0].Night.HasPrecipitation === false
												? "No"
												: forecast.DailyForecasts[0].Night.PrecipitationIntensity +
												  " " +
												  forecast.DailyForecasts[0].Night.PrecipitationType}
										</Text>
									</Container>
									<Container
										display={"flex"}
										justifyContent={"center"}
										flexDir={"column"}
										textAlign={"center"}
										background={"blue.400"}
										rounded={"3xl"}
										py={4}
									>
										<Heading size={"small"} mb={3}>
											Temps
										</Heading>
										<Text>
											HI-{forecast.DailyForecasts[0].Temperature.Maximum.Value}º / LO-
											{forecast.DailyForecasts[0].Temperature.Maximum.Value}º
										</Text>
									</Container>
									<Link color={"blue.300"} my={6} textAlign={"center"} href={forecast.Headline.Link}>
										Full Forecast
									</Link>
									<Button
										maxW={"2xl"}
										background={"blue.200"}
										onClick={() => {
											navigate("/");
										}}
										my={"3"}
									>
										Home
									</Button>
								</Container>
							)}
						</Container>
					</>
				)}
			</Container>
		</>
	);
};

export default Weather;
