import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Footer } from '../candidates/components/footer';
import { Header } from '../candidates/components/header';
import { Landing } from '../candidates/pages/home/landing';

export const Home = () => (
	<Box
		background="
		linear-gradient(
		90deg,
		rgba(10, 186, 181, 1) 0%,
		rgba(0, 119, 182, 1) 100%
	)"
	>
		<Header>
			<Fragment>
				<HStack px={10} flex={1} color="whiteAlpha.700" spacing={20}>
					<Link href="/company"> Para Empresas</Link>
					<Link href="#jobs">Vagas</Link>
					<Link href="#journey">Jornada</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack>
						<Link href="/login" color="whiteAlpha.800">
							<Button variant="ghost">Entrar</Button>
						</Link>
						<Link pr={10} href="/cadastro" color="whiteAlpha.800">
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
