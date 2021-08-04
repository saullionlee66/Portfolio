import React from "react";
import { Text, VStack, Heading, Box, useColorMode } from "@chakra-ui/react";

function Contact() {
	const { colorMode } = useColorMode();
	return (
		<VStack
			color={colorMode === "light" ? "#5121A0" : "black"}
			p={10}
			w='100%'
			h='84vh'
			bgImage='https://lh3.googleusercontent.com/lMWP55MGrRZFKZkLHXD108rKWMoPjKsQTqBZoapYLXtlWFXxEW-JwDEXryFp9w2b-_i6L1fPpM56kp65iQmkiAZt3kWoClFCdEFqh9JBxpr8aTO1yIs4GnyF7L2FfC7x6IDML7bpq5Q=w2400'
			bgPosition='center'
			bgRepeat='no-repeat'>
			<Box
				fontFamily='Cambria'
				p={6}
				borderRadius='lg'
				mt='200'
				textAlign='center'
				w='100%'
				maxW={{ xm: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
				<Heading
					fontSize={{ sm: "3xl", lg: "2xl", xl: "5xl" }}
					fontWeight='extrabold'
					textTransform='uppercase'>
					Contact Info
				</Heading>
				<Text
					color='primary.100'
					fontSize={{ sm: "lg", lg: "xl", xl: "2xl" }}
					fontWeight='bold'>
					Address: 220 Newton Dr.{" "}
				</Text>
				<Text fontSize={{ sm: "lg", lg: "xl", xl: "2xl" }} fontWeight='bold'>
					Toronto Ontario, M2M 2P3
				</Text>

				<Text fontSize={{ sm: "lg", lg: "xl", xl: "2xl" }} fontWeight='bold'>
					Mobile: 514-660-7110
				</Text>
				<Text fontSize={{ sm: "lg", lg: "xl", xl: "2xl" }} fontWeight='bold'>
					Email: saullionlee@gmail.com
				</Text>
				<Heading
					fontSize={{ sm: "3xl", lg: "2xl", xl: "6xl" }}
					fontWeight='extrabold'>
					GET IN TOUCH!
				</Heading>
			</Box>
		</VStack>
	);
}

export default Contact;
