import { Box, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export const ServiceCard = ({
	heading,
	description,
}: {
	heading: string;
	description: string;
}) => {
	return (
		<Box
			boxShadow="1px 2px 5px 2px #D3CBC2"
			flexDirection="column"
			bg="whiteAlpha.800"
			p={5}
			w="full"
			maxW="35%"
			maxH="100%"
			justifyContent="center"
		>
			<Box flex={1} h="100%" color="black">
				<Heading color="black" fontSize={20} letterSpacing="3px" pb="20px">
					{heading}
				</Heading>
				<Text color="black">{description}</Text>
			</Box>
			<Link display="flex" alignItems="center" py={3} color="black">
				<Icon as={BsSearch} color="black" mr="10px" />
				Saiba Mais
			</Link>
		</Box>
	);
};
