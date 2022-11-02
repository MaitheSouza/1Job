import { HStack, VStack } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../candidates/components/header';
import { LandingCadastro } from './pages/cadastro/landingCadastro';

export function Cadastro1() {
	const [{ access_token, email }] = useCookies();
	if (access_token && email) return <Navigate to="/company" />;
	return (
		<VStack id="jobs" align="center" justify="center" w="100%">
			<Header bg="blue" />
			<HStack
				w="100%"
				align="center"
				justify="center"
				spacing={10}
				px={2}
				maxW="500px"
			>
				<LandingCadastro heading="cadastrar" />
			</HStack>
		</VStack>
	);
}
