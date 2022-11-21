import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Header } from '../company/components/header';
import { Landing } from '../company/pages/home/landing';
import { Footer } from './components/Intro/footer';

export const Company = () => (
	<Box>
		<Header bg="white">
			<Fragment>
				<HStack px={10} flex={1} color="black" spacing={20}>
					<Link href="/">Para Estudantes</Link>
					<Link href="#jobs">Sobre nós</Link>
					<Link href="#jobs">Suporte</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack spacing={2}>
						<Link href="company/login" color="whiteAlpha.800">
							<Button
								border="2px"
								borderColor="brand.200"
								variant="outline"
								color="brand.200"
							>
								Entrar
							</Button>
						</Link>
						<Link pr={10} href="company/cadastro" color="white">
							<Button
								bg="brand.100"
								variant="ghost"
								background="linear-gradient(to right, #0077B6, #0ABAB5)"
							>
								Cadastre-se
							</Button>
						</Link>
					</HStack>
				</Flex>
			</Fragment>
		</Header>
		<Landing />
		<Footer />
	</Box>
);
