import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Link,
	Text,
} from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { api } from '../../../utils/api';
import { transformForm } from '../../../utils/transformForm';

export const LandingCadastro = ({ heading }: { heading: string }) => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		api
			.post('/api/empresa', body)
			.then((success) => {
				console.log(success);
			})
			.catch((error) => {
				if (error.response) {
					console.error(error.response.status);
					console.error(error.response.data);
				}
			});
	};
	return (
		<Flex flexDirection="column" p={5} w="full" maxH="100%" id="cadastrar">
			<Box
				as="form"
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
				flex={1}
			>
				<HStack gap={5} justify="center" py={2}>
					<Link href="login">Entrar</Link>
					<Link className="g-text" href="cadastro">
						Cadastre-se
					</Link>
				</HStack>

				<FormControl isRequired>
					<FormLabel htmlFor="razao_social">Razão Social</FormLabel>
					<Input
						placeholder="Digite a Razão Social"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="razao_social"
						name="razao_social"
						alignItems="center"
					/>
				</FormControl>

				<FormControl w="100%" isRequired pb={3}>
					<FormLabel htmlFor="nome_fantasia">Nome Fantasia</FormLabel>
					<Input
						placeholder="Digite o Nome Fantasia"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="nome_fantasia"
						name="nome_fantasia"
						alignItems="center"
					/>
				</FormControl>

				<FormControl isRequired pb={3}>
					<FormLabel htmlFor="cnpj">CNPJ</FormLabel>
					<Input
						maxLength={14}
						placeholder="Digite o CNPJ da empresa"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						onChange={(e) => {
							e.target.value = e.target.value.replace(/[^0-9]/g, '');
						}}
						type="text"
						px={4}
						id="cnpj"
						name="cnpj"
						alignItems="center"
					/>
				</FormControl>

				<FormControl w="100%" isRequired pb={3}>
					<FormLabel htmlFor="email">E-mail</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon
							bg="white"
							children={<Icon className="svg-gradient" as={BsPersonCircle} />}
						/>
						<Input
							placeholder="Digite seu e-mail"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="email"
							type="email"
							name="email"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired pt={4} pb={5} size="md">
					<FormLabel htmlFor="password">Senha</FormLabel>
					<InputGroup>
						<InputLeftAddon
							bg="white"
							children={<Icon className="svg-gradient" as={BiLockAlt} />}
						/>
						<Input
							placeholder="Digite sua senha"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="password"
							type={show ? 'text' : 'password'}
							px={4}
							name="password"
						/>
						<InputRightElement width="5rem">
							<Button size="sm" onClick={handleClick}>
								{show ? 'Ocultar' : 'Mostrar'}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>

				<Flex flexDirection="column" borderRadius={8} alignItems="center">
					<Button
						type="submit"
						color="white"
						variant="outline"
						alignItems="center"
						bg="brand.200"
						px="100%"
						background="linear-gradient(to right, #0077B6, #0ABAB5)"
					>
						Cadastrar
					</Button>
				</Flex>

				<Text align="center" p={2}>
					OU
				</Text>

				<Flex flexDirection="column" borderRadius={8} alignItems="center">
					<Button
						color="white"
						type="submit"
						variant="solid"
						alignItems="center"
						px="100%"
						bg="brand.200"
					>
						<Icon as={AiFillLinkedin} m={1} />
						Cadastrar com LinkedIn
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
