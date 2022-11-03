import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { RiComputerLine } from 'react-icons/ri';
import { ServiceCard } from '../../../components/serviceCard';

export const Services = () => {
	return (
		<Box id="jobs" w="full" px={4} alignItems="center" bg="white">
			<Flex justifyContent="center" alignItems="center">
				<Heading color="black" fontSize={32} textAlign="center" py={10}>
					Vagas disponíveis nas seguintes áreas:
				</Heading>
			</Flex>
			<HStack
				w="100%"
				align="flex-start"
				justify="flex-start"
				h="fit-content"
				spacing={8}
				overflowX="auto"
				py={10}
				pb={50}
			>
				<ServiceCard
					icon={RiComputerLine}
					heading="Technologies"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				/>
				<ServiceCard
					icon={RiComputerLine}
					heading="Technologies"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				/>
			</HStack>
		</Box>
	);
};
