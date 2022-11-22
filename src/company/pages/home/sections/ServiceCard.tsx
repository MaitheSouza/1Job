import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { ServiceCard } from '../../../components/Intro/serviceCard';

export const Services = () => {
	return (
		<Box bg="brand.200" id="jobs" w="full" alignItems="center" pb={10} pt={10}>
			<Flex justifyContent="center" alignItems="center">
				<Heading color="white" fontSize={32} textAlign="center" py={10}>
					Ferramentas de recrutamento:
				</Heading>
			</Flex>
			<HStack
				w="100%"
				alignSelf="center"
				justifyContent="center"
				spacing={8}
				position="relative"
				pb={50}
			>
				<ServiceCard
					image="images/IconRecrutamentoInterno.png"
					heading="Recrutamento Interno"
					description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				/>
				<ServiceCard
					image="images/IconEstagio.png"
					heading="Programas de Estágio"
					description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				/>
			</HStack>
		</Box>
	);
};
