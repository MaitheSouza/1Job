import { EmailIcon } from '@chakra-ui/icons';
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
	InputGroup,
	InputLeftAddon,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { FormEvent, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useSearchParams } from 'react-router-dom';
import { api } from '../../../../../utils/api';
import { Recruiter } from '../../../../../utils/model/recruiter';
import { transformForm } from '../../../../../utils/transformForm';
import { NavBar } from '../../../../components/navbar';

export const UpdateRecruiter = ({ heading }: { heading: string }) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [recruiter, setRecruiter] = useState<Recruiter | undefined>(undefined);
	const [{ access_token, id }, setCookie] = useCookies();
	const [searchParams] = useSearchParams();
	useEffect(() => {
		api
			.get(`/api/recrutadores/${searchParams.get('recruiter_id')}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				const {
					data: { data },
				}: { data: { data: Recruiter } } = success;
				setRecruiter(data);
			})
			.catch((error) => {
				if (error.response) {
					console.error(error.response.status);
					console.error(error.response.data);
				}
			});
	}, [success, error]);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		setSuccess(false);
		setError(undefined);
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		body.empresa_id = id;
		body.ativo = recruiter?.ativo;

		api
			.put(`/api/recrutadores/${searchParams.get('recruiter_id')}`, body, {
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
		setTimeout(() => {
			setSuccess(false);
			setError(undefined);
		}, 8000);
	};
	if (!searchParams.get('recruiter_id'))
		return <Navigate to="/company/recruiters" />;
	return (
		<Flex
			flexDirection="column"
			w="100%"
			height="100%"
			justifyContent="space-between"
			align="center"
			id="entrar"
		>
			<NavBar />
			<Breadcrumb py={4} separator=">">
				<BreadcrumbItem>
					<BreadcrumbLink href="/company">Página Inicial</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem color="gray">
					<BreadcrumbLink href="/company/recruiters">
						Recrutadores
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage color="gray">
					<BreadcrumbLink href="/company/recruiters/update">
						Editar dados
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				as="form"
				className="form"
				onSubmit={(e: any) => handleSubmit(e)}
				flex={1}
				w="100%"
				alignItems="center"
				px={4}
				justifyContent="center"
				alignContent="center"
				maxW="600px"
			>
				<VStack color="black" fontSize={18} pb={5} alignItems="flex-start">
					<Text>Editar dados</Text>
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

				<FormControl borderColor="brand.200" pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="nome">
						Nome
					</FormLabel>
					<Input
						maxLength={14}
						placeholder="Digite o nome do recrutador"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						type="text"
						px={4}
						id="nome"
						name="nome"
						defaultValue={recruiter?.nome}
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="cpf">
						CPF
					</FormLabel>
					<Input
						maxLength={11}
						placeholder="Digite o CPF do recrutador"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="cpf"
						defaultValue={recruiter?.cpf}
						name="cpf"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="email">
						E-mail
					</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon children={<EmailIcon />} />
						<Input
							placeholder="Digite seu e-mail"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="email"
							type="email"
							defaultValue={recruiter?.email}
							name="email"
						/>
					</InputGroup>
				</FormControl>

				<HStack
					color="brand.200"
					spacing={4}
					w="100%"
					py={8}
					alignItems="center"
					flexDirection="row"
				></HStack>
				<Flex flexDirection="column" alignItems="center" pb={8}>
					<Button
						type="submit"
						colorScheme="teal"
						variant="solid"
						alignItems="center"
						bg="brand.200"
						px={8}
					>
						Atualizar
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
