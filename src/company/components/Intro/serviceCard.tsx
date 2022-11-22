import {
	Box,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export const ServiceCard = ({
	image: { url: string },
	heading,
	description,
}: {
	image: any;
	heading: string;
	description: string;
}) => {
	return (
		<Flex
			boxShadow="0px 2px 5px 0px #2A4365"
			borderRadius="10"
			flexDirection="column"
			p={4}
			pb={8}
			w="full"
			maxW="30%"
			align="center"
			ml="10px"
			bg="white"
		>
			<Box h="100%" w="100%">
				<HStack>
					<Image src="images/IconRecrutamentoInterno.png" />
					<Heading
						color="#171923"
						fontSize={20}
						letterSpacing="3px"
						pt="5px"
						p={5}
					>
						{heading}
					</Heading>
				</HStack>
				<Text color="black" pt="10px">
					{description}
				</Text>
			</Box>
			<Link className="g-text" display="flex" alignItems="center" pt={5}>
				<Icon as={BsSearch} color="brand.100" mr="10px" />
				Saiba Mais
			</Link>
		</Flex>
	);
};
