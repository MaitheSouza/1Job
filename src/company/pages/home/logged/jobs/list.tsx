import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Link,
	Spinner,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../../../utils/api';
import { Vaga } from '../../../../../utils/model/vaga';
import { CardList } from '../../../../components/cardList';
import { NavBar } from '../../../../components/menuHamburguer';

export const Jobs = ({ heading }: { heading: string }) => {
	const [vagas, setVagas] = useState<Vaga[] | undefined>(undefined);
	const [{ access_token, id }, setCookie] = useCookies();
	useEffect(() => {
		api
			.get(`/api/empresa/vagas/${id}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then(({ data }) => {
				const { data: vagas } = data;
				setVagas(vagas);
			});
	}, []);
	if (!vagas) return <Spinner />;
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
					<BreadcrumbLink href="/company/jobs">Vagas em aberto</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>

			<Box w="100%" maxW="500px" px={4} flex={1} h="100%">
				<VStack
					color="black"
					fontSize={18}
					pb={5}
					pt={4}
					alignItems="flex-start"
				>
					<Text>Aqui estão as vagas que estão em aberto no momento:</Text>
				</VStack>

				<VStack
					w="100%"
					align="center"
					justify="center"
					spacing={10}
					overflowX="auto"
					py={4}
					px={2}
					color="brand.200"
				>
					{vagas.map(
						({
							id,
							titulo,
							descricao,
							quantidade,
							area_id,
							modalidade,
							regime_contratual,
							remuneracao,
							recrutador_id,
						}) => {
							return (
								<Link href="jobs/show">
									<CardList
										key={id}
										path=""
										job_title={titulo}
										description={descricao}
										qtd_vagas={quantidade}
										area={area_id}
										modalidade={modalidade}
										regime_contratual={regime_contratual}
										remuneracao={remuneracao.toLocaleString('pt-BR', {
											currency: 'BRL',
										})}
										recrutador_responsavel={recrutador_id}
									/>
								</Link>
							);
						}
					)}
				</VStack>
			</Box>
		</Flex>
	);
};
