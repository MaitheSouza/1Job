import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { RiComputerLine } from 'react-icons/ri';
import { ServiceCard } from '../../../components/serviceCard';

export const Services = () => {
	return (
		<Box id="jobs" w="full" alignItems="center" bg="brand.100" pb={20} pt={10}>
			<Flex justifyContent="center" alignItems="center">
				<Heading color="white" fontSize={32} textAlign="center" py={10}>
					Vagas disponíveis nas seguintes áreas:
				</Heading>
			</Flex>
			<HStack
				w="100%"
				align="center"
				justify="center"
				spacing={8}
				pb={50}
				position="relative"
			>
				<ServiceCard
					icon={RiComputerLine}
					heading="Tecnologia"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<ServiceCard
					icon={RiComputerLine}
					heading="Marketing"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<ServiceCard
					icon={RiComputerLine}
					heading="Nutrição"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
			</HStack>
		</Box>
	);
};
