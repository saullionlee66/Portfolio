import React from 'react'
import { Flex, Text, Box, Heading, Image } from "@chakra-ui/react";

function About() {
	return (
		<Box bgColor='blue.200'>
			<Flex bgColor='green.600' p='4'>
				<Heading fontSize='7xl' fontWeight='extrabold'>
					ABOUT
				</Heading>
			</Flex>
			<Box p={5} spacing={8}>
				<Text fontWeight='extrabold' fontSize={{ sm: "2xl", md: "4xl" }}>
					Hi, I'm Saul.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
					Welcome to my personal website. You should know me better.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
					I'm now finding a new career in IT industry.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
					Just like I managed everything on my own about immigration to Canada,
					I again finished my programming college program in my spare time.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
					These experience proved me to be a fast and good leaner.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
					In my personal life, I like to help others. I'm still helping many
					people who want to immigrate to Canada, giving them advice and
					answering questions.
				</Text>
				<Text fontSize={{ sm: "xl", md: "2xl" }}>
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
