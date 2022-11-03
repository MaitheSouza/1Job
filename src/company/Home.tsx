import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Header } from '../candidates/components/header';
import { Landing } from '../company/pages/home/landing';
import { Footer } from './components/Intro/footer';

export const Company = () => (
	<Box>
		<Header bg="blue">
			<Fragment>
				<HStack px={10} flex={1} color="whiteAlpha.700" spacing={20}>
					<Link href="/">Para Estudantes</Link>
					<Link href="#jobs">Vagas</Link>
					<Link href="#journey">Jornada</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack spacing={2}>
						<Link href="company/login" color="whiteAlpha.800">
							<Button variant="ghost">Entrar</Button>
						</Link>
						<Link pr={10} href="company/cadastro" color="whiteAlpha.800">
							<Button bg="brand.100" variant="ghost">
								Cadastrar
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
