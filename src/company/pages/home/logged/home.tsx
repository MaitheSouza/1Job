import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	VStack,
} from '@chakra-ui/react';
import { BsBagPlus, BsPeople } from 'react-icons/bs';
import { Card } from '../../../components/card';
import { NavBar } from '../../../components/menuHamburguer';

export const Logged = () => {
	return (
		<Flex gap={8} justifyContent="space-between" w="100%">
			<VStack alignItems="center" w="100%">
				<NavBar />
				<Box as="form">
					<HStack w="100%" color="black" gap={1} pt={10}>
						<InputGroup
							margin={5}
							w="100%"
							maxW="800px"
							pr={16}
							boxShadow="1px 1px 2px gray"
						>
							<InputLeftAddon
								as="label"
								htmlFor="vaga"
								children={<SearchIcon />}
							/>
							<Input
								placeholder="Digite o nome da vaga"
								w="100%"
								color="black"
								_placeholder={{ opacity: 0.8, color: 'inherit' }}
								id="vaga"
								name="vaga"
							/>
							<InputRightElement width="4.5rem">
								<Button
									type="submit"
									colorScheme="brand.100"
									px={10}
									color="whiteAlpha.900"
									bg="brand.200"
								>
									Buscar
								</Button>
							</InputRightElement>
						</InputGroup>
					</HStack>
					<Box id="jobs" w="full" py={4} px={4} alignItems="center">
						<Flex
							justifyContent="space-between"
							alignItems="center"
							align="center"
							pb={10}
						>
							<Heading
								color="black"
								alignItems="center"
								fontSize={15}
								textAlign="center"
								py={4}
							>
								Olá! Procure por suas vagas abertas, crie novas vagas e gerencie
								recrutadores.
							</Heading>
						</Flex>
						<HStack
							w="100%"
							align="center"
							justify="center"
							spacing={10}
							overflowX="auto"
							py={4}
							px={2}
							color="brand.200"
						>
							<Card
								path="/company/jobs/create"
								icon={BsBagPlus}
								heading=""
								description="Criar uma nova vaga"
							/>
							<Card
								path="/company/recruiters"
								icon={BsPeople}
								heading=""
								description="Gerenciar recrutadores"
							/>
						</HStack>
					</Box>
				</Box>
			</VStack>
		</Flex>
	);
};
