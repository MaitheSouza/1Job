import { Box, Flex, Heading, Link, VStack } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
	return (
		<Flex px={8} gap={8} justifyContent="space-between">
			<Box w="full" bg="whiteAlpha.400" px={5}>
				<Heading
					color="black"
					fontSize={32}
					letterSpacing="3px"
					textAlign="center"
					py={6}
				>
					Temos vagas em todo país
					<br />
				</Heading>

				<VStack alignItems="flex-start" color="black" py={5}>
					<Link href="/company">Empresas</Link>
					<Link href="#jobs">Vagas</Link>
					<Link href="#journey">Jornada</Link>
				</VStack>
			</Box>
		</Flex>
	);
};
