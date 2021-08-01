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
		<VStack p={4} h='84vh'>
			<Heading fontSize='6xl'>Portfolio Showcases</Heading>
			<Divider borderColor='blue.400' border='2px' />
			<Grid templateColumns='repeat(3, 1fr)' gap={6}>
				{projects.map((p) => (
					<Box
						key={p.id}
						boxShadow='sm'
						w='28vw'
						p='8px'
						borderWidth='1px'
						borderRadius='lg'
						overflow='hidden'
						bgColor='blue.100'>
						<Image src={p.pic} alt='app photo' borderRadius='lg' />
						<Heading textAlign='center'>{p.name}</Heading>
						<Flex m='4' justify='space-evenly'>
							<Link href={p.url} isExternal>
								{<LinkIcon fontSize='large' />}
							</Link>
							<Link href={p.sourceURL} isExternal>
								{<GitHubIcon fontSize='large' />}
							</Link>
						</Flex>
						<Divider borderColor='blue.800' border='2px' />
						<Box>
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
									color='white'>
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
