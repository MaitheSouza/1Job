import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FormEvent } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../utils/api';
import { transformForm } from '../../../utils/transformForm';

export const Landing = ({ heading }: { heading: string }) => {
	const [cookies, setCookie] = useCookies();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		api
			.post('/api/candidato/login', body)
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
					.get(`/api/candidato/${body.email}`, {
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
			})
			.catch((error) => {
				if (error.response) {
					console.error(error.response.status);
					console.error(error.response.data);
				}
			});
	};

	return (
		<Flex
			flexDirection="column"
			p={7}
			w="full"
			height="100%"
			maxH="100%"
			justifyContent="space-between"
			id="entrar"
		>
			<Box
				as="form"
				flex={1}
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
			>
				<HStack
					px={24}
					color="black"
					spacing={4}
					pb={4}
					w="100%"
					maxW="500px"
					justifyContent="space-between"
					wrap="wrap"
					py={8}
				>
					<Link href="/login">Entrar</Link>
					<Link href="/cadastro">Cadastre-se</Link>
				</HStack>

				<VStack color="brand.200" alignItems="center">
					<Text>Bem vindo de volta, estudante!</Text>
				</VStack>

				<FormControl w="100%" isRequired pt={4}>
					<FormLabel htmlFor="email">E-mail</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon children={<EmailIcon />} />
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

				<FormControl w="100%" isRequired pt={4} size="md">
					<FormLabel htmlFor="password">Senha</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon children={<LockIcon />} />
						<Input
							placeholder="Digite sua senha"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="password"
							type={'password'}
							name="password"
							px={4}
						/>
					</InputGroup>
				</FormControl>
				<HStack
					color="brand.200"
					spacing={4}
					pb={4}
					w="100%"
					py={8}
					alignItems="center"
					flexDirection="row"
				>
					<Link href="#entrar">Esqueceu sua senha?</Link>
				</HStack>
				<Flex flexDirection="column" alignItems="center">
					<Button
						type="submit"
						colorScheme="teal"
						variant="solid"
						alignItems="center"
						bg="brand.200"
						px={10}
					>
						Entrar
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
