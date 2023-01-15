import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Heading,
	Stack,
	FormControl,
	Input,
	FormLabel,
	Button,
	InputRightElement,
	InputGroup,
	Text,
} from "@chakra-ui/react";

import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const [signingUp, setSigningUp] = useState(false);
	const { signup, error, isLoading } = useSignup();
	const { loginUser, loginError, loginIsLoading } = useLogin();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("user")) {
			navigate("/");
		}
	}, []);

	const handleClick = () => setShow(!show);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		signingUp ? await signup({ email, password }) : await loginUser({ email, password });
	};

	const handleToggle = () => {
		signingUp === false ? setSigningUp(true) : setSigningUp(false);
	};

	return (
		<Container>
			<Container
				background={"whiteAlpha.900"}
				boxShadow="dark-lg"
				rounded="lg"
				height={"fit-content"}
				display={"flex"}
				flexDir={"column"}
				margin={"auto"}
				mt={"32"}
			>
				<Box m={"14"}>
					<Heading mb={8} fontFamily={"sans-serif"} textDecorationLine={"underline"}>
						{signingUp === true ? "Create Account" : "Sign In"}
					</Heading>
					<Stack>
						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter Your Email"
								background={"gray.200"}
							/>
							<FormLabel mt={5}>Password</FormLabel>
							<InputGroup display={"flex"} flexDir={"column"}>
								<Input
									background={"gray.200"}
									id="password"
									placeholder="Enter Password"
									type={show ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm" onClick={handleClick}>
										{show ? "Hide" : "Show"}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</Stack>
					<Button
						mt={6}
						background={"blue.300"}
						type="submit"
						onClick={handleSubmit}
						disabled={signingUp ? isLoading : loginIsLoading}
					>
						{signingUp ? "Create" : "Sign In"}
					</Button>
					{error === null ? null : (
						<Box
							mt={5}
							color={"red.600"}
							border={"1px"}
							textAlign={"center"}
							background={"red.100"}
							borderRadius={"lg"}
						>
							{error}
						</Box>
					)}
					{loginError === null ? null : (
						<Box
							mt={5}
							color={"red.600"}
							border={"1px"}
							textAlign={"center"}
							background={"red.100"}
							borderRadius={"lg"}
						>
							{loginError}
						</Box>
					)}
				</Box>
				<Box textAlign={"center"} mt={"-4"} mb={"3"}>
					<Text
						onClick={handleToggle}
						cursor={"pointer"}
						color={"blue"}
						fontSize={"md"}
						_hover={{ textDecoration: "underline" }}
					>
						{signingUp === false ? "Create account?" : "Sign in?"}
					</Text>
				</Box>
			</Container>
		</Container>
	);
};

export default Signup;
