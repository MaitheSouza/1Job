import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Input,
} from '@chakra-ui/react';

export const Intro = () => {
	return (
		<Flex bg="white" px={8} gap={8} justifyContent="space-between">
			<Box w="100%" py="60px" px={8} ml={10}>
				<HStack float="right">
					<Image src="/images/telaHome.png" />
				</HStack>

				<Heading color="black" fontSize={40} letterSpacing="3px" pb={5} mt={10}>
					Encontre sua vaga de emprego!
				</Heading>

				<HStack as="form" pb={5}>
					<Input
						boxShadow="2px 2px 5px 0px #D3CBC2"
						placeholder="Digite um cargo"
						w="80%"
						h="50px"
						maxW="500px"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
					/>
					<Button
						type="submit"
						variant="outline"
						w="fit-content"
						h="50px"
						boxShadow="2px 2px 10px 0px #D3CBC2"
					>
						Buscar
					</Button>
				</HStack>
				<HStack>
					<Button
						type="submit"
						variant="outline"
						w="fit-content"
						border="2px"
						color="brand.200"
						borderColor="brand.200"
					>
						Vagas de Marketing
					</Button>
					<Button
						type="submit"
						variant="outline"
						w="fit-content"
						border="2px"
						color="brand.100"
						borderColor="brand.100"
					>
						Vagas de Tecnologia
					</Button>
				</HStack>
			</Box>
		</Flex>
	);
};
