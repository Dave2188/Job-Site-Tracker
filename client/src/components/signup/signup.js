import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const [signingUp, setSigningUp] = useState(true);
	const { signup, error, isLoading } = useSignup();
	// const isLoggedIn = useSelector((state) => state.user);

	const handleClick = () => setShow(!show);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		// console.log(isLoggedIn);
		await signup({ email, password });
	};

	const handleToggle = () => {
		signingUp === false ? setSigningUp(true) : setSigningUp(false);
	};

	return (
		<Container>
			<Container
				background={"white"}
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
						{signingUp === true ? "Sign up" : "Log In"}
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
					<Button mt={6} background={"blue.300"} type="submit" onClick={handleSubmit} disabled={isLoading}>
						Submit
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
				</Box>
				<Box textAlign={"center"} mt={"-4"} mb={"3"}>
					<Button onClick={handleToggle} background={"green.200"} fontSize={"sm"}>
						{signingUp === false ? "Create account" : "Log In"}
					</Button>
				</Box>
			</Container>
		</Container>
	);
};

export default Signup;
