import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { ServiceCard } from '../../../components/serviceCard';

export const Services = () => {
	return (
		<Box id="jobs" w="full" py="50px" px={4} alignItems="center">
			<Flex
				justifyContent="space-between"
				alignItems="center"
				align="center"
				pb="40px"
			>
				<Heading
					color="black"
					alignItems="center"
					fontSize={32}
					letterSpacing="3px"
					textAlign="center"
				>
					Vagas disponíveis nas seguintes áreas:
				</Heading>
			</Flex>
			<HStack
				w="100%"
				align="flex-start"
				justify="flex-start"
				h="fit-content"
				spacing={10}
				overflowX="auto"
				py={4}
				px={2}
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
