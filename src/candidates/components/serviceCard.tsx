import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { BsSearch } from 'react-icons/bs';

export const ServiceCard = ({
	icon,
	heading,
	description,
}: {
	icon: IconType;
	heading: string;
	description: string;
}) => {
	return (
		<Flex
			flexDirection="column"
			bg="blue.50"
			p={7}
			w="full"
			height="100%"
			maxH="100%"
			justifyContent="space-between"
			align="center"
		>
			<Icon h={20} w={20} as={icon} />
			<Box flex={1} h="100%">
				<Heading color="blue.800" fontSize={20} letterSpacing="3px" pb="20px">
					{heading}
				</Heading>
				<Text color="black">{description}</Text>
			</Box>
			<Link display="flex" alignItems="center" py={3} color="blue.800">
				<Icon as={BsSearch} color="brand.100" mr="10px" />
				Saiba Mais
			</Link>
		</Flex>
	);
};
