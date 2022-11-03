import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { ServiceCard } from '../../../components/Intro/serviceCard';

export const Services = () => {
	return (
		<Box
			background="
		linear-gradient(
		90deg,
		rgba(10, 186, 181, 1) 0%,
		rgba(0, 119, 182, 1) 100%
	)"
		>
			<Box id="jobs" w="full" px={8} alignItems="start">
				<Flex justifyContent="center" alignItems="start" pl={8}>
					<Heading color="black" fontSize={32} textAlign="center" py={10}>
						Ferramentas de recrutamento:
					</Heading>
				</Flex>
				<HStack
					w="100%"
					align="center"
					justify="center"
					h="fit-content"
					spacing={8}
					overflowX="auto"
					py={10}
					px={2}
					pb={50}
				>
					<ServiceCard
						heading="Recrutamento Interno"
						description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
					/>
					<ServiceCard
						heading="Programas de Estágio e Trainee"
						description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
					/>
				</HStack>
			</Box>
		</Box>
	);
};
