import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Footer } from '../candidates/components/footer';
import { Header } from '../candidates/components/header';
import { Landing } from '../candidates/pages/home/landing';

export const Home = () => (
	<Box>
		<Header>
			<Fragment>
				<HStack px={10} flex={1} color="whiteAlpha.700" spacing={20}>
					<Link href="/company"> Para Empresas</Link>
					<Link href="#jobs">Sobre nós</Link>
					<Link href="#journey">Suporte</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack>
						<Link href="/login" color="whiteAlpha.800">
							<Button border="1px" variant="ghost">
								Entrar
							</Button>
						</Link>
						<Link pr={10} href="/cadastro" color="whiteAlpha.800">
							<Button
								bg="#0077B6"
								variant="ghost"
								_hover={{
									background: '#297A7E',
								}}
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
