import {
	Alert,
	AlertTitle,
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
	VStack,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { api } from '../../../utils/api';
import { transformForm } from '../../../utils/transformForm';

export const Landing = ({ heading }: { heading: string }) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const [{ access_token }, setCookie] = useCookies();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		setSuccess(false);
		setError(undefined);
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		api
			.post('/api/empresa/login', body, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				const {
					data: { access_token },
				} = success.data;
				setCookie('email', body.email, {
					maxAge: undefined,
					path: '/',
				});
				setCookie('access_token', access_token, {
					maxAge: undefined,
					path: '/',
				});
				api
					.get(`/api/empresa/${body.email}`, {
						headers: {
							Authorization: access_token,
						},
					})
					.then(
						({
							data: {
								data: { id },
							},
						}) => {
							setCookie('id', id, { path: '/' });
						}
					);
				setSuccess(true);
			})
			.catch((error) => {
				if (error.response) {
					console.error(error.response.status);
					console.error(error.response.data);
					setError('Usuário ou senha incorreto');
				}
			});
		setTimeout(() => {
			setSuccess(false);
			setError(undefined);
		}, 9000);
	};

	return (
		<Flex flexDirection="column" p={5} w="full" maxH="100%" id="entrar">
			<Box
				as="form"
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
				maxW="500px"
			>
				<HStack gap={5} justifyContent="center" py={2}>
					<Link className="g-text" href="login">
						Entrar
					</Link>
					<Link href="cadastro">Cadastre-se</Link>
				</HStack>

				<VStack color="black" fontSize={18} pb={5} alignItems="flex-start">
					{success && (
						<Alert status="success">
							<AlertTitle>Atualizado com sucesso.</AlertTitle>
						</Alert>
					)}
					{error && (
						<Alert status="error">
							<AlertTitle>{error}</AlertTitle>
						</Alert>
					)}
				</VStack>

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
							name="email"
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired pt={4} size="md">
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
							name="password"
							px={4}
						/>
						<InputRightElement width="5rem">
							<Button size="sm" onClick={handleClick}>
								{show ? 'Ocultar' : 'Mostrar'}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<HStack color="black" spacing={4} pb={4} py={8} flexDirection="row">
					<Link href="#entrar">Esqueceu sua senha?</Link>
				</HStack>

				<Flex flexDirection="column" borderRadius={8} alignItems="center">
					<Button
						type="submit"
						variant="outline"
						alignItems="center"
						px="100%"
						background="linear-gradient(to right, #0077B6, #0ABAB5)"
					>
						Entrar
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
						Entrar com LinkedIn
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
