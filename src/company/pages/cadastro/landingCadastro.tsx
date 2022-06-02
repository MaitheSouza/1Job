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
} from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import { api } from '../../../utils/api';
import { transformForm } from '../../../utils/transformForm';

export const LandingCadastro = ({ heading }: { heading: string }) => {
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
		<Flex
			flexDirection="column"
			p={7}
			w="full"
			height="100%"
			maxH="100%"
			justifyContent="space-between"
			id="cadastrar"
		>
			<Box
				as="form"
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
				w="100%"
				maxW="500px"
				flex={1}
				h="100%"
			>
				<HStack
					px={24}
					color="brand.200"
					spacing={4}
					pb={4}
					w="100%"
					justifyContent="space-between"
					wrap="wrap"
					py={8}
				>
					<Link href="login">Entrar</Link>
					<Link href="cadastro">Cadastre-se</Link>
				</HStack>

				<FormControl w="100%" isRequired pt={4} pb={3}>
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
				<FormControl w="100%" isRequired pb={3} size="md">
					<FormLabel htmlFor="password">Senha</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon children={<LockIcon />} />
						<Input
							placeholder="Digite sua senha"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="password"
							type={'password'}
							px={4}
							name="password"
						/>
					</InputGroup>
				</FormControl>

				<HStack
					color="brand.200"
					spacing={4}
					w="100%"
					py={3}
					alignItems="center"
					flexDirection="row"
				></HStack>
				<Flex flexDirection="column" alignItems="center">
					<Button
						type="submit"
						colorScheme="teal"
						variant="solid"
						alignItems="center"
						bg="brand.200"
						px={10}
					>
						Cadastrar
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
