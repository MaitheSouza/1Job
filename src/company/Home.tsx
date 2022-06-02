import { Button, Flex, HStack, Link } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Header } from '../candidates/components/header';
import { Landing } from '../company/pages/home/landing';

export const Company = () => (
	<Fragment>
		<Header>
			<Fragment>
				<HStack align="center" flex={1} color="whiteAlpha.700" spacing={4}>
					<Link href="/">Estudante</Link>
					<Link href="#jobs">Vagas</Link>
					<Link href="#journey">Jornada</Link>
				</HStack>
				<Flex alignItems="flex-end" justifyContent="space-between">
					<HStack spacing={2}>
						<Link href="company/login" color="whiteAlpha.800">
							<Button
								size="sm"
								_hover={{ backgroundColor: 'transparent' }}
								_active={{ backgroundColor: 'transparent' }}
								_focus={{ backgroundColor: 'transparent' }}
								variant="outline"
								px={2}
							>
								Entrar
							</Button>
						</Link>
						<Link href="company/cadastro" color="whiteAlpha.800">
							<Button
								_hover={{ backgroundColor: 'brand' }}
								_active={{ backgroundColor: 'brand' }}
								_focus={{ backgroundColor: 'brand' }}
								size="sm"
								bg="brand.100"
								variant="solid"
								px={2}
							>
								Cadastrar
							</Button>
						</Link>
					</HStack>
				</Flex>
			</Fragment>
		</Header>
		<Landing />
	</Fragment>
);
