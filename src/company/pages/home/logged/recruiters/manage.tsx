import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	Icon,
	Link,
	SimpleGrid,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { api } from '../../../../../utils/api';
import { Recruiter } from '../../../../../utils/model/recruiter';
import { NavBar } from '../../../../components/menuHamburguer';

export const Recruiters = ({ heading }: { heading: string }) => {
	const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
	const [{ access_token, id }] = useCookies();
	useEffect(() => {
		api
			.get(`/api/empresa/recrutadores/${id}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then(({ data: { data } }) => {
				setRecruiters(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
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
					<BreadcrumbLink href="/company/jobs/recruiters">
						Recrutadores
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>

			<Box w="100%" maxW="600px" px={4} flex={1} h="100%">
				<VStack color="black" fontSize={18} pb={5} alignItems="flex-start">
					<Text>Gerenciar recrutadores</Text>
				</VStack>
				<Flex flexDirection="column" alignItems="flex-start" pb={6}>
					<Button
						type="submit"
						bg="white"
						variant="outline"
						colorScheme="brand.200"
						boxShadow="1px 2px 2px gray"
						color="brand.200"
						borderRadius="70px"
						px={10}
					>
						<Link href="recruiters/create">Novo recrutador</Link>
					</Button>
				</Flex>

				<SimpleGrid
					columns={{ sm: 1, md: 1 }}
					textAlign="center"
					border="groove"
					borderRadius="6px"
					boxShadow="2px 2px 4px #ADADAD80"
				>
					<TableContainer>
						<Table variant="simple">
							<Thead>
								<Tr>
									<Th>Nome</Th>
									<Th>E-mail</Th>
									<Th>Ações</Th>
								</Tr>
							</Thead>
							<Tbody>
								{recruiters.map((recruiter) => {
									return (
										<Tr key={recruiter.id}>
											<Td>{recruiter.nome}</Td>
											<Td>{recruiter.email}</Td>
											<Td>
												<Link
													href={`recruiters/update?recruiter_id=${recruiter.id}`}
													marginRight={3}
													alignItems="center"
												>
													<Icon
														className="svg-gradient"
														as={EditIcon}
														color="#0077B6"
													/>
												</Link>
												<Link
													href={`recruiters/delete?recruiter_id=${recruiter.id}`}
													gap={3}
												>
													<Icon
														className="svg-gradient"
														as={DeleteIcon}
														color="#840000"
													/>
												</Link>
											</Td>
										</Tr>
									);
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</SimpleGrid>
			</Box>
		</Flex>
	);
};
