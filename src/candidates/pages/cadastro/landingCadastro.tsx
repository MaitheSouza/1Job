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
			.post('/api/candidato', body)
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
					<Link href="/login">Entrar</Link>
					<Link className="g-text" href="/cadastro">
						Cadastre-se
					</Link>
				</HStack>

				<FormControl isRequired>
					<FormLabel htmlFor="first-name">Nome</FormLabel>
					<Input
						placeholder="Digite seu nome completo"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="first-name"
						alignItems="center"
						name="nome"
					/>
				</FormControl>

				<FormControl isRequired pt={4}>
					<FormLabel htmlFor="CPF">CPF</FormLabel>
					<Input
						maxLength={11}
						placeholder="Digite seu CPF"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						onChange={(e) => {
							e.target.value = e.target.value.replace(/[^0-9]/g, '');
						}}
						type="text"
						px={4}
						alignItems="center"
						name="cpf"
					/>
				</FormControl>

				<FormControl isRequired pt={4}>
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
							alignItems="center"
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
							alignItems="center"
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
						className="svg-gradient"
						color="white"
						type="submit"
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
