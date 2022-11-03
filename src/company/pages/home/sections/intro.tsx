import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export const Intro = () => {
	return (
		<Flex px={8} pb={20} gap={8} justifyContent="space-between">
			<Box w="100%" py="80px" px={8}>
				<Heading fontSize={40} letterSpacing="3px" pb={5} color="black">
					Encontre o candidato ideal!
				</Heading>
				<Box pb={20}>
					<VStack alignItems="flex-start" w="100%" color="black" gap={1}>
						<Text>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text.
						</Text>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
};
