import { EmailIcon, LockIcon } from '@chakra-ui/icons';
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
	Spinner,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../../utils/api';
import { Company } from '../../../../utils/model/company';
import { transformForm } from '../../../../utils/transformForm';
import { NavBar } from '../../../components/menuHamburguer';

export const Update = ({ heading }: { heading: string }) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [company, setCompany] = useState<Company | undefined>(undefined);
	const [{ access_token, email }, setCookie] = useCookies();
	useEffect(() => {
		api
			.get(`/api/empresa/${email}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				const {
					data: { data },
				}: { data: { data: Company } } = success;
				setCompany(data);
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
		body.ativo = company?.ativo;
		if (body.password) {
			if (body.password !== body.password_confirmation) {
				setError('As senhas não coincidem.');
				return;
			}
		}
		api
			.put(`/api/empresa/${company?.id}`, body, {
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
	if (!company) return <Spinner />;
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
				<BreadcrumbItem isCurrentPage color="gray">
					<BreadcrumbLink href="/company/update">Perfil</BreadcrumbLink>
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
					<Text>Atualizar Dados</Text>
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

				<FormControl borderColor="brand.200" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="cnpj">
						CNPJ
					</FormLabel>
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
						defaultValue={company.cnpj}
						alignItems="center"
					/>
				</FormControl>

				<FormControl w="100%" isRequired pt={2} pb={3} borderColor="brand.200">
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="razao_social">
						Razão Social
					</FormLabel>
					<Input
						placeholder="Digite a Razão Social"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						defaultValue={company.razao_social}
						id="razao_social"
						name="razao_social"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pb={3}>
					<FormLabel
						fontWeight="bold"
						color="brand.200"
						htmlFor="nome_fantasia"
					>
						Nome Fantasia
					</FormLabel>
					<Input
						placeholder="Digite o Nome Fantasia"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="nome_fantasia"
						defaultValue={company.nome_fantasia}
						name="nome_fantasia"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pb={3}>
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
							defaultValue={company.email}
							name="email"
						/>
					</InputGroup>
				</FormControl>
				<FormControl borderColor="brand.200" w="100%" pb={3} size="md">
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="password">
						Senha
					</FormLabel>
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
				<FormControl borderColor="brand.200" w="100%" pb={3} size="md">
					<FormLabel
						fontWeight="bold"
						color="brand.200"
						htmlFor="password_confirmation"
					>
						Confirme sua senha
					</FormLabel>
					<InputGroup w="100%">
						<InputLeftAddon children={<LockIcon />} />
						<Input
							placeholder="Confirme sua senha"
							w="100%"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
							id="password_confirmation"
							type={'password'}
							px={4}
							name="password_confirmation"
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
