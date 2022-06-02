import {
	AspectRatio,
	Box,
	Flex,
	Heading,
	Img,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import intro from '../../../../candidates/images/intro.svg';

export const Intro = () => {
	return (
		<Flex px={8} gap={8} bg="whiteAlpha.500" justifyContent="space-between">
			<Box w="100%" py="80px">
				<Heading color="black" fontSize={32} letterSpacing="3px" pb={8}>
					Encontre o candidato ideal!
				</Heading>
				<VStack alignItems="flex-start" w="100%" color="black" gap={1}>
					<Text>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text.
					</Text>
				</VStack>
			</Box>
			<Flex alignItems="flex-end">
				<AspectRatio
					className="img-landing"
					ratio={12 / 11}
					width="400px"
					height="400px"
				>
					<Img src={intro} />
				</AspectRatio>
			</Flex>
		</Flex>
	);
};
