import {
	Alert,
	AlertTitle,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../../../utils/api';
import { transformForm } from '../../../../../utils/transformForm';
import { NavBar } from '../../../../components/navbar';

export const CreateRecruiters = ({ heading }: { heading: string }) => {
	const [{ access_token, id }] = useCookies();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		setSuccess(false);
		setError(undefined);
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		body.empresa_id = id;
		api
			.post(`/api/recrutadores`, body, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				setSuccess(true);
			})
			.catch((error) => {
				if (error.response) {
					console.error(error.response.status);
					console.error(error.response.data);
					setError('Houve um erro');
				}
			});
		window.scrollTo({ top: 0 });
		setTimeout(() => {
			setSuccess(false);
			setError(undefined);
		}, 8000);
	};
	return (
		<Flex
			flexDirection="column"
			w="100%"
			height="100%"
			justifyContent="space-between"
			align="center"
			id="criar"
		>
			<NavBar />
			<Breadcrumb py={4} separator=">">
				<BreadcrumbItem>
					<BreadcrumbLink href="/company">Página Inicial</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href="/company/recruiters" color="gray">
						Recrutadores
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage color="gray">
					<BreadcrumbLink href="/company/recruiters/create">
						Novo recrutador
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>

			<Box
				as="form"
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
				w="100%"
				maxW="500px"
				px={4}
				flex={1}
				h="100%"
			>
				<VStack color="black" fontSize={18} pb={5} alignItems="flex-start">
					<Text>Cadastrar um novo recrutador</Text>
					{success && (
						<Alert status="success">
							<AlertTitle>Criado com sucesso.</AlertTitle>
						</Alert>
					)}
					{error && (
						<Alert status="error">
							<AlertTitle>{error}</AlertTitle>
						</Alert>
					)}
				</VStack>

				<FormControl borderColor="brand.200" w="100%" isRequired pt={4} pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="job_title">
						Nome
					</FormLabel>
					<Input
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="name"
						name="nome"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pt={4} pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="job_title">
						CPF
					</FormLabel>
					<Input
						type="number"
						maxLength={11}
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="CPF"
						name="cpf"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pt={4} pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="email">
						E-mail
					</FormLabel>

					<Input
						placeholder="Digite seu e-mail"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						id="email"
						type="email"
						name="email"
					/>
				</FormControl>

				<HStack
					color="brand.200"
					spacing={4}
					w="100%"
					py={3}
					pb={4}
					alignItems="center"
					flexDirection="row"
				></HStack>
				<Flex flexDirection="column" alignItems="center" pb={6}>
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
