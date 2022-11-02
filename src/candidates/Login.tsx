import { HStack, VStack } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../candidates/components/header';
import { Landing } from '../candidates/pages/login/landing';

export const Login = () => {
	const [{ access_token, email }] = useCookies();
	if (access_token && email) return <Navigate to="/" />;
	return (
		<VStack id="jobs" alignItems="center" w="100%">
			<Header bg="blue" />
			<HStack
				w="100%"
				align="center"
				justify="center"
				spacing={10}
				px={2}
				maxW="500px"
			>
				<Landing heading="login" />
			</HStack>
		</VStack>
	);
};
