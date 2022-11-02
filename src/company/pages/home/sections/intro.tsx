import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

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
		</Flex>
	);
};
