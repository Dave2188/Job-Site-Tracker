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

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);

	const handleClick = () => setShow(!show);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<Container
			background={"whitesmoke"}
			boxShadow="dark-lg"
			rounded="lg"
			height={"fit-content"}
			display={"flex"}
			flexDir={"column"}
			margin={"auto"}
			mt={"5"}
		>
			<Box m={24}>
				<Heading mb={8} fontFamily={"sans-serif"} textDecorationLine={"underline"}>
					Sign Up
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
				<Button type="submit" onSubmit={handleSubmit} />
			</Box>
		</Container>
	);
};

export default Signup;
