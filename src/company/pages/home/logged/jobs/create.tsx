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
	Select,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../../../utils/api';
import { transformForm } from '../../../../../utils/transformForm';
import { NavBar } from '../../../../components/navbar';

export const CreateJob = ({ heading }: { heading: string }) => {
	const [{ access_token, id }] = useCookies();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		setSuccess(false);
		setError(undefined);
		e.preventDefault();
		const inputs = document.querySelectorAll(
			'.form input, .form textarea, .form select'
		) as unknown as HTMLInputElement[];
		const body = transformForm(inputs);
		body.empresa_id = id;
		api
			.post('/api/vagas', body, {
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
				<BreadcrumbItem isCurrentPage color="gray">
					<BreadcrumbLink href="/company/jobs/create">Nova vaga</BreadcrumbLink>
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
					<Text>Criar uma nova vaga</Text>
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

				<FormControl borderColor="brand.200" w="100%" isRequired pt={4} pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="job_title">
						Título da vaga
					</FormLabel>
					<Input
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="titulo"
						name="titulo"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="qtd_vagas">
						Quantidade de Vagas
					</FormLabel>
					<Input
						maxLength={3}
						type="number"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="quantidade"
						name="quantidade"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="area">
						Área
					</FormLabel>

					<Select
						placeholder="Selecione"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						id="area_id"
						name="area_id"
						alignItems="center"
						borderColor="brand.200"
					>
						<option value="2">Tecnologia</option>
					</Select>
				</FormControl>

				<FormControl borderColor="brand.200" w="100%" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="modalidade">
						Modalidade
					</FormLabel>
					<Select
						placeholder="Selecione"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						id="modalidade"
						name="modalidade"
						alignItems="center"
						borderColor="brand.200"
					>
						<option value="Remoto">Remoto</option>
						<option value="Presencial">Presencial</option>
						<option value="Híbrido">Híbrido</option>
					</Select>
				</FormControl>

				<FormControl borderColor="brand.200" isRequired pb={3}>
					<FormLabel
						fontWeight="bold"
						color="brand.200"
						htmlFor="regime_contratual"
					>
						Regime contratual
					</FormLabel>
					<Select
						placeholder="Selecione"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						id="regime_contratual"
						name="regime_contratual"
						alignItems="center"
						borderColor="brand.200"
					>
						<option value="CLT">CLT</option>
						<option value="PJ">PJ</option>
					</Select>
				</FormControl>

				<FormControl borderColor="brand.200" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="remuneração">
						Remuneração
					</FormLabel>
					<Input
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						type="text"
						px={4}
						id="remuneracao"
						name="remuneracao"
						alignItems="center"
					/>
				</FormControl>

				<FormControl borderColor="brand.200" pb={3}>
					<FormLabel
						fontWeight="bold"
						color="brand.200"
						htmlFor="recrutador_responsavel"
					>
						Recrutador responsável
					</FormLabel>

					<Select
						placeholder="Selecione"
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						id="recrutador_id"
						name="recrutador_id"
						alignItems="center"
						borderColor="brand.200"
					>
						<option value="">Gabriel</option>
					</Select>
				</FormControl>

				<FormControl borderColor="brand.200" isRequired pb={3}>
					<FormLabel fontWeight="bold" color="brand.200" htmlFor="descricao">
						Descrição da vaga
					</FormLabel>
					<Textarea
						w="100%"
						_placeholder={{ opacity: 0.8, color: 'inherit' }}
						px={4}
						id="descricao"
						name="descricao"
						alignItems="center"
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
						Criar
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
};
