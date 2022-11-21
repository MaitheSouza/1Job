import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';

export const Intro = () => {
	return (
		<Flex bg="white" px={8} gap={8} justifyContent="space-between">
			<Box w="100%" py="60px" px={8} ml={10}>
				<HStack justifyContent="flex-end" float="right">
					<Image src="/images/introEmpresa.png" />
				</HStack>

				<Heading color="black" fontSize={40} letterSpacing="3px" pb={5} mt={10}>
					Encontre o candidato ideal!
				</Heading>

				<HStack pb={5}>
					<VStack alignItems="flex-start" w="100%" color="black">
						<Text>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text.
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text.
						</Text>
					</VStack>
				</HStack>
			</Box>
		</Flex>
	);
};
