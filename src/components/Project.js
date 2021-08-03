import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import projects from "./Helpers/ProjectsData";
import {
	VStack,
	Grid,
	Heading,
	Divider,
	Box,
	Text,
	Badge,
	Link,
	Flex,
	Image,
} from "@chakra-ui/react";
function Project() {
	return (
		<VStack p={4}>
			<Heading
				fontWeight='extrabold'
				fontSize={{ sm: "4xl", lg: "6xl" }}
				bgGradient='linear(to-r, blue.500, blue.300,green.500)'
				bgClip='text'
				textTransform='uppercase'>
				Portfolio Showcases
			</Heading>
			<Divider borderColor='blue.400' border='2px' />
			<Grid
				templateColumns={{
					md: "repeat(1,1fr)",
					lg: "repeat(2,1fr)",
					xl: "repeat(3, 1fr)",
				}}
				gap={6}>
				{projects.map((p) => (
					<Box
						key={p.id}
						w='95%'
						borderWidth='1px'
						borderRadius='lg'
						boxShadow='lg'
						bgColor='blue.100'>
						<Image src={p.pic} alt='app photo' borderRadius='lg' />
						<Heading textAlign='center' fontWeight='semibold'>
							{p.name}
						</Heading>
						<Flex mt='4' justify='space-evenly'>
							<Link href={p.url} isExternal>
								{<LinkIcon fontSize='large' />}
							</Link>
							<Link href={p.sourceURL} isExternal>
								{<GitHubIcon fontSize='large' />}
							</Link>
						</Flex>
						<Box p='6'>
							<Divider borderColor='blue.800' border='1px' />

							<Text fontSize='lg' fontWeight='bold'>
								{p.description}
							</Text>
							{p.stack.map((s) => (
								<Badge
									borderRadius='full'
									mx='1'
									my='2'
									p='2'
									bg='blue.400'
									color='black'>
									{s}
								</Badge>
							))}
						</Box>
					</Box>
				))}
			</Grid>
		</VStack>
	);
}

export default Project;
