import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

export const Card = ({
	icon,
	heading,
	description,
	path,
}: {
	icon: IconType;
	heading: string;
	description: string;
	path: string;
}) => {
	const navigate = useNavigate();
	const goTo = () => {
		navigate(path);
	};
	return (
		<Flex
			onClick={goTo}
			flexDirection="column"
			p={7}
			w="full"
			height="100%"
			maxH="100%"
			justifyContent="space-between"
			align="center"
			border="groove"
			borderRadius="8px"
			borderColor="brand.200"
			_hover={{ backgroundColor: 'gray.100', cursor: 'pointer' }}
		>
			<Icon className="svg-gradient" h={20} w={16} as={icon} />
			<Box flex={1} h="100%">
				<Heading
					fontSize={20}
					alignItems="center"
					letterSpacing="3px"
					pb="20px"
				>
					{heading}
				</Heading>
				<Link href={path} color="black">
					{description}
				</Link>
			</Box>
		</Flex>
	);
};
