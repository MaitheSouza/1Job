import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AiOutlineUser } from 'react-icons/ai';
import {
	HiOutlineCurrencyDollar,
	HiOutlineLocationMarker,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api';
import { Recruiter } from '../../utils/model/recruiter';

export const CardList = ({
	job_title,
	qtd_vagas,
	area,
	modalidade,
	regime_contratual,
	remuneracao,
	recrutador_responsavel,
	description,
	path,
}: {
	job_title: string;
	qtd_vagas: number;
	area: number;
	modalidade: string;
	regime_contratual: string;
	remuneracao: string;
	recrutador_responsavel: string;
	description: string;
	path: string;
}) => {
	const [{ access_token, id }, setCookie] = useCookies();
	const [name, setName] = useState('Carregando...');
	const navigate = useNavigate();
	const goTo = () => {
		navigate(path);
	};
	useEffect(() => {
		api
			.get(`/api/recrutadores/${recrutador_responsavel}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				const {
					data: { data },
				}: { data: { data: Recruiter } } = success;
				setName(data.nome);
			})
			.catch((error) => {
				setName('-');
			});
	}, []);
	return (
		<Flex
			onClick={goTo}
			flexDirection="column"
			p={6}
			w="full"
			height="100%"
			maxH="100%"
			justifyContent="space-between"
			border="groove"
			borderRadius="6px"
			boxShadow="1px 1px 1px gray"
			_hover={{ backgroundColor: 'gray.100', cursor: 'pointer' }}
		>
			<Box flex={1} h="100%">
				<Heading
					fontSize={20}
					alignItems="flex-start"
					letterSpacing="3px"
					pb={3}
				>
					{job_title}
				</Heading>
				<HStack fontSize={13} color="gray.600">
					<Text>{regime_contratual} </Text>
					<Text>{qtd_vagas} vagas </Text>
					<Text display="inline-flex" gap={1} alignItems="center">
						<Icon as={HiOutlineCurrencyDollar} w={5} h={5} color="brand.200" />
						{' R$ '}
						{remuneracao}
					</Text>
					<Text display="inline-flex" gap={1} alignItems="center">
						<Icon as={HiOutlineLocationMarker} w={5} h={5} color="brand.200" />
						{modalidade}{' '}
					</Text>
					<Text display="inline-flex" gap={1} alignItems="center">
						<Icon as={AiOutlineUser} w={5} h={5} color="brand.200" />
						{name}{' '}
					</Text>
				</HStack>
			</Box>
		</Flex>
	);
};
