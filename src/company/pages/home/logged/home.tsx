import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Divider,
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
		<Box gap={8} justifyContent="space-between">
			<NavBar />
			<Divider color="black" boxShadow="0px 2px 5px 0px #2A4365" />

			<VStack bg="white" alignItems="center" justifyContent="center">
				<Box as="form">
					<HStack pt={5}>
						<InputGroup
							m={8}
							w="900px"
							maxH="100vh"
							boxShadow="0px 2px 5px 2px #D3CBC2"
						>
							<InputLeftAddon
								as="label"
								htmlFor="vaga"
								children={<SearchIcon />}
								bg="white"
							/>
							<Input
								placeholder="Digite o nome da vaga"
								w="100%"
								color="gray"
								_placeholder={{ opacity: 0.8, color: 'inherit' }}
								id="vaga"
								name="vaga"
							/>
							<InputRightElement width="4.5rem">
								<Button
									type="submit"
									px={10}
									color="white"
									variant="ghost"
									background="linear-gradient(to right, #0077B6, #0ABAB5)"
								>
									Buscar
								</Button>
							</InputRightElement>
						</InputGroup>
					</HStack>
					<VStack id="jobs">
						<Heading color="black" alignItems="flex-start" fontSize={15} py={4}>
							Olá! {} Procure por suas vagas abertas, crie novas vagas e
							gerencie recrutadores.
						</Heading>
						<HStack
							w="100%"
							align="center"
							justify="center"
							spacing={10}
							overflowX="auto"
							py={4}
							px={2}
						>
							<Card
								path="/company/jobs/create"
								icon={BsBagPlus}
								heading="Criar uma nova vaga"
								description=""
							/>
							<Card
								path="/company/recruiters"
								icon={BsPeople}
								heading="Gerenciar recrutadores"
								description=" "
							/>
						</HStack>
					</VStack>
				</Box>
			</VStack>
		</Box>
	);
};
