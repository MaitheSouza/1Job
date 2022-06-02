import { Button, Flex, HStack, Link } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Footer } from '../candidates/components/footer';
import { Header } from '../candidates/components/header';
import { Landing } from '../candidates/pages/home/landing';

export const Home = () => (
	<Fragment>
		<Header>
			<Fragment>
				<HStack align="center" flex={1} color="whiteAlpha.700" spacing={4}>
					<Link href="/company">Empresas</Link>
					<Link href="#jobs">Vagas</Link>
					<Link href="#journey">Jornada</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack spacing={2}>
						<Link href="/login" color="whiteAlpha.800">
							<Button variant="outline" px={2}>
								Entrar
							</Button>
						</Link>
						<Link href="/cadastro" color="whiteAlpha.800">
							<Button bg="brand.100" variant="solid" px={2}>
								Cadastrar
							</Button>
						</Link>
					</HStack>
				</Flex>
			</Fragment>
		</Header>
		<Landing />

		<Footer />
	</Fragment>
);
