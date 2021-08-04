import React from 'react'
import {
	Flex,
	Text,
	Box,
	Heading,
	Image,
	useColorMode,
} from "@chakra-ui/react";

function About() {
	const { colorMode } = useColorMode();

	return (
		<Box bgColor={colorMode === "light" ? "blue.200" : "blue.800"}>
			<Flex bgColor={colorMode === "light" ? "green.500" : "green.900"} p='4'>
				<Heading fontSize='7xl' fontWeight='extrabold'>
					ABOUT
				</Heading>
			</Flex>
			<Box p={5} spacing={8} fontSize={{ sm: "xl", md: "2xl" }}>
				<Text fontWeight='extrabold'>Hi, I'm Saul.</Text>
				<Text>Welcome to my personal website. You should know me better.</Text>
				<Text>I'm now finding a new career in IT industry.</Text>
				<Text>
					Just like I managed everything on my own about immigration to Canada,
					I again finished my programming college program in my spare time.
				</Text>
				<Text>These experience proved me to be a fast and good leaner.</Text>
				<Text>
					In my personal life, I like to help others. I'm still helping many
					people who want to immigrate to Canada, giving them advice and
					answering questions.
				</Text>
				<Text>
					And I really believe one day I will help others in IT industry
					whenever I have the ability and experience.
				</Text>
			</Box>
			<Image
				src='https://lh3.googleusercontent.com/gBLdeIjBfiGmudiVsR5uqjdXvnG4ZIcH46udX9TBGJSqzc-UQwnX4Y_CCeWQ3yTPh410D4guNYtU5bLWC2ZS42N7dBXSdckBoc4_ttuwo3vSv21HC22nUTojmrooftHrGXB8NzgSicQ=w2400'
				alt='personal pic'
			/>
		</Box>
	);
}

export default About
