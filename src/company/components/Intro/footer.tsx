import {
	Box,
	Divider,
	Flex,
	Heading,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';

export const Footer = () => {
	return (
		<Flex px={10} gap={8} justifyContent="space-between" bg="white">
			<Box w="full" px={5}>
				<Heading
					color="blackAlpha.900"
					fontSize={32}
					letterSpacing="3px"
					textAlign="center"
					py={10}
				>
					Vagas for Business
					<br />
				</Heading>
				<VStack alignItems="flex-start" color="blackAlpha.900" py={5}>
					<Link href="/company">Business</Link>
					<Link href="#jobs">Recrutamento</Link>
				</VStack>

				<Divider />

				<Box py={8} px={2} gap={8} justifyContent="space-between">
					<Text fontSize={14}>
						Copyright © 2022 Diversas Vagas. Todos os direitos reservados.
						Termos de uso
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};
