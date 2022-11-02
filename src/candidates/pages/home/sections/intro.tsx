import { Box, Button, Flex, Heading, HStack, Input } from '@chakra-ui/react';

export const Intro = () => {
	return (
		<Flex px={8} gap={8} pb={20} justifyContent="space-between">
			<Box w="100%" py="80px" px={8}>
				<Heading
					color="whiteAlpha.900"
					fontSize={40}
					letterSpacing="3px"
					pb={5}
				>
					Encontre sua vaga de emprego!
				</Heading>

				<Box as="form" pb={20}>
					<HStack w="100%" color="whiteAlpha.900" gap={1}>
						<Input
							placeholder="Digite um cargo"
							w="100%"
							h="50px"
							maxW="600px"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
						/>
						<Button
							type="submit"
							colorScheme="brand.100"
							variant="solid"
							w="fit-content"
						>
							Buscar
						</Button>
					</HStack>
				</Box>
			</Box>
		</Flex>
	);
};
